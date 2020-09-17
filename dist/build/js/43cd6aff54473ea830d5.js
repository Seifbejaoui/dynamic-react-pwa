(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{581:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(162);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m(e);if(t){var r=m(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u(this,a)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,a,n,c=s(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={open:!1},t}return t=u,(a=[{key:"toggleMenuBar",value:function(e){var t=this.state.open;e&&e.preventDefault&&e.preventDefault(),this.setState({open:!t})}},{key:"closeMenuBar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.b,{to:"/",className:" navbar-item"},r.a.createElement("strong",null,"ReactPWA")),r.a.createElement("button",{type:"button",onClick:function(t){return e.toggleMenuBar(t)},className:"navbar-burger ".concat(t?"is-active":""),"aria-label":"menu","aria-expanded":"false",style:{background:"none",border:"none",outline:"none"}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},r.a.createElement(o.b,{className:"navbar-item",to:"/home",onClick:function(){return e.closeMenuBar()}},"Home"),r.a.createElement(o.b,{className:"navbar-item",to:"/global-local-css",onClick:function(){return e.closeMenuBar()}},"Global & Local CSS"),r.a.createElement(o.b,{className:"navbar-item",to:"/typescript-counter",onClick:function(){return e.closeMenuBar()}},"TypeScript Counter"),r.a.createElement(o.b,{className:"navbar-item",to:"/skeleton-loading",onClick:function(){return e.closeMenuBar()}},"Skeleton Loading"),r.a.createElement(o.b,{className:"navbar-item",to:"/image-optimization",onClick:function(){return e.closeMenuBar()}},"Image Optimization"),r.a.createElement(o.b,{className:"navbar-item",to:"/login",onClick:function(){return e.closeMenuBar()}},"Auth"),r.a.createElement(o.b,{className:"navbar-item",to:"/contribute",onClick:function(){return e.closeMenuBar()}},"Contribute"),r.a.createElement("a",{className:"navbar-item has-text-danger",href:"https://www.reactpwa.com",onClick:function(){return e.closeMenuBar()}},"Visit ReactPWA.com")))))}}])&&i(t.prototype,a),n&&i(t,n),u}(n.PureComponent),d=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Demo for ReactPWA")," ","by"," ",r.a.createElement("a",{href:"https://www.atyantik.com"},"Atyantik Technologies"),". The source code is licensed"," ",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),".",r.a.createElement("br",null),'Visit the site"s Github Repo'," ",r.a.createElement("a",{href:"https://github.com/Atyantik/react-pwa"},"https://github.com/Atyantik/react-pwa"),"."),r.a.createElement("div",{className:"has-text-centered m-t-xl m-b-md"},r.a.createElement("a",{href:"https://opencollective.com/react-pwa/donate",target:"_blank",rel:"nofollow noopener noreferrer"},r.a.createElement("img",{alt:"open-collective",src:"https://opencollective.com/react-pwa/contribute/button@2x.png?color=blue",width:"300"})))))};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(p,null),t,r.a.createElement("br",null),r.a.createElement(d,null))}},587:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(79),c=a.n(o),i=a(581),l=function(e){var t=e.title,a=e.description,n=e.link;return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title"},t)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},a," ",!!n.length&&r.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener nofollow"},"Read more")))))};l.propTypes={title:c.a.string.isRequired,description:c.a.string.isRequired,link:c.a.string.isRequired},t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("section",{className:"hero is-medium is-info is-bold"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Features"),r.a.createElement("h2",{className:"subtitle"},"There are no limits for creativity")))),r.a.createElement("section",{className:"m-t-lg"},r.a.createElement("div",{className:"container p-l-md p-r-md"},r.a.createElement("h4",{className:"title is-4"},"ReactPWA is configurable to the core. You can add plugins as you like to extend the features or you can use a bare minimum to start from scratch."),r.a.createElement("div",{className:"columns"},r.a.createElement(l,{title:"Babel 7",description:"Already packed with the latest babel to achieve great performance and lower bundle size.",link:"https://babeljs.io/blog/2018/08/27/7.0.0"}),r.a.createElement(l,{title:"Webpack 4",description:"Optimized chunk splitting and is 98% more faster! Thus creating small chunks and only loading the required chunk (code splitting).",link:"https://medium.com/webpack/webpack-4-released-today-6cdb994702d4"}),r.a.createElement(l,{title:"Image Optimization",description:"@pawjs/image-optimizer specially for image optimizations. Improving the compression of image with image-webpack-loader",link:"https://www.reactpwa.com/docs/en/plugin-image-optimization.html"})),r.a.createElement("div",{className:"columns"},r.a.createElement(l,{title:"Skeleton loaders",description:"All the goodness of skeleton loading with very simple route configuration. Supports pre-loading of data for the route as well.",link:""}),r.a.createElement(l,{title:"Non Conflicting CSS",description:"Create hashed css classes such as _ax1c2d for your css modules loaded for the specific component, thus no-conflict for using same class names",link:""}),r.a.createElement(l,{title:"Redux",description:"Integrating redux made simple with @pawjs/redux. Preconfigured SSR with redux at your finger tips with minimum configuration",link:"https://www.reactpwa.com/docs/en/plugin-redux.html"})),r.a.createElement("div",{className:"columns"},r.a.createElement(l,{title:"SASS",description:"Fan of SASS and PostCSS/CSSNext? well @pawjs/sass can help you add sass support very easily to your project.",link:"https://www.reactpwa.com/docs/en/plugin-sass.html"}),r.a.createElement(l,{title:"Deployments",description:"Oh yes it is very simple to deploy and we already have tutorials for Heroku, Amazon EC2 & Digital Ocean",link:"https://www.reactpwa.com/docs/en/deploying-to-heroku.html"}),r.a.createElement(l,{title:"Zero Configuration",description:"You can also start minimal with react-pwa. You just need one file: `src/routes.js` and nothing more.",link:""})))))}}}]);