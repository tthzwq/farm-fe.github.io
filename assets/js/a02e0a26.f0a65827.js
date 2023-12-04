/*! For license information please see a02e0a26.f0a65827.js.LICENSE.txt */
"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8557],{2094:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=i(1527),t=i(5696);const s={},o="Overview",u={id:"plugins/writing-plugins/overview",title:"Overview",description:"To use a Rust plugin, configuring plugins in farm.config.ts.",source:"@site/docs/plugins/writing-plugins/overview.md",sourceDirName:"plugins/writing-plugins",slug:"/plugins/writing-plugins/overview",permalink:"/docs/plugins/writing-plugins/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/writing-plugins/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"Community Plugins",permalink:"/docs/plugins/community-plugins"},next:{title:"Rust Plugins",permalink:"/docs/plugins/writing-plugins/rust-plugin"}},l={},c=[];function p(n){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(e.p,{children:["To use a Rust plugin, configuring ",(0,r.jsx)(e.code,{children:"plugins"})," in ",(0,r.jsx)(e.code,{children:"farm.config.ts"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import { defineFarmConfig } from '@farmfe/core/dist/config';\n\ndefineFarmConfig({\n  // ...\n  plugins: [\n    { /*..*/ }, // Js plugin, a object with hook defined\n    '@farmfe/plugin-react', // rust plugin package name\n  ]\n})\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"Farm support both rust plugins and js plugins:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/plugins/rust-plugin",children:"Rust Plugin"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/plugins/js-plugin",children:"Js plugin"})}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},3354:(n,e,i)=>{var r=i(959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,i){var r,s={},c=null,p=null;for(r in void 0!==i&&(c=""+i),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(p=e.ref),e)o.call(e,r)&&!l.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===s[r]&&(s[r]=e[r]);return{$$typeof:t,type:n,key:c,ref:p,props:s,_owner:u.current}}e.Fragment=s,e.jsx=c,e.jsxs=c},1527:(n,e,i)=>{n.exports=i(3354)},5696:(n,e,i)=>{i.d(e,{Z:()=>u,a:()=>o});var r=i(959);const t={},s=r.createContext(t);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);