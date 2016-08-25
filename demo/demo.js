!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require){"use strict";{var ExampleController=require("./example-controller").ExampleController;new ExampleController(document)}},{"./example-controller":2}],2:[function(require,module,exports){"use strict";{var _prototypeProperties=function(child,staticProps,instanceProps){staticProps&&Object.defineProperties(child,staticProps),instanceProps&&Object.defineProperties(child.prototype,instanceProps)},_inherits=function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(subClass.__proto__=superClass)},Controller=require("../src/controller").Controller,ExampleModel=require("./example-model").ExampleModel,ExampleView=require("./example-view").ExampleView;exports.ExampleController=function(Controller){function ExampleController(){null!==Object.getPrototypeOf(ExampleController)&&Object.getPrototypeOf(ExampleController).apply(this,arguments)}return _inherits(ExampleController,Controller),_prototypeProperties(ExampleController,null,{defaults:{get:function(){return{selectors:{displayElement:".display",searchField:".search-field",searchButton:".search-button"}}},enumerable:!0,configurable:!0},listeners:{get:function(){return[{selector:"{selectors.searchButton} click",handler:this.displayArtist},{selector:"click",handler:this.example}]},enumerable:!0,configurable:!0},initialize:{value:function(){console.log("exampleController.initialize()")},writable:!0,enumerable:!0,configurable:!0},displayArtist:{value:function(){console.log("exampleController.displayArtist()"),$(this.selectors.displayElement).view(ExampleView.render(ExampleModel.find({term:$(this.selectors.searchField).val()})))},writable:!0,enumerable:!0,configurable:!0},example:{value:function(event){console.log("exampleController.example()"),event.stopPropagation()},writable:!0,enumerable:!0,configurable:!0}}),ExampleController}(Controller)}exports.__esModule=!0},{"../src/controller":5,"./example-model":3,"./example-view":4}],3:[function(require,module,exports){"use strict";{var _prototypeProperties=function(child,staticProps,instanceProps){staticProps&&Object.defineProperties(child,staticProps),instanceProps&&Object.defineProperties(child.prototype,instanceProps)},_inherits=function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(subClass.__proto__=superClass)},Model=require("../src/model").Model;exports.ExampleModel=function(Model){function ExampleModel(){null!==Object.getPrototypeOf(ExampleModel)&&Object.getPrototypeOf(ExampleModel).apply(this,arguments)}return _inherits(ExampleModel,Model),_prototypeProperties(ExampleModel,{services:{get:function(){return{create:{method:"POST",uri:"https://itunes.apple.com/search?term=${term}",format:"jsonp"},find:{method:"GET",uri:"https://itunes.apple.com/search?term=${term}",format:"jsonp"},update:{method:"PUT",uri:"https://itunes.apple.com/search?term=${term}",format:"jsonp"},"delete":{method:"DELETE",uri:"https://itunes.apple.com/search?term=${term}",format:"jsonp"}}},enumerable:!0,configurable:!0},filter:{value:function(data){if(console.log("ExampleModel.filter()"),data.results instanceof Array)return data.results;throw new Error("Could not filter results of non-array in class ExampleModel")},writable:!0,enumerable:!0,configurable:!0}}),ExampleModel}(Model)}exports.__esModule=!0},{"../src/model":6}],4:[function(require,module,exports){"use strict";{var _prototypeProperties=function(child,staticProps,instanceProps){staticProps&&Object.defineProperties(child,staticProps),instanceProps&&Object.defineProperties(child.prototype,instanceProps)},_inherits=function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(subClass.__proto__=superClass)},View=require("../src/view").View;exports.ExampleView=function(View){function ExampleView(){null!==Object.getPrototypeOf(ExampleView)&&Object.getPrototypeOf(ExampleView).apply(this,arguments)}return _inherits(ExampleView,View),_prototypeProperties(ExampleView,{template:{value:function(data){return console.log("exampleView.template()"),'\n			<h2>\n				<span style="color: #808080;">'+data[0].artistName+"</span> "+data[0].trackName+"\n			</h2>\n		"},writable:!0,enumerable:!0,configurable:!0}}),ExampleView}(View)}exports.__esModule=!0},{"../src/view":8}],5:[function(require,module,exports){"use strict";var _slicedToArray=function(arr,i){if(Array.isArray(arr))return arr;for(var _step,_arr=[],_iterator=arr[Symbol.iterator]();!(_step=_iterator.next()).done&&(_arr.push(_step.value),!i||_arr.length!==i););return _arr},_prototypeProperties=function(child,staticProps,instanceProps){staticProps&&Object.defineProperties(child,staticProps),instanceProps&&Object.defineProperties(child.prototype,instanceProps)},Controller=exports.Controller=function(){function Controller(context){console.log("controller.constructor()"),this.__defaults__=this.defaults,this.__listeners__=this.listeners;for(var classIterator=this.constructor.__proto__;classIterator.hasOwnProperty("prototype");)classIterator.prototype.hasOwnProperty("defaults")&&(this.__defaults__=Object.assign(classIterator.prototype.defaults,this.__defaults__)),classIterator.prototype.hasOwnProperty("listeners")&&(this.__listeners__=classIterator.prototype.listeners.concat(this.__listeners__)),classIterator=classIterator.constructor.__proto__;this.element=$(context),Object.assign(this,this.__defaults__);for(var _step,_iterator=this.__listeners__[Symbol.iterator]();!(_step=_iterator.next()).done;){var listener=_step.value,_sSSS$exec=/(?:\{([^\{\}\s]*)\})*(\S+)*?\s*?(\S+)/.exec(listener.selector),_sSSS$exec2=_slicedToArray(_sSSS$exec,4),objectString=_sSSS$exec2[1],selectorElement=_sSSS$exec2[2],event=_sSSS$exec2[3];if(objectString){var objectProperties=objectString.split(".");for(selectorElement=this.defaults;objectProperties.length>=1;)selectorElement=selectorElement[objectProperties.shift()]}selectorElement||(selectorElement=context),$(selectorElement).is(context)?$(selectorElement).on(event,$.proxy(listener.handler,this)):$(selectorElement,$(context)).on(event,$.proxy(listener.handler,this)),$(selectorElement).is(document)&&"ready"==event&&/interactive|complete/.test(document.readyState)&&$(selectorElement).trigger("ready"),$(selectorElement).is(document)&&"load"==event&&/complete/.test(document.readyState)&&$(selectorElement).trigger("load")}this.initialize(context)}return _prototypeProperties(Controller,{classReference:{get:function(){return eval(this.name)},enumerable:!0,configurable:!0}},{classReference:{get:function(){return eval(this.constructor.name)},enumerable:!0,configurable:!0},defaults:{get:function(){return{}},enumerable:!0,configurable:!0},listeners:{get:function(){return[]},enumerable:!0,configurable:!0},initialize:{value:function(){console.log("controller.initialize()")},writable:!0,enumerable:!0,configurable:!0},destroy:{value:function(){var isIncludeElement=void 0===arguments[0]?!1:arguments[0];console.log("controller.destroy()"),isIncludeElement&&this.element.remove(),delete this},writable:!0,enumerable:!0,configurable:!0}}),Controller}();exports.__esModule=!0},{}],6:[function(require,module,exports){"use strict";var _prototypeProperties=function(child,staticProps,instanceProps){staticProps&&Object.defineProperties(child,staticProps),instanceProps&&Object.defineProperties(child.prototype,instanceProps)},Utility=require("./utility").Utility,Model=exports.Model=function(){function Model(attributes){console.log("model.constructor()"),Object.assign(this,attributes)}return _prototypeProperties(Model,{classReference:{get:function(){return eval(this.name)},enumerable:!0,configurable:!0},services:{get:function(){return{create:{method:"POST",uri:"",format:"jsonp"},find:{method:"GET",uri:"",format:"jsonp"},update:{method:"PUT",uri:"",format:"jsonp"},"delete":{method:"DELETE",uri:"",format:"jsonp"}}},enumerable:!0,configurable:!0},create:{value:function(attributes){return console.log("Model.create()"),this.hydrate(attributes).save()},writable:!0,enumerable:!0,configurable:!0},find:{value:function(attributes){return console.log("Model.find()"),this.__find__(attributes)},writable:!0,enumerable:!0,configurable:!0},findOrFail:{value:function(attributes){console.log("Model.findOrFail()"),$.when(this.__find__(attributes)).done(function(data){if(data instanceof Object&&data!={}||data instanceof Array&&data!=[])return data;throw new Error("Could not find instance of Model in class Model")})},writable:!0,enumerable:!0,configurable:!0},findOrNew:{value:function(attributes){console.log("Model.findOrNew()"),$.when(this.__find__(attributes)).done(function(data){return data instanceof Object&&data!={}||data instanceof Array&&data!=[]?data:this.hydrate(attributes)})},writable:!0,enumerable:!0,configurable:!0},firstOrCreate:{value:function(attributes){console.log("Model.firstOrCreate()"),$.when(this.__find__(attributes,!0)).done(function(data){return data instanceof Object&&data!={}?data:data instanceof Array&&data!=[]?data[0]:this.hydrate(attributes).save()})},writable:!0,enumerable:!0,configurable:!0},firstOrNew:{value:function(attributes){console.log("Model.firstOrNew()"),$.when(this.__find__(attributes,!0)).done(function(data){return data instanceof Object&&data!={}?data:data instanceof Array&&data!=[]?data[0]:this.hydrate(attributes)})},writable:!0,enumerable:!0,configurable:!0},updateOrCreate:{value:function(attributes,properties){console.log("Model.updateOrCreate()"),$.when(this.__find__(attributes,!1,properties)).done(function(data){return data instanceof Object&&data!={}||data instanceof Array&&data!=[]?data:this.hydrate(Object.assign(attributes,properties)).save()})},writable:!0,enumerable:!0,configurable:!0},destroy:{value:function(){var _this=this;console.log("Model.destroy()");var deferred=$.Deferred();return $.when($.ajax({type:this.services["delete"].method,url:Utility.stringFormat(this.services["delete"].uri,attributes),dataType:this.services["delete"].format})).done(function(data){return deferred.resolve(_this.hydrate(_this.filter(data)))}),deferred.promise()},writable:!0,enumerable:!0,configurable:!0},filter:{value:function(data){return console.log("Model.filter()"),data},writable:!0,enumerable:!0,configurable:!0},hydrate:{value:function(data){console.log("Model.hydrate()");var result=void 0;if(data instanceof Array){result=[];for(var _step,_iterator=data[Symbol.iterator]();!(_step=_iterator.next()).done;){var item=_step.value;item instanceof Object&&result.push(new this.classReference(item))}}else{if(!(data instanceof Object))throw new Error("Cannot hydrate model from a non-object in class Model");result=new this.classReference(data)}return result},writable:!0,enumerable:!0,configurable:!0},__find__:{value:function(attributes){var _this=this,isSingle=void 0===arguments[1]?!1:arguments[1],properties=void 0===arguments[2]?{}:arguments[2];console.log("Model.__find__()");var deferred=$.Deferred();return $.when($.ajax({type:this.services.find.method,url:Utility.stringFormat(this.services.find.uri,attributes),dataType:this.services.find.format})).done(function(data){var filtered=_this.filter(data),whittled=(isSingle||1==filtered.length)&&filtered instanceof Array?filtered[0]:filtered,merged=Object.assign(whittled,properties);deferred.resolve(_this.hydrate(merged))}),deferred.promise()},writable:!0,enumerable:!0,configurable:!0}},{classReference:{get:function(){return eval(this.constructor.name)},enumerable:!0,configurable:!0},update:{value:function(attributes){console.log("model.update()"),Object.assign(this,attributes).save()},writable:!0,enumerable:!0,configurable:!0},save:{value:function(){var _this=this;console.log("model.save()");var deferred=$.Deferred();return $.when($.ajax({type:this.services.update.method,url:Utility.stringFormat(this.services.update.uri,attributes),dataType:this.services.update.format})).done(function(){return deferred.resolve(_this)}),deferred.promise()},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(){console.log("model.delete()");var deferred=$.Deferred();return $.when($.ajax({type:this.services["delete"].method,url:Utility.stringFormat(this.services["delete"].uri,attributes),dataType:this.services["delete"].format})).done(function(){return deferred.resolve(!0)}),deferred.promise()},writable:!0,enumerable:!0,configurable:!0}}),Model}();exports.__esModule=!0},{"./utility":7}],7:[function(require,module,exports){"use strict";{var _prototypeProperties=function(child,staticProps,instanceProps){staticProps&&Object.defineProperties(child,staticProps),instanceProps&&Object.defineProperties(child.prototype,instanceProps)};exports.Utility=function(){function Utility(){throw new Error("Cannot instantiate static class Utility")}return _prototypeProperties(Utility,{generateGuid:{value:function(){var four=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return""+four()+four()+"-"+four()+"-"+four()+"-"+four()+"-"+four()+four()+four()},writable:!0,enumerable:!0,configurable:!0},stringFormat:{value:function(template,data){return template.replace(/\$\{([^\{\}]+)\}/g,function(match,key){return data[key]})},writable:!0,enumerable:!0,configurable:!0}}),Utility}()}exports.__esModule=!0},{}],8:[function(require,module,exports){"use strict";var _prototypeProperties=function(child,staticProps,instanceProps){staticProps&&Object.defineProperties(child,staticProps),instanceProps&&Object.defineProperties(child.prototype,instanceProps)},View=exports.View=function(){function View(){}return _prototypeProperties(View,{classReference:{get:function(){return eval(this.name)},enumerable:!0,configurable:!0},template:{value:function(){return console.log("View.template()"),""},writable:!0,enumerable:!0,configurable:!0},render:{value:function(request){var _this=this;console.log("View.render()");var deferred=$.Deferred();return $.when(request).done(function(data){return deferred.resolve(_this.template(data))}),deferred.promise()},writable:!0,enumerable:!0,configurable:!0}},{classReference:{get:function(){return eval(this.constructor.name)},enumerable:!0,configurable:!0}}),View}();exports.__esModule=!0},{}]},{},[1]);
//# sourceMappingURL=demo.js.map