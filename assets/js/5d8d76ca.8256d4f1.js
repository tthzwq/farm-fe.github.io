/*! For license information please see 5d8d76ca.8256d4f1.js.LICENSE.txt */
"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8726],{8684:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(1527),i=o(5696);const a={},l="Lazy Compilation",r={id:"features/lazy-compilation",title:"Lazy Compilation",description:"When comes to a big project, you may want to split them into small pieces and load on demand. This can be achieved by dynamic imports.",source:"@site/docs/features/lazy-compilation.md",sourceDirName:"features",slug:"/features/lazy-compilation",permalink:"/docs/features/lazy-compilation",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/lazy-compilation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Static Assets",permalink:"/docs/features/static"},next:{title:"Partial Bundling",permalink:"/docs/features/partial-bundling"}},s={},c=[{value:"Configuring Lazy Compilation",id:"configuring-lazy-compilation",level:2},{value:"How Lazy Compilation Work",id:"how-lazy-compilation-work",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"lazy-compilation",children:"Lazy Compilation"}),"\n",(0,n.jsx)(t.p,{children:"When comes to a big project, you may want to split them into small pieces and load on demand. This can be achieved by dynamic imports."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const page = React.lazy(() => import('./page')); // lazy load page\n"})}),"\n",(0,n.jsx)(t.p,{children:"By default, Farm will lazy compile these dynamic imports in development, only compile them when the module is really executed. Lazy compilation can really speedup the compiling of a large project."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Lazy Compilation are always disabled for production build."})}),"\n",(0,n.jsxs)(t.p,{children:["Note that it is important to use the ",(0,n.jsx)(t.code,{children:"dynamic import"})," properly to make ",(0,n.jsx)(t.code,{children:"lazy compilation"})," work better. For example, if one of your page has a big dependencies, but this dependencies won't be used until this page rendered, then it is necessary to make sure that this big dependencies are dynamic imported, so it won't be compiled util the page rendered."]}),"\n",(0,n.jsx)(t.h2,{id:"configuring-lazy-compilation",children:"Configuring Lazy Compilation"}),"\n",(0,n.jsxs)(t.p,{children:["Using ",(0,n.jsx)(t.code,{children:"compilation.lazyCompilation"})," to enable or disable it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default {\n   compilation: {\n     lazyCompilation: true,\n   },\n};\n"})}),"\n",(0,n.jsx)(t.h2,{id:"how-lazy-compilation-work",children:"How Lazy Compilation Work"}),"\n",(0,n.jsxs)(t.p,{children:["When lazy compilation is enabled, Farm will analyze all of your ",(0,n.jsx)(t.code,{children:"dynamic import"})," first, for example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const page = React.lazy(() => import('./page'));\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Farm will treat ",(0,n.jsx)(t.code,{children:"./page"})," as a module that should be lazy compiled and won't compile it, instead, Farm will return a virtual placeholder module for ",(0,n.jsx)(t.code,{children:"./page"})," like:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// ... other actions\nconst compilingModules = FarmModuleSystem.compilingModules;\n// return a promise, this promise will be resolved when lazy compilation finished.\nlet promise = Promise.resolve();\n\n// it has lazy been lazy compiling\nif (compilingModules.has(modulePath)) {\n  promise = promise.then(() => compilingModules.get(modulePath));\n} else {\n  // request the dev server for lazy compilation\n  const url = '/__lazy_compile?paths=' + paths.join(',') + `&t=${Date.now()}`;\n  promise = import(url).then((module: any) => {\n      const result: LazyCompileResult = module.default;\n      // ...\n  });\n  // ... more actions\n}\n\nexport const __farm_async = true;\nexport default promise;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Above example illustrated a basic structure of that virtual placeholder module. When the placeholder executed, it will request the dev server to compile this module and its dependencies. After getting the lazy compiled result from dev server, the placeholder module will patch these changes to Farm's runtime module system."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3354:(e,t,o)=>{var n=o(959),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,a={},c=null,d=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:r.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},1527:(e,t,o)=>{e.exports=o(3354)},5696:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>l});var n=o(959);const i={},a=n.createContext(i);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);