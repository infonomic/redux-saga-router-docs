"use strict";(self.webpackChunkredux_saga_router_docs=self.webpackChunkredux_saga_router_docs||[]).push([[216],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:3,title:"Locations"},l=void 0,s={unversionedId:"locations",id:"locations",title:"Locations",description:"Routes in the router are configured by creating both a location template and a route configuration object.",source:"@site/docs/locations.md",sourceDirName:".",slug:"/locations",permalink:"/redux-saga-router-docs/docs/locations",draft:!1,editUrl:"https://github.com/infonomic/redux-saga-router-docs/tree/main/docs/locations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Locations"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/redux-saga-router-docs/docs/overview"},next:{title:"Routes",permalink:"/redux-saga-router-docs/docs/routes"}},u={},p=[{value:"Example",id:"example",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Routes in the router are configured by creating both a location template and a ",(0,a.kt)("a",{parentName:"p",href:"/docs/routes"},"route")," configuration object."),(0,a.kt)("p",null,"Location templates define the path to the route, with any optional parameters."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-git"}," \u251c\u2500\u2500 ModuleFolder\n \u2502    \u2514\u2500\u2500 components\n \u2502    \u2502   \u2514\u2500\u2500 ModuleNameList.js\n \u2502    \u2502   \u2514\u2500\u2500 ModuleNameShow.js\n+\u2502    \u2514\u2500\u2500 locations.js\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/modules/ModuleFolder/locations.js",title:"src/modules/ModuleFolder/locations.js"},"export default {\n  list: createLocationTemplate({\n    name: 'module-name/list',\n    path: '/module-name',\n  }),\n  show: createLocationTemplate({\n    name: 'module-name/show',\n    params: ['id'], // Here you can also set up a dynamic params in route\n    path: '/module-name/:id',\n  }),\n}\n")),(0,a.kt)("p",null,"Location templates are used to pass location parameters and query values to ",(0,a.kt)("inlineCode",{parentName:"p"},"navigate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"setLocation")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/sagas"},"sagas"),"."),(0,a.kt)("p",null,"For example..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  const handleListWidgets = value => {\n    dispatch(navigate(L.Widgets.list(null, query)))\n  }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  const handleShowWidget = value => {\n    dispatch(navigate(L.Widgets.show({ id })))\n  }\n")))}m.isMDXComponent=!0}}]);