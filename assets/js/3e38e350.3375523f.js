/*! For license information please see 3e38e350.3375523f.js.LICENSE.txt */
"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6896],{9345:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=r(1527),t=r(5696);const o={},s=void 0,a={id:"config/environment-variable",title:"environment-variable",description:"Environment variable",source:"@site/docs/config/environment-variable.md",sourceDirName:"config",slug:"/config/environment-variable",permalink:"/docs/config/environment-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/config/environment-variable.md",tags:[],version:"current",frontMatter:{},sidebar:"configSidebar",previous:{title:"dev-server",permalink:"/docs/config/dev-server"},next:{title:"plugins-options",permalink:"/docs/config/plugins-options"}},c={},l=[{value:"Environment variable",id:"environment-variable",level:2},{value:"<code>.env</code> file",id:"env-file",level:3},{value:"envPrefix",id:"envprefix",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"environment-variable",children:"Environment variable"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Farm"})," distinguishes between development and production environments through ",(0,i.jsx)(n.code,{children:"Farm"})," process.env.NODE_ ENV`."]}),"\n",(0,i.jsx)(n.p,{children:"In different environments, environment variables are replaced statically, so use static constants to represent environment variables instead of dynamic expressions."}),"\n",(0,i.jsxs)(n.h3,{id:"env-file",children:[(0,i.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Farm"})," uses ",(0,i.jsx)(n.code,{children:"dotenv"})," to load your additional environment variables, such as ",(0,i.jsx)(n.code,{children:".env"})," files."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// .env\nFARM_APP_SECRET=secret\nFarm_APP_PASSWORD=password\nAPP_VERSION=1.0.0\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Farm"})," loads the file ",(0,i.jsx)(n.code,{children:".env"})," via dotenv, and loads it into ",(0,i.jsx)(n.code,{children:"process.env"})," and finally injects it into define."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["In order to ensure the security of the client, preventing the environment variables in the current system from being exposed to the client ",(0,i.jsx)(n.code,{children:"Farm"})," will only identify some important environment variables that start with ",(0,i.jsx)(n.code,{children:"Farm"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Farm"})," expands environment variables through dotenv-expand"]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to customize the prefix of env variables, you can configure ",(0,i.jsx)(n.code,{children:"envPrefix"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"envprefix",children:"envPrefix"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"default value"}),": ",(0,i.jsx)(n.code,{children:"FARM_"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Customize the prefix of the ",(0,i.jsx)(n.code,{children:"env"})," variable by configuring ",(0,i.jsx)(n.code,{children:"envPrefix"}),"."]})]})}function v(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,n,r)=>{var i=r(959),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var i,o={},l=null,d=null;for(i in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,i)&&!c.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:t,type:e,key:l,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},1527:(e,n,r)=>{e.exports=r(3354)},5696:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var i=r(959);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);