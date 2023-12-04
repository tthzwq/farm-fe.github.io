/*! For license information please see 35a60fa7.4c61e436.js.LICENSE.txt */
"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8743],{768:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=s(1527),t=s(5696),l=s(4542),i=s(2062),a=s(9317);const o={},c="@farmfe/js-plugin-less",u={id:"plugins/official-plugins/js-less",title:"@farmfe/js-plugin-less",description:"\u652f\u6301 Less \u7f16\u8bd1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/js-less.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-less",permalink:"/zh/docs/plugins/official-plugins/js-less",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-less.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-postcss",permalink:"/zh/docs/plugins/official-plugins/js-postcss"},next:{title:"@farmfe/js-plugin-sass",permalink:"/zh/docs/plugins/official-plugins/js-sass"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"lessOptions",id:"lessoptions",level:3},{value:"filters",id:"filters",level:3},{value:"implementation",id:"implementation",level:3},{value:"additionalData",id:"additionaldata",level:3}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"farmfejs-plugin-less",children:"@farmfe/js-plugin-less"}),"\n",(0,r.jsxs)(n.p,{children:["\u652f\u6301 ",(0,r.jsx)(n.code,{children:"Less"})," \u7f16\u8bd1"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"npm",label:"npm",children:(0,r.jsx)(l.Z,{children:"npm install @farmfe/js-plugin-less less"})}),(0,r.jsx)(a.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(l.Z,{children:"yarn add @farmfe/js-plugin-less less"})}),(0,r.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(l.Z,{children:"pnpm add @farmfe/js-plugin-less less"})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({ /* options */ })\n  ]\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export type LessPluginOptions = {\n  lessOptions?: Less.Options;\n  implementation?: string;\n  filters?: {\n    resolvedPaths?: string[];\n    moduleTypes?: string[];\n  };\n  additionalData?:\n    | string\n    | ((context?: string, resolvePath?: string) => string | Promise<string>);\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"lessoptions",children:"lessOptions"}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"https://lesscss.org/usage/#less-options",children:"Less \u9009\u9879"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({\n      lessOptions: {\n        paths: [path.resolve(process.cwd(), 'styles')]\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"filters",children:"filters"}),"\n",(0,r.jsxs)(n.p,{children:["\u54ea\u4e9b\u6587\u4ef6\u5e94\u8be5\u7531 ",(0,r.jsx)(n.code,{children:"less"})," \u5904\u7406\u3002 \u9ed8\u8ba4\u4e3a\u201c ",(0,r.jsx)(n.code,{children:"{resolvedPaths: ['\\\\.less$'] }"}),"\u201d\u7528\u4e8e\u52a0\u8f7d\uff0c\u201c",(0,r.jsx)(n.code,{children:"{ moduleTypes: ['less'] }"}),"\u201d\u7528\u4e8e\u8f6c\u6362\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"resolvedPaths"}),": \u4ec5\u5904\u7406\u8fd9\u4e9b\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u3002 \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"moduleTypes"}),"\uff1a\u4ec5\u5904\u7406\u5177\u6709\u8fd9\u4e9b\u6a21\u5757\u7c7b\u578b\u7684\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"resolvedPaths"})," \u548c ",(0,r.jsx)(n.code,{children:"moduleTypes"})," \u53d6\u5e76\u96c6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({\n      filters: {\n        // all files end with .custom-css will be processed\n        resolvedPaths: ['\\\\.custom-less$'],\n        moduleTypes: ['less']\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"implementation",children:"implementation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"less"})," \u7684 ",(0,r.jsx)(n.code,{children:"implementation"})," \u5305\u540d\u79f0\u3002 \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"less"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"additionaldata",children:"additionalData"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type AdditionalDataOption = string | ((content?: string, resolvePath?: string) => string | Promise<string>);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u6dfb\u52a0\u5230\u6bcf\u4e2a less \u6587\u4ef6\u7684\u9644\u52a0\u6570\u636e\u3002\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({\n      // add variables.less to every less file\n      additionalData: `\n        @import \"./src/styles/variables.less\";\n      `\n    })\n  ]\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Less \u6587\u4ef6:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-less",metastring:'title="index.less"',children:".foo {\n  color: @primary-color;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"additionalData"})," \u5c06\u4f1a\u88ab\u6dfb\u52a0\u5230\u8fd9\u4e2a\u6587\u4ef6\u7684\u5934\u90e8:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-less",metastring:'title="index.less"',children:'@import "./src/styles/variables.less";\n\n.foo {\n  color: @primary-color;\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u51fd\u6570\u5f62\u5f0f\u7528\u6cd5:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginLess from '@farmfe/js-plugin-less';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginLess({\n      // add variables.less to every less file\n      additionalData: (content, resolvePath) => {\n        if (resolvePath === '/path/to/index.less') {\n          return `\n            @import \"./src/styles/variables.less\";\n          `;\n        }\n      }\n    })\n  ]\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},3354:(e,n,s)=>{var r=s(959),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,l={},c=null,u=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,r)&&!o.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:u,props:l,_owner:a.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},1527:(e,n,s)=>{e.exports=s(3354)},9317:(e,n,s)=>{s.d(n,{Z:()=>i});var r=s(959),t=s(5341);const l={tabItem:"tabItem_GBoY"};function i({children:e,hidden:n,className:s}){return r.createElement("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,s),hidden:n},e)}},2062:(e,n,s)=>{s.d(n,{Z:()=>k});var r=s(959),t=s(5341),l=s(8805),i=s(8903),a=s(9709),o=s(8195),c=s(4568),u=s(4516);function d(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function f(e){var n,s;return null!==(s=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==s?s:[]}function m(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:s,default:r}})=>({value:e,label:n,attributes:s,default:r})))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function h({queryString:e=!1,groupId:n}){const s=(0,i.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),l=(0,o._X)(t),a=(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace(p(function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(n){d(e,n,s[n])}))}return e}({},s.location),{search:n.toString()}))}),[t,s]);return[l,a]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=m(e),[i,o]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var s;const r=null!==(s=n.find((e=>e.default)))&&void 0!==s?s:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=h({queryString:s,groupId:t}),[p,f]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[s,t]=(0,u.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),b=(()=>{const e=null!=c?c:p;return g({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var j=s(4605);const v={tabList:"tabList_JCXH",tabItem:"tabItem_pGCA"};function y(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function x(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(n){y(e,n,s[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function P({className:e,block:n,selectedValue:s,selectValue:i,tabValues:a}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),t=a[r].value;t!==s&&(c(n),i(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;var s;n=null!==(s=o[r])&&void 0!==s?s:o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;var r;n=null!==(r=o[s])&&void 0!==r?r:o[o.length-1];break}}null==n||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},e)},a.map((({value:e,label:n,attributes:l})=>r.createElement("li",O(x({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:e=>o.push(e),onKeyDown:d,onClick:u},l),{className:(0,t.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===e})}),null!=n?n:e))))}function w({lazy:e,children:n,selectedValue:s}){const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s}))))}function E(e){const n=b(e);return r.createElement("div",{className:(0,t.Z)("tabs-container",v.tabList)},r.createElement(P,x({},e,n)),r.createElement(w,x({},e,n)))}function k(e){const n=(0,j.Z)();return r.createElement(E,x({key:String(n)},e),f(e.children))}}}]);