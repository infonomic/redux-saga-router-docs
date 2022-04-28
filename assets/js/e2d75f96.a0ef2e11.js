"use strict";(self.webpackChunkredux_saga_router=self.webpackChunkredux_saga_router||[]).push([[507],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9202:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},c="Routes",u={unversionedId:"routes",id:"routes",title:"Routes",description:"Route definitions combine location templates, with components and route options, including an optional initial saga.",source:"@site/docs/routes.md",sourceDirName:".",slug:"/routes",permalink:"/redux-saga-router-docs/docs/routes",editUrl:"https://github.com/infonomic/redux-saga-router-docs/tree/main/docs/routes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Locations",permalink:"/redux-saga-router-docs/docs/locations"},next:{title:"Sagas",permalink:"/redux-saga-router-docs/docs/sagas"}},l={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"routes"},"Routes"),(0,i.kt)("p",null,"Route definitions combine location templates, with components and route options, including an optional initial saga."),(0,i.kt)("p",null,"For more information on ",(0,i.kt)("inlineCode",{parentName:"p"},"locations.js")," file check ",(0,i.kt)("a",{parentName:"p",href:"/docs/locations/"},"this doc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import React from 'react'\n\nimport * as L from '../../locationTemplates'\nimport { sagas } from './sagas'\n\nconst ModuleNameList = import(./components/ModuleNameList')\n\nexport default [\n  {\n    template: L.ModuleName.list, // Location name defined in locations.js for this module\n    title: 'Module Name',\n    requiresAuth: true, // Access option\n    saga: sagas.fetchList, // Saga provided here will be fired on component mount. Check next section for more info about sagas\n    components: {\n      main: ModuleNameList, // Component that will be rendered under this route\n    },\n  }\n]\n")))}d.isMDXComponent=!0}}]);