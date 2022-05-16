"use strict";(self.webpackChunkredux_saga_router_docs=self.webpackChunkredux_saga_router_docs||[]).push([[745],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:7,title:"Components"},c=void 0,l={unversionedId:"components",id:"components",title:"Components",description:"There is an example RouterLink component in the router folder under components here...",source:"@site/docs/components.md",sourceDirName:".",slug:"/components",permalink:"/redux-saga-router-docs/docs/components",draft:!1,editUrl:"https://github.com/infonomic/redux-saga-router-docs/tree/main/docs/components.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Components"},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/redux-saga-router-docs/docs/hooks"},next:{title:"Putting it Together",permalink:"/redux-saga-router-docs/docs/putting-it-together"}},s={},p=[{value:"Buttons",id:"buttons",level:2},{value:"Router button",id:"router-button",level:3},{value:"Return button",id:"return-button",level:3},{value:"Links",id:"links",level:2},{value:"Router link",id:"router-link",level:3},{value:"Return link",id:"return-link",level:3},{value:"Breadcrumbs",id:"breadcrumbs",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There is an example RouterLink component in the router folder under components here..."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infonomic/redux-saga-router/tree/main/src/lib/redux-saga-router/components"},"https://github.com/infonomic/redux-saga-router/tree/main/src/lib/redux-saga-router/components")),(0,a.kt)("p",null,"Below are suggested examples of other components you may wish to create on a per-project basis."),(0,a.kt)("p",null,"[draft: more examples]"),(0,a.kt)("h2",{id:"buttons"},"Buttons"),(0,a.kt)("h3",{id:"router-button"},"Router button"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUSH")," param here is used here to add this route ",(0,a.kt)("inlineCode",{parentName:"p"},"locationStack")),(0,a.kt)("p",null,"For more information on ",(0,a.kt)("inlineCode",{parentName:"p"},"locationStack")," variable check ",(0,a.kt)("a",{parentName:"p",href:"/docs/sagas/#setlocation"},"this doc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button\n  component={RouterButton}\n  mode={PUSH}\n  to={L.LocationModuleName.locationName({ id })} // Here you can pass parameters defined in locations file\n>\n  Cancel\n</Button>\n")),(0,a.kt)("h3",{id:"return-button"},"Return button"),(0,a.kt)("p",null,"ReturnButton and ",(0,a.kt)("a",{parentName:"p",href:"#return-link"},"ReturnLink")," are navigating you to previous location in ",(0,a.kt)("inlineCode",{parentName:"p"},"locationStack")),(0,a.kt)("p",null,"For more information on ",(0,a.kt)("inlineCode",{parentName:"p"},"locationStack")," variable check ",(0,a.kt)("a",{parentName:"p",href:"/docs/sagas/#setlocation"},"this doc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<ReturnButton>\n  Back\n</ReturnButton>\n")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("h3",{id:"router-link"},"Router link"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CLEAR")," param here is used here to clear ",(0,a.kt)("inlineCode",{parentName:"p"},"locationStack")),(0,a.kt)("p",null,"For more information on ",(0,a.kt)("inlineCode",{parentName:"p"},"locationStack")," variable check ",(0,a.kt)("a",{parentName:"p",href:"/docs/sagas/#setlocation"},"this doc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<RouterLink\n  to={L.LocationModuleName.locationName()}\n  mode={CLEAR} \n  exact\n>\n  Link text\n</RouterLink>\n")),(0,a.kt)("h3",{id:"return-link"},"Return link"),(0,a.kt)("p",null,"ReturnLink and ",(0,a.kt)("a",{parentName:"p",href:"#return-button"},"ReturnButton")," are navigating you to previous location in ",(0,a.kt)("inlineCode",{parentName:"p"},"locationStack")),(0,a.kt)("p",null,"For more information on ",(0,a.kt)("inlineCode",{parentName:"p"},"locationStack")," variable check ",(0,a.kt)("a",{parentName:"p",href:"/docs/sagas/#setlocation"},"this doc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<ReturnLink>\n  Back\n</ReturnLink>\n")),(0,a.kt)("h2",{id:"breadcrumbs"},"Breadcrumbs"),(0,a.kt)("p",null,"For more information on ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumbs")," hook check ",(0,a.kt)("a",{parentName:"p",href:"/redux-saga-router-docs/docs/hooks/#useBreadcrumbs"},"this doc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Breadcrumbs() {\n  const breadcrumbs = useBreadcrumbs()\n  const theme = useTheme()\n\n  return (\n    <div className=\"breadcrumbs\">\n      {breadcrumbs.map(({ title, location, current }) => (\n        current\n          ? <span key={location.name}>{title}</span>\n          : (\n            <React.Fragment key={location.name}>\n              <Link to={location}>{title}</Link>\n              {' > '}\n            </React.Fragment>\n          )\n      ))}\n    </div>\n  )\n}\n")))}d.isMDXComponent=!0}}]);