(function(e){function t(t){for(var n,a,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);g&&g(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},i={app:0},s=[];function o(e){return l.p+"js/"+({about:"about","forget~login~register~reset":"forget~login~register~reset",forget:"forget",login:"login",register:"register",reset:"reset"}[e]||e)+"."+{about:"fc6b1145","forget~login~register~reset":"5ca5169a",forget:"9ae5118e",login:"4fe603ee",register:"d4543cb3",reset:"9cc05f48"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={forget:1,login:1,register:1,reset:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about","forget~login~register~reset":"forget~login~register~reset",forget:"forget",login:"login",register:"register",reset:"reset"}[e]||e)+"."+{about:"31d6cfe0","forget~login~register~reset":"31d6cfe0",forget:"0ce3f297",login:"98aad8ab",register:"4b925f3e",reset:"4f8072a0"}[e]+".css",i=l.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){c=f[o],u=c.getAttribute("data-href");if(u===n||u===i)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var n=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],g.parentNode.removeChild(g),r(s)},g.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(g)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var f=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(g);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}i[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var g=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4ffd":function(e,t,r){e.exports=r.p+"img/logo.5e0d94e4.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("1dce"),i=r.n(a),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("my-header"),r("router-view"),r("my-footer")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fly-header layui-bg-black"},[n("div",{staticClass:"layui-container"},[n("a",{staticClass:"fly-logo",attrs:{href:"/"}},[n("img",{attrs:{src:r("4ffd"),alt:"layui"}})]),e._m(0),n("ul",{staticClass:"layui-nav fly-nav-user"},[e.user.username?n("li",{staticClass:"layui-nav-item"},[n("a",{staticClass:"fly-nav-avatar",attrs:{href:"javascript:;"}},[n("cite",{staticClass:"layui-hide-xs"},[e._v(e._s(e.user.username))]),e.user.approve?n("i",{staticClass:"iconfont icon-renzheng layui-hide-xs",attrs:{title:"认证信息"+e.user.approve}}):e._e(),e.user.rmb?n("i",{staticClass:"layui-badge fly-badge-vip layui-hide-xs"},[e._v("VIP"+e._s(e.user.rmb))]):e._e(),n("img",{attrs:{src:e.user.avatar}})]),n("dl",{staticClass:"layui-nav-child"},[e._m(1),e._m(2),n("dd",[n("a",{attrs:{href:"/u/168*"+e.user.id}},[n("i",{staticClass:"layui-icon",staticStyle:{"margin-left":"2px","font-size":"22px"}},[e._v("")]),e._v("我的主页")])]),n("hr",{staticStyle:{margin:"5px 0"}}),e._m(3)])]):n("li",{staticClass:"layui-nav-item"},[n("a",{staticClass:"iconfont icon-touxiang layui-hide-xs",attrs:{href:"/user/login/"}})]),e._m(4),e._m(5),e._m(6),e._m(7)])])])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"layui-nav fly-nav layui-hide-xs"},[r("li",{staticClass:"layui-nav-item"},[r("a",{attrs:{href:"/"}},[r("i",{staticClass:"iconfont icon-jiaoliu"}),e._v("交流")])]),r("li",{staticClass:"layui-nav-item"},[r("a",{attrs:{href:"/case/2017/"}},[r("i",{staticClass:"iconfont icon-iconmingxinganli"}),e._v("案例")])]),r("li",{staticClass:"layui-nav-item"},[r("a",{attrs:{href:"/"}},[r("i",{staticClass:"iconfont icon-ui"}),e._v("框架")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("dd",[r("a",{attrs:{href:"/user/set/"}},[r("i",{staticClass:"layui-icon"},[e._v("")]),e._v("基本设置")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("dd",[r("a",{attrs:{href:"/user/message/"}},[r("i",{staticClass:"iconfont icon-tongzhi",staticStyle:{top:"4px"}}),e._v("我的消息")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("dd",[r("a",{staticStyle:{"text-align":"center"},attrs:{href:"/user/logout/"}},[e._v("退出")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"layui-nav-item"},[r("a",{attrs:{href:"/user/login/"}},[e._v("登入")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"layui-nav-item"},[r("a",{attrs:{href:"/user/reg/"}},[e._v("注册")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"layui-nav-item layui-hide-xs"},[r("a",{staticClass:"iconfont icon-qq",attrs:{href:"/app/qq/",onclick:"layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})",title:"QQ登入"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"layui-nav-item layui-hide-xs"},[r("a",{staticClass:"iconfont icon-weibo",attrs:{href:"/app/weibo/",onclick:"layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})",title:"微博登入"}})])}],u={data:function(){return{user:{username:""}}}},f=u,g=r("2877"),d=Object(g["a"])(f,l,c,!1,null,null,null),m=d.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fly-footer"},[r("p",[r("a",{attrs:{href:"/"}},[e._v("社区")]),e._v(" "+e._s((new Date).getFullYear())+" © "),r("a",{attrs:{href:"/"}},[e._v("h5page.com")])]),e._m(0)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("a",{attrs:{href:"/jie/2461/",target:"_blank"}},[e._v("微信公众号")])])}],v={},y=v,_=Object(g["a"])(y,p,h,!1,null,null,null),b=_.exports,C={components:{MyHeader:m,MyFooter:b}},x=C,w=(r("5c0b"),Object(g["a"])(x,s,o,!1,null,null,null)),E=w.exports,j=(r("d3b7"),r("8c4f"));n["a"].use(j["a"]);var O=[{path:"/",redirect:"login"},{path:"/login",name:"login",component:function(){return Promise.all([r.e("forget~login~register~reset"),r.e("login")]).then(r.bind(null,"a55b"))}},{path:"/forget",name:"forget",component:function(){return Promise.all([r.e("forget~login~register~reset"),r.e("forget")]).then(r.bind(null,"4f3a"))}},{path:"/register",name:"register",component:function(){return Promise.all([r.e("forget~login~register~reset"),r.e("register")]).then(r.bind(null,"73cf"))}},{path:"/reset",name:"reset",component:function(){return Promise.all([r.e("forget~login~register~reset"),r.e("reset")]).then(r.bind(null,"3fef"))}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],P=new j["a"]({routes:O}),S=P,$=r("2f62");n["a"].use($["a"]);var k=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,n["a"].use(i.a),new n["a"]({router:S,store:k,render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(e,t,r){}});