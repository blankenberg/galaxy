webpackJsonp([2],{123:function(e,t,i){"use strict";(function(e,t){function a(e){return e&&e.__esModule?e:{default:e}}var n=i(0),r=a(n),o=i(27),l=a(o),u=i(4),d=a(u),c=i(28),f=a(c),p=r.default;window.app=function(i,a){window.Galaxy=new l.default.GalaxyApp(i,a),Galaxy.debug("login app");var n=encodeURI(i.redirect);if(!i.show_welcome_with_login){var o=r.default.param({use_panels:"True",redirect:n});return void(window.location.href=Galaxy.root+"user/login?"+o)}var u=e.View.extend({initialize:function(t){this.page=t,this.model=new e.Model({title:(0,d.default)("Login required")}),this.setElement(this._template())},render:function(){this.page.$("#galaxy_main").prop("src",i.welcome_url)},_template:function(){return'<iframe src="'+i.root+"user/login?"+p.param({redirect:n})+'" frameborder="0" style="width: 100%; height: 100%;"/>'}});p(function(){Galaxy.page=new f.default.View(t.extend(i,{Right:u}))})}}).call(t,i(2),i(1))}},[123]);
//# sourceMappingURL=login.bundled.js.map