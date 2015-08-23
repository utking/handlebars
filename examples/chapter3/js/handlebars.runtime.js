/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
define("handlebars/utils",["exports"],function(a){function b(a){return i[a]}function c(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function e(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return k.test(a)?a.replace(j,b):a}function f(a){return a||0===a?n(a)&&0===a.length?!0:!1:!0}function g(a,b){return a.path=b,a}function h(a,b){return(a?a+".":"")+b}a.__esModule=!0,a.extend=c,a.indexOf=d,a.escapeExpression=e,a.isEmpty=f,a.blockParams=g,a.appendContextPath=h;var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},j=/[&<>"'`]/g,k=/[&<>"'`]/,l=Object.prototype.toString;a.toString=l;var m=function(a){return"function"==typeof a};m(/x/)&&(a.isFunction=m=function(a){return"function"==typeof a&&"[object Function]"===l.call(a)});var m;a.isFunction=m;var n=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===l.call(a):!1};a.isArray=n}),define("handlebars/exception",["exports","module"],function(a,b){function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b.exports=c}),define("handlebars/base",["exports","./utils","./exception"],function(a,b,c){function d(a,b){this.helpers=a||{},this.partials=b||{},e(this)}function e(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new h('Missing helper: "'+arguments[arguments.length-1].name+'"')}),a.registerHelper("blockHelperMissing",function(c,d){var e=d.inverse,g=d.fn;if(c===!0)return g(this);if(c===!1||null==c)return e(this);if(l(c))return c.length>0?(d.ids&&(d.ids=[d.name]),a.helpers.each(c,d)):e(this);if(d.data&&d.ids){var h=f(d.data);h.contextPath=b.appendContextPath(d.data.contextPath,d.name),d={data:h}}return g(c,d)}),a.registerHelper("each",function(a,c){function d(c,d,f){k&&(k.key=c,k.index=d,k.first=0===d,k.last=!!f,n&&(k.contextPath=n+c)),j+=e(a[c],{data:k,blockParams:b.blockParams([a[c],c],[n+c,null])})}if(!c)throw new h("Must pass iterator to #each");var e=c.fn,g=c.inverse,i=0,j="",k=void 0,n=void 0;if(c.data&&c.ids&&(n=b.appendContextPath(c.data.contextPath,c.ids[0])+"."),m(a)&&(a=a.call(this)),c.data&&(k=f(c.data)),a&&"object"==typeof a)if(l(a))for(var o=a.length;o>i;i++)d(i,i,i===a.length-1);else{var p=void 0;for(var q in a)a.hasOwnProperty(q)&&(p&&d(p,i-1),p=q,i++);p&&d(p,i-1,!0)}return 0===i&&(j=g(this)),j}),a.registerHelper("if",function(a,c){return m(a)&&(a=a.call(this)),!c.hash.includeZero&&!a||b.isEmpty(a)?c.inverse(this):c.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,c){m(a)&&(a=a.call(this));var d=c.fn;if(b.isEmpty(a))return c.inverse(this);if(c.data&&c.ids){var e=f(c.data);e.contextPath=b.appendContextPath(c.data.contextPath,c.ids[0]),c={data:e}}return d(a,c)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}function f(a){var c=b.extend({},a);return c._parent=a,c}var g=function(a){return a&&a.__esModule?a["default"]:a};a.__esModule=!0,a.HandlebarsEnvironment=d,a.createFrame=f;var h=g(c),i="3.0.1";a.VERSION=i;var j=6;a.COMPILER_REVISION=j;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};a.REVISION_CHANGES=k;var l=b.isArray,m=b.isFunction,n=b.toString,o="[object Object]";d.prototype={constructor:d,logger:p,log:q,registerHelper:function(a,c){if(n.call(a)===o){if(c)throw new h("Arg not supported with multiple helpers");b.extend(this.helpers,a)}else this.helpers[a]=c},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,c){if(n.call(a)===o)b.extend(this.partials,a);else{if("undefined"==typeof c)throw new h("Attempting to register a partial as undefined");this.partials[a]=c}},unregisterPartial:function(a){delete this.partials[a]}};var p={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(a,b){if("undefined"!=typeof console&&p.level<=a){var c=p.methodMap[a];(console[c]||console.log).call(console,b)}}};a.logger=p;var q=p.log;a.log=q}),define("handlebars/safe-string",["exports","module"],function(a,b){function c(a){this.string=a}c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b.exports=c}),define("handlebars/runtime",["exports","./utils","./exception","./base"],function(a,b,c,d){function e(a){var b=a&&a[0]||1,c=d.COMPILER_REVISION;if(b!==c){if(c>b){var e=d.REVISION_CHANGES[c],f=d.REVISION_CHANGES[b];throw new m("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e+") or downgrade your runtime to an older version ("+f+").")}throw new m("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function f(a,c){function d(d,e,f){f.hash&&(e=b.extend({},e,f.hash)),d=c.VM.resolvePartial.call(this,d,e,f);var g=c.VM.invokePartial.call(this,d,e,f);if(null==g&&c.compile&&(f.partials[f.name]=c.compile(d,a.compilerOptions,c),g=f.partials[f.name](e,f)),null!=g){if(f.indent){for(var h=g.split("\n"),i=0,j=h.length;j>i&&(h[i]||i+1!==j);i++)h[i]=f.indent+h[i];g=h.join("\n")}return g}throw new m("The partial "+f.name+" could not be compiled when running in runtime-only mode")}function e(b){var c=void 0===arguments[1]?{}:arguments[1],d=c.data;e._setup(c),!c.partial&&a.useData&&(d=k(b,d));var g=void 0,h=a.useBlockParams?[]:void 0;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(f,b,f.helpers,f.partials,d,h,g)}if(!c)throw new m("No environment passed to template");if(!a||!a.main)throw new m("Unknown template object: "+typeof a);c.VM.checkRevision(a.compiler);var f={strict:function(a,b){if(!(b in a))throw new m('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:b.escapeExpression,invokePartial:d,fn:function(b){return a[b]},programs:[],program:function(a,b,c,d,e){var f=this.programs[a],h=this.fn(a);return b||e||d||c?f=g(this,a,h,b,c,d,e):f||(f=this.programs[a]=g(this,a,h)),f},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,c){var d=a||c;return a&&c&&a!==c&&(d=b.extend({},c,a)),d},noop:c.VM.noop,compilerInfo:a.compiler};return e.isTop=!0,e._setup=function(b){b.partial?(f.helpers=b.helpers,f.partials=b.partials):(f.helpers=f.merge(b.helpers,c.helpers),a.usePartial&&(f.partials=f.merge(b.partials,c.partials)))},e._child=function(b,c,d,e){if(a.useBlockParams&&!d)throw new m("must pass block params");if(a.useDepths&&!e)throw new m("must pass parent depths");return g(f,b,a[b],c,0,d,e)},e}function g(a,b,c,d,e,f,g){function h(b){var e=void 0===arguments[1]?{}:arguments[1];return c.call(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),g&&[b].concat(g))}return h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function h(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a=c.partials[c.name],a}function i(a,b,c){if(c.partial=!0,void 0===a)throw new m("The partial "+c.name+" could not be found");return a instanceof Function?a(b,c):void 0}function j(){return""}function k(a,b){return b&&"root"in b||(b=b?d.createFrame(b):{},b.root=a),b}var l=function(a){return a&&a.__esModule?a["default"]:a};a.__esModule=!0,a.checkRevision=e,a.template=f,a.wrapProgram=g,a.resolvePartial=h,a.invokePartial=i,a.noop=j;var m=l(c)}),define("handlebars/no-conflict",["exports","module"],function(a,b){b.exports=function(a){var b="undefined"!=typeof global?global:window,c=b.Handlebars;a.noConflict=function(){b.Handlebars===a&&(b.Handlebars=c)}}}),define("handlebars.runtime",["exports","module","./handlebars/base","./handlebars/safe-string","./handlebars/exception","./handlebars/utils","./handlebars/runtime","./handlebars/no-conflict"],function(a,b,c,d,e,f,g,h){function i(){var a=new c.HandlebarsEnvironment;return f.extend(a,c),a.SafeString=k,a.Exception=l,a.Utils=f,a.escapeExpression=f.escapeExpression,a.VM=g,a.template=function(b){return g.template(b,a)},a}var j=function(a){return a&&a.__esModule?a["default"]:a},k=j(d),l=j(e),m=j(h),n=i();n.create=i,m(n),n["default"]=n,b.exports=n});