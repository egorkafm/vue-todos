(function(e){function t(t){for(var r,o,s=t[0],i=t[1],l=t[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"017cb000"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"e2672b09"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var l=u[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===r||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-todos/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Login")]),e._v(" | "),n("router-link",{attrs:{to:"/todo"}},[e._v("Todos")])],1),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),s={},i=Object(u["a"])(s,o,a,!1,null,null,null),l=i.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[n("form",[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"mb",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",{attrs:{for:"password"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"mb",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{attrs:{type:"submit"},on:{click:e.submit}},[e._v("LOGIN")])])])},p=[],f=(n("b0c0"),{name:"ModalLogin",data:function(){return{name:"",password:""}},mounted:function(){"admin"===localStorage.name&&"12345"===localStorage.password&&(this.name=localStorage.name,this.password=localStorage.password)},watch:{name:function(e){localStorage.name=e}},methods:{submit:function(){localStorage.name=this.name,localStorage.password=this.password,"admin"===localStorage.name&&"12345"===localStorage.password&&alert("Welcome, admin!"),console.log("wwww")},handleSubmit:function(){}}}),m=f,v=(n("c468"),Object(u["a"])(m,d,p,!1,null,null,null)),h=v.exports;r["a"].use(c["a"]);var b=[{path:"/",name:"ModalLogin",component:h},{path:"/todo",name:"Todos",component:function(){return n.e("about").then(n.bind(null,"75cf"))}}],g=new c["a"]({mode:"history",base:"/vue-todos/",routes:b}),w=g;r["a"].config.productionTip=!1,new r["a"]({router:w,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},c468:function(e,t,n){"use strict";n("e92e")},e92e:function(e,t,n){}});
//# sourceMappingURL=app.59e014d7.js.map