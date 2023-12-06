/*! For license information please see f56019d0.2228f224.js.LICENSE.txt */
"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6536],{8178:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>f,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=n(1527),s=n(5696),l=n(4542),a=n(2062),o=n(9317);const i={},u="@farmfe/js-plugin-svgr",c={id:"plugins/official-plugins/js-svgr",title:"@farmfe/js-plugin-svgr",description:"Support React SVG Components for Farm.",source:"@site/docs/plugins/official-plugins/js-svgr.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-svgr",permalink:"/docs/plugins/official-plugins/js-svgr",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-svgr.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-sass",permalink:"/docs/plugins/official-plugins/js-sass"},next:{title:"@farmfe/js-plugin-dts",permalink:"/docs/plugins/official-plugins/js-dts"}},f={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"svgrOptions",id:"svgroptions",level:3},{value:"filters",id:"filters",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"farmfejs-plugin-svgr",children:"@farmfe/js-plugin-svgr"}),"\n",(0,t.jsxs)(r.p,{children:["Support ",(0,t.jsx)(r.code,{children:"React SVG Components"})," for Farm."]}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{value:"npm",label:"npm",children:(0,t.jsx)(l.Z,{children:"npm install @farmfe/js-plugin-svgr"})}),(0,t.jsx)(o.Z,{value:"yarn",label:"yarn",children:(0,t.jsx)(l.Z,{children:"yarn add @farmfe/js-plugin-svgr"})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(l.Z,{children:"pnpm add @farmfe/js-plugin-svgr"})})]}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({ /* options */ })\n  ]\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"export interface FarmSvgrPluginOptions {\n  svgrOptions?: SvgrOptions;\n  filters?: {\n    resolvedPaths?: string[];\n  };\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"svgroptions",children:"svgrOptions"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://react-svgr.com/docs/options/",children:"svgr options"})," for more details."]}),"\n",(0,t.jsx)(r.p,{children:"Example:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({\n      svgrOptions: {\n        loadPaths: [path.resolve(process.cwd(), 'styles')]\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,t.jsx)(r.h3,{id:"filters",children:"filters"}),"\n",(0,t.jsxs)(r.p,{children:["Which files should be processed by ",(0,t.jsx)(r.code,{children:"svgr"}),". Default to ",(0,t.jsx)(r.code,{children:"{ resolvedPaths: ['\\\\.svg$'] }"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"resolvedPaths"}),": Only files under these paths will be processed. Support regex."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Example:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({\n      filters: {\n        // all files end with .custom-svg will be processed\n        resolvedPaths: ['\\\\.custom-svg$'],\n      }\n    })\n  ]\n}\n\nexport default config;\n"})})]})}function g(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3354:(e,r,n)=>{var t=n(959),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,l={},u=null,c=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===l[t]&&(l[t]=r[t]);return{$$typeof:s,type:e,key:u,ref:c,props:l,_owner:o.current}}r.Fragment=l,r.jsx=u,r.jsxs=u},1527:(e,r,n)=>{e.exports=n(3354)},9317:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(959),s=n(5341);const l={tabItem:"tabItem_GBoY"};function a({children:e,hidden:r,className:n}){return t.createElement("div",{role:"tabpanel",className:(0,s.Z)(l.tabItem,n),hidden:r},e)}},2062:(e,r,n)=>{n.d(r,{Z:()=>E});var t=n(959),s=n(5341),l=n(8805),a=n(8903),o=n(9709),i=n(8195),u=n(4568),c=n(4516);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function d(e){var r,n;return null!==(n=null===(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function g(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=r?r:function(e){return d(e).map((({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t})))}(n);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function m({value:e,tabValues:r}){return r.some((r=>r.value===e))}function b({queryString:e=!1,groupId:r}){const n=(0,a.k6)(),s=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),l=(0,i._X)(s),o=(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace(p(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){f(e,r,n[r])}))}return e}({},n.location),{search:r.toString()}))}),[s,n]);return[l,o]}function h(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,l=g(e),[a,i]=(0,t.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const t=null!==(n=r.find((e=>e.default)))&&void 0!==n?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[u,f]=b({queryString:n,groupId:s}),[p,d]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,s]=(0,c.Nk)(r);return[n,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:s}),h=(()=>{const e=null!=u?u:p;return m({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{h&&i(h)}),[h]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),f(e),d(e)}),[f,d,l]),tabValues:l}}var v=n(4605);const j={tabList:"tabList_JCXH",tabItem:"tabItem_pGCA"};function y(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function O(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){y(e,r,n[r])}))}return e}function x(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function w({className:e,block:r,selectedValue:n,selectValue:a,tabValues:o}){const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const r=e.currentTarget,t=i.indexOf(r),s=o[t].value;s!==n&&(u(r),a(s))},f=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;var n;r=null!==(n=i[t])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;var t;r=null!==(t=i[n])&&void 0!==t?t:i[i.length-1];break}}null==r||r.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},e)},o.map((({value:e,label:r,attributes:l})=>t.createElement("li",x(O({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:f,onClick:c},l),{className:(0,s.Z)("tabs__item",j.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=r?r:e))))}function P({lazy:e,children:r,selectedValue:n}){const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function S(e){const r=h(e);return t.createElement("div",{className:(0,s.Z)("tabs-container",j.tabList)},t.createElement(w,O({},e,r)),t.createElement(P,O({},e,r)))}function E(e){const r=(0,v.Z)();return t.createElement(S,O({key:String(r)},e),d(e.children))}}}]);