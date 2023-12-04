/*! For license information please see 45649b6b.e2764a06.js.LICENSE.txt */
"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7306],{4026:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(1527),i=n(5696);const o={},s="Build For Production",l={id:"tutorials/build",title:"Build For Production",description:"By default, Farm has enabled support for the following features for production builds:",source:"@site/docs/tutorials/3-build.md",sourceDirName:"tutorials",slug:"/tutorials/build",permalink:"/docs/tutorials/build",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/tutorials/3-build.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Develop With Farm",permalink:"/docs/tutorials/start"},next:{title:"Html",permalink:"/docs/features/html"}},a={},d=[{value:"Add build script",id:"add-build-script",level:2},{value:"Configure Tree Shake and compression",id:"configure-tree-shake-and-compression",level:2},{value:"Configure Partial Bundling",id:"configure-partial-bundling",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"build-for-production",children:"Build For Production"}),"\n",(0,t.jsx)(r.p,{children:"By default, Farm has enabled support for the following features for production builds:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"Tree Shake"})}),": Crop and filter irrelevant modules and code"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"Compression"})}),": Compress and mix the product to reduce the product volume"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"Automatically inject Polyfill"})}),": Farm downgrades projects to ES5 by default, which means that the products built by Farm can run on almost all browsers"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"Automatic partial packaging"})}),": Based on dependencies and size, the project is partially packaged. For each resource request, about 25 resources are generated to ensure parallel loading performance and improve cache hits as much as possible. Rate"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"add-build-script",children:"Add build script"}),"\n",(0,t.jsxs)(r.p,{children:["Add build script in ",(0,t.jsx)(r.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",metastring:'title="package.json" {7}',children:'{\n   "name": "1-create-a-project",\n   "version": "1.0.0",\n   "scripts": {\n     "test": "echo \\"Error: no test specified\\" && exit 1",\n     "start": "farm start",\n     "build": "farm build"\n   },\n   // ...ignore other fields\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Then execute ",(0,t.jsx)(r.code,{children:"npm run build"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"configure-tree-shake-and-compression",children:"Configure Tree Shake and compression"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/features/tree-shake",children:"Tree Shake"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/features/minification",children:"Minification"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"configure-partial-bundling",children:"Configure Partial Bundling"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/features/partial-bundling",children:"Partial Bundling"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3354:(e,r,n)=>{var t=n(959),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,o={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,t)&&!a.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:i,type:e,key:d,ref:c,props:o,_owner:l.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},1527:(e,r,n)=>{e.exports=n(3354)},5696:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>s});var t=n(959);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);