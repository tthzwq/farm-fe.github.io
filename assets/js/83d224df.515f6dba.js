"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6485],{282:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var n=t(1527),a=t(5696),l=t(2264),s=t(7123),i=t(9988);const o={},u="Vue",c={id:"frameworks/vue",title:"Vue",description:"Create a Vue project based on Farm.",source:"@site/docs/frameworks/vue.mdx",sourceDirName:"frameworks",slug:"/frameworks/vue",permalink:"/docs/frameworks/vue",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/frameworks/vue.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/frameworks/react"},next:{title:"Solid",permalink:"/docs/frameworks/solid"}},d={},f=[{value:"Creating a Vue Project",id:"creating-a-vue-project",level:3},{value:"Integrating jsx",id:"integrating-jsx",level:3}];function m(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"vue",children:"Vue"}),"\n",(0,n.jsxs)(r.p,{children:["Create a ",(0,n.jsx)(r.code,{children:"Vue"})," project based on ",(0,n.jsx)(r.code,{children:"Farm"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Farm"})," provides two approaches to support creating ",(0,n.jsx)(r.code,{children:"Vue"})," projects:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Use the ",(0,n.jsx)(r.code,{children:"create-farm"})," scaffold to create a scaffold project"]}),"\n",(0,n.jsxs)(r.li,{children:["You can manually create a ",(0,n.jsx)(r.code,{children:"Vue"})," project following the current documentation"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"creating-a-vue-project",children:"Creating a Vue Project"}),"\n",(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{value:"npm",label:"npm",children:(0,n.jsx)(l.Z,{children:"npm create farm@latest"})}),(0,n.jsx)(i.Z,{value:"yarn",label:"yarn",children:(0,n.jsx)(l.Z,{children:"yarn create farm"})}),(0,n.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(l.Z,{children:"pnpm create farm"})})]})}),"\n",(0,n.jsxs)(r.p,{children:["Select ",(0,n.jsx)(r.code,{children:"Vue"})," template in ",(0,n.jsx)(r.code,{children:"Select Framework"})]}),"\n",(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsxs)(r.p,{children:["Currently, ",(0,n.jsx)(r.code,{children:"Farm"})," uses ",(0,n.jsx)(r.code,{children:"Vite"})," plugins for both ",(0,n.jsx)(r.code,{children:"vue2"})," and ",(0,n.jsx)(r.code,{children:"vue3"})," compilation. Also the development of Rust Vue plugin ",(0,n.jsx)(r.a,{href:"https://github.com/phoenix-ru/fervid",children:"fervid"})," is also underway."]})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\nimport Vue from '@vite/plugin-vue'\n\nexport default defineConfig({\n  plugins: [Vue()],\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"integrating-jsx",children:"Integrating jsx"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\nimport VueJsx from '@vite/plugin-vue-jsx'\n\nexport default defineConfig({\n  plugins: [VueJsx()],\n});\n"})}),"\n",(0,n.jsxs)(r.p,{children:["For more example details: ",(0,n.jsx)(r.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/vite-adapter-vue",children:"Vue Example"})]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9988:(e,r,t)=>{t.d(r,{Z:()=>s});t(959);var n=t(5341);const a={tabItem:"tabItem_MFY6"};var l=t(1527);function s(e){let{children:r,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:t,children:r})}},7123:(e,r,t)=>{t.d(r,{Z:()=>w});var n=t(959),a=t(5341),l=t(5739),s=t(8903),i=t(6206),o=t(6404),u=t(2108),c=t(2685);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function h(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,l=f(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[u,d]=p({queryString:t,groupId:a}),[h,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,c.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=u??h;return m({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(8302);const v={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var x=t(1527);function g(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),a=i[t].value;a!==n&&(u(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function V(e){const r=h(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...r}),(0,x.jsx)(j,{...e,...r})]})}function w(e){const r=(0,b.Z)();return(0,x.jsx)(V,{...e,children:d(e.children)},String(r))}}}]);