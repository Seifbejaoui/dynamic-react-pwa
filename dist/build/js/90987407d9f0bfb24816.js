(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{581:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(162);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,r,c=s(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={open:!1},t}return t=u,(n=[{key:"toggleMenuBar",value:function(e){var t=this.state.open;e&&e.preventDefault&&e.preventDefault(),this.setState({open:!t})}},{key:"closeMenuBar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state.open;return a.a.createElement("div",null,a.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(o.b,{to:"/",className:" navbar-item"},a.a.createElement("strong",null,"ReactPWA")),a.a.createElement("button",{type:"button",onClick:function(t){return e.toggleMenuBar(t)},className:"navbar-burger ".concat(t?"is-active":""),"aria-label":"menu","aria-expanded":"false",style:{background:"none",border:"none",outline:"none"}},a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}))),a.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},a.a.createElement(o.b,{className:"navbar-item",to:"/home",onClick:function(){return e.closeMenuBar()}},"Home"),a.a.createElement(o.b,{className:"navbar-item",to:"/global-local-css",onClick:function(){return e.closeMenuBar()}},"Global & Local CSS"),a.a.createElement(o.b,{className:"navbar-item",to:"/typescript-counter",onClick:function(){return e.closeMenuBar()}},"TypeScript Counter"),a.a.createElement(o.b,{className:"navbar-item",to:"/skeleton-loading",onClick:function(){return e.closeMenuBar()}},"Skeleton Loading"),a.a.createElement(o.b,{className:"navbar-item",to:"/image-optimization",onClick:function(){return e.closeMenuBar()}},"Image Optimization"),a.a.createElement(o.b,{className:"navbar-item",to:"/login",onClick:function(){return e.closeMenuBar()}},"Auth"),a.a.createElement(o.b,{className:"navbar-item",to:"/contribute",onClick:function(){return e.closeMenuBar()}},"Contribute"),a.a.createElement("a",{className:"navbar-item has-text-danger",href:"https://www.reactpwa.com",onClick:function(){return e.closeMenuBar()}},"Visit ReactPWA.com")))))}}])&&i(t.prototype,n),r&&i(t,r),u}(r.PureComponent),p=function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"content has-text-centered"},a.a.createElement("p",null,a.a.createElement("strong",null,"Demo for ReactPWA")," ","by"," ",a.a.createElement("a",{href:"https://www.atyantik.com"},"Atyantik Technologies"),". The source code is licensed"," ",a.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),".",a.a.createElement("br",null),'Visit the site"s Github Repo'," ",a.a.createElement("a",{href:"https://github.com/Atyantik/react-pwa"},"https://github.com/Atyantik/react-pwa"),"."),a.a.createElement("div",{className:"has-text-centered m-t-xl m-b-md"},a.a.createElement("a",{href:"https://opencollective.com/react-pwa/donate",target:"_blank",rel:"nofollow noopener noreferrer"},a.a.createElement("img",{alt:"open-collective",src:"https://opencollective.com/react-pwa/contribute/button@2x.png?color=blue",width:"300"})))))};t.a=function(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement(f,null),t,a.a.createElement("br",null),a.a.createElement(p,null))}},582:function(e,t,n){"use strict";t.a={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,n,r,a,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var c="";if(n)switch(n.constructor){case Number:c=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:c="; expires="+n;break;case Date:c="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+c+(a?"; domain="+a:"")+(r?"; path="+r:"")+(o?"; secure":""),!0},removeItem:function(e,t,n){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return!(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,n=0;n<t;n++)e[n]=decodeURIComponent(e[n]);return e}}},583:function(e,t,n){"use strict";var r=n(582);t.a={isLoggedIn:function(){return r.a.getItem&&"function"==typeof r.a.getItem&&"allowmein"===r.a.getItem("secretKey")},logout:function(){return r.a.removeItem&&"function"==typeof r.a.removeItem&&r.a.removeItem("secretKey")}}},592:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(0),a=n.n(r),o=n(2),c=n(581),i=n(582),l=n(583);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(p,e);var t,n,r,s=f(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this,e)).onLoginRedirectUrl="/dashboard",t.state={loaded:!1,loggedIn:!1,error:"",errorMsg:""},t}return t=p,(n=[{key:"componentDidMount",value:function(){l.a.isLoggedIn()?this.setState({loaded:!0,loggedIn:!0}):this.setState({loaded:!0})}},{key:"handleSubmit",value:function(e){e&&e.preventDefault&&e.preventDefault();var t=new FormData(e.target),n=t.get("username"),r=t.get("password");"demo"!==n||"demo"!==r?this.setState({error:"demo"!==n?"username":"password",errorMsg:"Please use username:password as demo:demo"}):(i.a.setItem("secretKey","allowmein"),this.setState({loggedIn:!0}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.loggedIn,r=t.error,i=t.errorMsg;return t.loaded?n?a.a.createElement(o.a,{push:!1,to:this.onLoginRedirectUrl}):a.a.createElement(c.a,null,a.a.createElement("div",{className:"columns is-centered p-t-xl p-r-md p-l-md"},a.a.createElement("div",{className:"column is-half"},a.a.createElement("div",{className:"box"},a.a.createElement("h1",{className:"title"},"Login"),a.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},a.a.createElement("div",{className:"field"},a.a.createElement("label",{className:"label",htmlFor:"username"},"username",a.a.createElement("div",{className:"control"},a.a.createElement("input",{defaultValue:"demo",id:"username",name:"username",className:"input ".concat("username"===r?"is-danger":""),type:"text",placeholder:"Username input"})))),a.a.createElement("div",{className:"field"},a.a.createElement("label",{className:"label",htmlFor:"password"},"Password",a.a.createElement("div",{className:"control"},a.a.createElement("input",{defaultValue:"demo",id:"password",name:"password",className:"input ".concat("password"===r?"is-danger":""),type:"password",placeholder:"********"})))),a.a.createElement("div",{className:"field is-grouped"},a.a.createElement("div",{className:"control"},a.a.createElement("button",{type:"submit",className:"button is-link"},"Login"))),""!==r&&a.a.createElement("p",{className:"help is-danger"},i)))))):null}}])&&u(t.prototype,n),r&&u(t,r),p}(a.a.Component)}}]);