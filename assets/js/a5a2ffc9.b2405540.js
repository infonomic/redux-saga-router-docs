"use strict";(self.webpackChunkredux_saga_router_docs=self.webpackChunkredux_saga_router_docs||[]).push([[155],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,g=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9912:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:5,title:"Sagas"},c=void 0,l={unversionedId:"sagas",id:"sagas",title:"Sagas",description:"The router is saga-based, and relies on two sagas and a reducer.",source:"@site/docs/sagas.md",sourceDirName:".",slug:"/sagas",permalink:"/redux-saga-router-docs/docs/sagas",draft:!1,editUrl:"https://github.com/infonomic/redux-saga-router-docs/tree/main/docs/sagas.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Sagas"},sidebar:"tutorialSidebar",previous:{title:"Routes",permalink:"/redux-saga-router-docs/docs/routes"},next:{title:"Hooks",permalink:"/redux-saga-router-docs/docs/hooks"}},d={},u=[{value:"navigate",id:"navigate",level:3},{value:"setLocation",id:"setlocation",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The router is saga-based, and relies on two sagas and a reducer."),(0,r.kt)("p",null,"The process of navigating to a new route involves both running an optionally configured saga (present on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/routes"},"route")," configuration object), and then optionally updating the currentLocation and locationStack state in the store. Critically, the configured saga (if present) must run before the store is updated, and must have the ability to decide to cancel the navigation, or redirect etc. "),(0,r.kt)("p",null,"We must also never allow one navigation to start before another has ended.  That behavior is built-in to the redux-saga 'takeLeading' watcher, which requires that we start the saga by dispatching an action, not calling it directly."),(0,r.kt)("p",null,"So we need one action and router saga to tell redux-saga to look for - and if found, run a router-configured saga, and then if that saga chooses to - a second action to actually update router state."),(0,r.kt)("h3",{id:"navigate"},"navigate"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," is a redux action (defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"redux/actions.js"),". It's actually an 'action helper'). There is just one saga listening for this action - ",(0,r.kt)("inlineCode",{parentName:"p"},"handleNavigation")," - which checks for a configured saga on the route - and if found, will ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," it. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"CLEAR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PUSH")," params that determine whether the new location will replace the current location in the location stack, or is added to the location stack. Note that if a configured saga is found and called, it will be up to that saga to complete the route change by optionally calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setLocation")," (see below), thereby updating the state of the location stack and ",(0,r.kt)("inlineCode",{parentName:"p"},"window.history"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," accepts a ",(0,r.kt)("a",{parentName:"p",href:"/docs/locations"},"location template")," (with options) as an argument, and can be called from within a react component handler as..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  const handleListWidgets = value => {\n    dispatch(navigate(L.Widgets.list(null, query)))\n  }\n")),(0,r.kt)("p",null,"Or from within a saga as..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"* destroy({ payload: { id, data } }) {\n    yield put(mutations.destroyStarted())\n    try {\n      yield call(apiRequest, { method: 'delete', url: `/backend-endpoint/${id}` })\n      yield put(mutations.destroySucceeded({ id }))\n      yield put(navigate(L.LocationModuleName.locationName()))\n    } catch (error) {\n      // Error handling\n    }\n  },\n")),(0,r.kt)("h3",{id:"setlocation"},"setLocation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setLocation")," is a redux action (defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"redux/actions.js"),". It's actually an action helper). There is both a saga - ",(0,r.kt)("inlineCode",{parentName:"p"},"updateLocation"),", and a reducer that will respond to this action. The saga will update the current ",(0,r.kt)("inlineCode",{parentName:"p"},"window.history")," with the requested route path, and the reducer will update the location stack state, deciding whether to replace or push the location onto the current location stack based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"CLEAR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PUSH")," params. ",(0,r.kt)("inlineCode",{parentName:"p"},"setLocation")," will ignore any router configured sagas (see ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," above). "),(0,r.kt)("p",null,"Most importantly, once ",(0,r.kt)("inlineCode",{parentName:"p"},"setLocation")," has been dispatched and router state updated, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RouterView")," component will re-render - including any configured React components defined in the router configuration object - which is of course the ultimate goal of the route change. "),(0,r.kt)("p",null,"For more information on how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"CLEAR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PUSH")," props check ",(0,r.kt)("a",{parentName:"p",href:"/docs/components"},"this doc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"* fetchList({ payload: { to, mode } }) {\n  const { query: params } = to\n  yield put(mutations.listStarted())\n  try {\n    const response = yield call(apiRequest, {\n      method: 'get',\n      url: '/backend-endpoint',\n      params,\n    })\n     yield put(mutations.listSucceeded(response))\n     yield put(setLocation(to, mode))\n  } catch (error) {\n    // Error handling\n  }\n},\n")))}h.isMDXComponent=!0}}]);