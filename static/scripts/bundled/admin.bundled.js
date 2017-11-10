webpackJsonp([1],{106:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},107:function(e,t,r){"use strict";var n=r(7),o=r(252),i=r(254),a=r(255),s=r(256),u=r(108),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(257);e.exports=function(e){return new Promise(function(t,l){var d=e.data,f=e.headers;n.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest,m="onreadystatechange",h=!1;if(window.XMLHttpRequest||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||s(e.url)||(p=new window.XDomainRequest,m="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var _=e.auth.username||"",g=e.auth.password||"";f.Authorization="Basic "+c(_+":"+g)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[m]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:n,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:r,config:e,request:p};o(t,l,i),p=null}},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var v=r(258),y=(e.withCredentials||s(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(f[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(f,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},108:function(e,t,r){"use strict";var n=r(253);e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},109:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},110:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},236:function(e,t,r){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var n=r(0),o=t(n),i=r(27),a=t(i),s=r(237),u=t(s),c=r(50),l=t(c),d=r(14),f=t(d),p=r(6),m=(t(p),r(10)),h=t(m),_=r(36),g=t(_),v=r(3),y=t(v),w=r(28),b=t(w),x=r(61),C=t(x),E=r(238),T=t(E),S=o.default;window.app=function(t,r){window.Galaxy=new a.default.GalaxyApp(t,r),Galaxy.debug("admin app");var n=g.default.extend({routes:{"(/)admin(/)users":"show_users","(/)admin(/)roles":"show_roles","(/)admin(/)groups":"show_groups","(/)admin(/)tool_versions":"show_tool_versions","(/)admin(/)quotas":"show_quotas","(/)admin(/)repositories":"show_repositories","(/)admin(/)forms":"show_forms","(/)admin(/)form(/)(:form_id)":"show_form","(/)admin/api_keys":"show_user_api_keys"},authenticate:function(e,t){return Galaxy.user&&Galaxy.user.id&&Galaxy.user.get("is_admin")},show_users:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/users_list",url_data:Galaxy.params,dict_format:!0}))},show_roles:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/roles_list",url_data:Galaxy.params,dict_format:!0}))},show_groups:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/groups_list",url_data:Galaxy.params,dict_format:!0}))},show_repositories:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin_toolshed/browse_repositories",url_data:Galaxy.params,dict_format:!0}))},show_tool_versions:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/tool_versions_list",url_data:Galaxy.params,dict_format:!0}))},show_quotas:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/quotas_list",url_data:Galaxy.params,dict_format:!0}))},show_user_api_keys:function(){var e=document.createElement("div");this.page.display(e),new C.default({el:e,template:"<UserAPIKeys/>",components:{UserAPIKeys:T.default}})},show_forms:function(){this.page.display(new f.default({url_base:Galaxy.root+"forms/forms_list",url_data:Galaxy.params,dict_format:!0}))},show_form:function(e){var t="?id="+h.default.get("id"),r={reset_user_password:{title:"Reset passwords",url:"admin/reset_user_password"+t,icon:"fa-user",submit_title:"Save new password",redirect:"admin/users"},manage_roles_and_groups_for_user:{url:"admin/manage_roles_and_groups_for_user"+t,icon:"fa-users",redirect:"admin/users"},manage_users_and_groups_for_role:{url:"admin/manage_users_and_groups_for_role"+t,redirect:"admin/roles"},manage_users_and_roles_for_group:{url:"admin/manage_users_and_roles_for_group"+t,redirect:"admin/groups"},manage_users_and_groups_for_quota:{url:"admin/manage_users_and_groups_for_quota"+t,redirect:"admin/quotas"},create_role:{url:"admin/create_role",redirect:"admin/roles"},create_group:{url:"admin/create_group",redirect:"admin/groups"},create_quota:{url:"admin/create_quota",redirect:"admin/quotas"},rename_role:{url:"admin/rename_role"+t,redirect:"admin/roles"},rename_group:{url:"admin/rename_group"+t,redirect:"admin/groups"},rename_quota:{url:"admin/rename_quota"+t,redirect:"admin/quotas"},edit_quota:{url:"admin/edit_quota"+t,redirect:"admin/quotas"},set_quota_default:{url:"admin/set_quota_default"+t,redirect:"admin/quotas"},create_form:{url:"forms/create_form",redirect:"admin/forms"},edit_form:{url:"forms/edit_form"+t,redirect:"admin/forms"}};this.page.display(new l.default.View(r[e]))}});S(function(){e.extend(t.config,{active_view:"admin"}),y.default.setWindowTitle("Administration"),Galaxy.page=new b.default.View(e.extend(t,{Left:u.default,Router:n}))})}}).call(t,r(1))},237:function(e,t,r){"use strict";(function(e,n,o){Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s=e.View.extend({initialize:function(t,r){var n=this;this.page=t,this.root=r.root,this.config=r.config,this.settings=r.settings,this.message=r.message,this.status=r.status,this.model=new e.Model({title:(0,a.default)("Administration")}),this.categories=new e.Collection([{title:"Server",items:[{title:"Data types",url:"admin/view_datatypes_registry"},{title:"Data tables",url:"admin/view_tool_data_tables"},{title:"Data libraries",url:"library_admin/browse_libraries"},{title:"Display applications",url:"admin/display_applications"},{title:"Manage jobs",url:"admin/jobs"},{title:"Local data",url:"data_manager"}]},{title:"User Management",items:[{title:"Users",url:"admin/users",target:"__use_router__"},{title:"Quotas",url:"admin/quotas",target:"__use_router__",enabled:n.config.enable_quotas},{title:"Groups",url:"admin/groups",target:"__use_router__"},{title:"Roles",url:"admin/roles",target:"__use_router__"},{title:"Forms",url:"admin/forms",target:"__use_router__"},{title:"API keys",url:"admin/api_keys",target:"__use_router__"},{title:"Impersonate a user",url:"admin/impersonate",enabled:n.config.allow_user_impersonation}]},{title:"Tool Management",items:[{title:"Install new tools",url:"admin_toolshed/browse_tool_sheds",enabled:n.settings.is_tool_shed_installed},{title:"Install new tools (Beta)",url:"admin_toolshed/browse_toolsheds",enabled:n.settings.is_tool_shed_installed&&n.config.enable_beta_ts_api_install},{title:"Monitor installation",url:"admin_toolshed/monitor_repository_installation",enabled:n.settings.installing_repository_ids},{title:"Manage tools",url:"admin/repositories",enabled:n.settings.is_repo_installed,target:"__use_router__"},{title:"Manage metadata",url:"admin_toolshed/reset_metadata_on_selected_installed_repositories",enabled:n.settings.is_repo_installed},{title:"Manage whitelist",url:"admin/sanitize_whitelist"},{title:"Manage dependencies",url:"admin/manage_tool_dependencies"},{title:"View lineage",url:"admin/tool_versions",target:"__use_router__"},{title:"View migration stages",url:"admin/review_tool_migration_stages"},{title:"View error logs",url:"admin/tool_errors"}]}]),this.setElement(this._template())},render:function(){var e=this;this.$el.empty(),this.categories.each(function(t){var r=n(e._templateSection(t.attributes)),i=r.find(".ui-side-section-body");o.each(t.get("items"),function(t){if(void 0===t.enabled||t.enabled){var r=n("<a/>").attr({href:e.root+t.url}).text((0,a.default)(t.title));"__use_router__"==t.target?r.on("click",function(r){r.preventDefault(),e.page.router.push(t.url)}):r.attr("target","galaxy_main"),i.append(n("<div/>").addClass("ui-side-section-body-title").append(r))}}),e.$el.append(r)}),this.page.$("#galaxy_main").prop("src",this.root+"admin/center?message="+this.message+"&status="+this.status)},_templateSection:function(e){return["<div>",'<div class="ui-side-section-title">'+(0,a.default)(e.title)+"</div>",'<div class="ui-side-section-body"/>',"</div>"].join("")},_template:function(){return'<div class="ui-side-panel"/>'},toString:function(){return"adminPanel"}});t.default=s}).call(t,r(2),r(0),r(1))},238:function(e,t,r){"use strict";function n(e){r(239)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(245),i=r.n(o),a=r(266),s=r(244),u=n,c=s(i.a,a.a,!1,u,null,null);t.default=c.exports},239:function(e,t,r){var n=r(240);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(242)("5dc30332",n,!0)},240:function(e,t,r){t=e.exports=r(241)(void 0),t.push([e.i,"",""])},241:function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},242:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=l[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(i(r.parts[o]));l[r.id]={id:r.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(m)return h;n.parentNode.removeChild(n)}if(_){var i=p++;n=f||(f=o()),t=a.bind(null,n,i,!1),r=a.bind(null,n,i,!0)}else n=o(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function a(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(243),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,m=!1,h=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){m=r;var o=c(e,t);return n(o),function(t){for(var r=[],i=0;i<o.length;i++){var a=o[i],s=l[a.id];s.refs--,r.push(s)}t?(o=c(e,t),n(o)):o=[];for(var i=0;i<r.length;i++){var s=r[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},243:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],c=i[3],l={id:e+":"+o,css:s,media:u,sourceMap:c};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}},244:function(e,t){e.exports=function(e,t,r,n,o,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:c}}},245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(246),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={data:function(){return{users:[],errors:[]}},created:function(){var e=this;o.default.get(Galaxy.root+"userskeys/all_users").then(function(t){e.users=t.data}).catch(function(t){e.errors.push(t)})},methods:{generateKey:function(e){var t=this;o.default.get(Galaxy.root+"userskeys/admin_api_keys",{params:{uid:e}}).then(function(e){t.users=e.data}).catch(function(e){t.errors.push(e)})}}}},246:function(e,t,r){e.exports=r(247)},247:function(e,t,r){"use strict";function n(e){var t=new a(e),r=i(a.prototype.request,t);return o.extend(r,a.prototype,t),o.extend(r,t),r}var o=r(7),i=r(106),a=r(249),s=r(51),u=n(s);u.Axios=a,u.create=function(e){return n(o.merge(s,e))},u.Cancel=r(110),u.CancelToken=r(264),u.isCancel=r(109),u.all=function(e){return Promise.all(e)},u.spread=r(265),e.exports=u,e.exports.default=u},248:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},249:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=r(51),i=r(7),a=r(259),s=r(260);n.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},i.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},250:function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===n||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?m=p.concat(m):_=-1,m.length&&s())}function s(){if(!h){var e=o(a);h=!0;for(var t=m.length;t;){for(p=m,m=[];++_<t;)p&&p[_].run();_=-1,t=m.length}p=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{d="function"==typeof clearTimeout?clearTimeout:n}catch(e){d=n}}();var p,m=[],h=!1,_=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];m.push(new u(e,t)),1!==m.length||h||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},251:function(e,t,r){"use strict";var n=r(7);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},252:function(e,t,r){"use strict";var n=r(108);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},253:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},254:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(7);e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(n(t)+"="+n(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},255:function(e,t,r){"use strict";var n=r(7),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}}),a):a}},256:function(e,t,r){"use strict";var n=r(7);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},257:function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),a="",s=0,u=i;o.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&t>>8-s%1*8)){if((r=o.charCodeAt(s+=.75))>255)throw new n;t=t<<8|r}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},258:function(e,t,r){"use strict";var n=r(7);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},259:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(7);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},260:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(7),i=r(261),a=r(109),s=r(51),u=r(262),c=r(263);e.exports=function(e){return n(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},261:function(e,t,r){"use strict";var n=r(7);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},262:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},263:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},264:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(110);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},265:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},266:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"toolForm",attrs:{id:"form-userkeys"}},[r("div",{staticClass:"toolFormTitle"},[e._v("User Information")]),e._v(" "),e.users&&e.users.length>0?r("div",[r("table",{staticClass:"grid"},[e._m(0),e._v(" "),r("tbody",e._l(e.users,function(t){return r("tr",[r("td",[e._v("\n                        "+e._s(t.uid)+"\n                    ")]),e._v(" "),r("td",[e._v("\n                        "+e._s(t.email)+"\n                    ")]),e._v(" "),r("td",[e._v("\n                        "+e._s(t.key)+"\n                    ")]),e._v(" "),r("td",[r("input",{attrs:{type:"button",value:"Generate a new key now"},on:{click:function(r){e.generateKey(t.uid)}}})])])}))])]):r("div",[r("div",[e._v("No user information available")])]),e._v(" "),r("div",{staticStyle:{clear:"both"}})])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("th",[e._v("Encoded UID")]),r("th",[e._v("Email")]),r("th",[e._v("API Key")]),r("th",[e._v("Actions")])])}],i={render:n,staticRenderFns:o};t.a=i},36:function(e,t,r){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),a=r(10),s=n(a),u=r(6),c=n(u),l=i.default,d=e.Router.extend({initialize:function(e,t){this.page=e,this.options=t},push:function(e,t){t=t||{},t.__identifer=Math.random().toString(36).substr(2),l.isEmptyObject(t)||(e+=-1==e.indexOf("?")?"?":"&",e+=l.param(t,!0)),Galaxy.params=t,this.navigate(e,{trigger:!0})},execute:function(e,t,r){Galaxy.debug("router execute:",e,t,r);var n=s.default.parse(t.pop());t.push(n),e&&(this.authenticate(t,r)?e.apply(this,t):this.access_denied())},authenticate:function(e,t){return!0},access_denied:function(){this.page.display(new c.default.Message({status:"danger",message:"You must be logged in with proper credentials to make this request.",persistent:!0}))}});t.default=d}).call(t,r(2))},50:function(e,t,r){"use strict";(function(e,n){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(11),a=o(i),s=r(6),u=o(s),c=e.View.extend({initialize:function(t){this.model=new e.Model(t),this.url=this.model.get("url"),this.redirect=this.model.get("redirect"),this.setElement("<div/>"),this.render()},render:function(){var e=this;n.ajax({url:Galaxy.root+this.url,type:"GET"}).done(function(t){var r=n.extend({},e.model.attributes,t),o=new a.default({title:r.title,message:r.message,status:r.status||"warning",icon:r.icon,inputs:r.inputs,buttons:{submit:new u.default.Button({tooltip:r.submit_tooltip,title:r.submit_title||"Save",icon:r.submit_icon||"fa-save",cls:"btn btn-primary ui-clear-float",onclick:function(){e._submit(o)}})}});e.$el.empty().append(o.$el)}).fail(function(t){e.$el.empty().append(new u.default.Message({message:"Failed to load resource "+e.url+".",status:"danger",persistent:!0}).$el)})},_submit:function(e){var t=this;n.ajax({url:Galaxy.root+t.url,data:JSON.stringify(e.data.create()),type:"PUT",contentType:"application/json"}).done(function(r){var o={message:r.message,status:"success",persistent:!1};t.redirect?window.location=Galaxy.root+t.redirect+"?"+n.param(o):(e.data.matchModel(r,function(t,r){e.field_list[r].value(t.value)}),t._showMessage(e,o))}).fail(function(r){t._showMessage(e,{message:r.responseJSON.err_msg,status:"danger",persistent:!1})})},_showMessage:function(e,t){e.$el.parents().filter(function(){return-1!=["auto","scroll"].indexOf(n(this).css("overflow"))}).first().animate({scrollTop:0},500),e.message.update(t)}});t.default={View:c}}).call(t,r(2),r(0))},51:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(7),i=r(251),a={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(107):void 0!==t&&(e=r(107)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(a)}),e.exports=s}).call(t,r(250))},7:function(e,t,r){"use strict";function n(e){return"[object Array]"===E.call(e)}function o(e){return"[object ArrayBuffer]"===E.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===E.call(e)}function f(e){return"[object File]"===E.call(e)}function p(e){return"[object Blob]"===E.call(e)}function m(e){return"[object Function]"===E.call(e)}function h(e){return l(e)&&m(e.pipe)}function _(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)y(arguments[r],e);return t}function b(e,t,r){return y(t,function(t,n){e[n]=r&&"function"==typeof t?x(t,r):t}),e}var x=r(106),C=r(248),E=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:a,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:d,isFile:f,isBlob:p,isFunction:m,isStream:h,isURLSearchParams:_,isStandardBrowserEnv:v,forEach:y,merge:w,extend:b,trim:g}}},[236]);
//# sourceMappingURL=admin.bundled.js.map