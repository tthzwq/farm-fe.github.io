(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5350],{7226:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,c]=t;if(r&&c){r=parseInt(r),c=parseInt(c);const e=r<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=r;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4542:(e,t,n)=>{"use strict";n.d(t,{Z:()=>q});var r=n(959),o=n(4605),c=n(5341),a=n(3619),l=n(6347);function s(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var i=n(9799),u=n(7226),m=n.n(u);const d=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),f=RegExp("\\{(?<range>[\\d,-]+)\\}"),b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function p(e,t){const n=e.map((e=>{const{start:n,end:r}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function g(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:c}=t;if(c&&f.test(c)){const e=c.match(f).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return p(["js","jsBlock"],t);case"jsx":case"tsx":return p(["js","jsBlock","jsx"],t);case"html":return p(["js","jsBlock","html"],t);case"python":case"py":case"bash":return p(["bash"],t);case"markdown":case"md":return p(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return p(["tex"],t);case"lua":case"haskell":case"sql":return p(["lua"],t);case"wasm":return p(["wasm"],t);default:return p(Object.keys(b).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(r,o),l=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),d=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let m=0;m<l.length;){const e=l[m].match(a);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${m},`:u[t]?s[u[t]].start=m:d[t]&&(s[d[t]].range+=`${s[d[t]].start}-${m-1},`),l.splice(m,1)}n=l.join("\n");const g={};return Object.entries(s).forEach((([e,{range:t}])=>{m()(t).forEach((t=>{var n,r,o;null!==(o=(n=g)[r=t])&&void 0!==o||(n[r]=[]),g[t].push(e)}))})),{lineClassNames:g,code:n}}const y={codeBlockContainer:"codeBlockContainer_byB0"};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e){var{as:t}=e,n=O(e,["as"]);const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}(s());return r.createElement(t,v(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},n),{style:o,className:(0,c.Z)(n.className,y.codeBlockContainer,i.k.common.codeBlock)}))}const w={codeBlockContent:"codeBlockContent_G02N",codeBlockTitle:"codeBlockTitle_XOsY",codeBlock:"codeBlock_vtKE",codeBlockStandalone:"codeBlockStandalone_qmFB",codeBlockLines:"codeBlockLines_DF0l",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_YPk7",buttonGroup:"buttonGroup_zF9B"};function E({children:e,className:t}){return r.createElement(k,{as:"pre",tabIndex:0,className:(0,c.Z)(w.codeBlockStandalone,"thin-scrollbar",t)},r.createElement("code",{className:w.codeBlockLines},e))}var j=n(2228);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,o]=(0,r.useState)(),c=(0,r.useCallback)((()=>{var t;o(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{c()}),[c]),function(e,t,n=B){const o=(0,j.zX)(t),c=(0,j.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var N=n(2281);const P={codeLine:"codeLine_lH32",codeLineNumber:"codeLineNumber_WkUC",codeLineContent:"codeLineContent_A7bf"};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S({line:e,classNames:t,showLineNumbers:n,getLineProps:o,getTokenProps:a}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const l=o({line:e,className:(0,c.Z)(t,n&&P.codeLine)}),s=e.map(((e,t)=>r.createElement("span",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L(e,t,n[t])}))}return e}({key:t},a({token:e,key:t})))));return r.createElement("span",l,n?r.createElement(r.Fragment,null,r.createElement("span",{className:P.codeLineNumber}),r.createElement("span",{className:P.codeLineContent},s)):s,r.createElement("br",null))}var x=n(7229);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){A(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const $={copyButtonCopied:"copyButtonCopied_EgIB",copyButtonIcons:"copyButtonIcons_tqJi",copyButtonIcon:"copyButtonIcon_aF5r",copyButtonSuccessIcon:"copyButtonSuccessIcon_tr6o"};function W({code:e,className:t}){const[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch(l){}n.remove(),c&&(o.removeAllRanges(),o.addRange(c)),r&&r.focus()}(e),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[e]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,x.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,x.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,x.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",t,$.copyButton,n&&$.copyButtonCopied),onClick:l},r.createElement("span",{className:$.copyButtonIcons,"aria-hidden":"true"},r.createElement(_,{className:$.copyButtonIcon}),r.createElement(T,{className:$.copyButtonSuccessIcon})))}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){D(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const H={wordWrapButtonIcon:"wordWrapButtonIcon_s81P",wordWrapButtonEnabled:"wordWrapButtonEnabled_XI6X"};function R({className:e,onClick:t,isEnabled:n}){const o=(0,x.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:t,className:(0,c.Z)("clean-btn",e,n&&H.wordWrapButtonEnabled),"aria-label":o,title:o},r.createElement(Z,{className:H.wordWrapButtonIcon,"aria-hidden":"true"}))}function M({children:e,className:t="",metastring:n,title:o,showLineNumbers:a,language:i}){const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.L)();var f;const b=function(e){return null==e?void 0:e.toLowerCase()}(null!==(f=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==f?f:u),p=s(),y=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),c=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),l=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return C(c,l),(0,r.useEffect)((()=>{l()}),[e,l]),(0,r.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:a}}(),h=function(e){var t,n;return null!==(n=null==e||null===(t=e.match(d))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||o,{lineClassNames:v,code:O}=g(e,{metastring:n,language:b,magicComments:m}),E=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return r.createElement(k,{as:"div",className:(0,c.Z)(t,b&&!t.includes(`language-${b}`)&&`language-${b}`)},h&&r.createElement("div",{className:w.codeBlockTitle},h),r.createElement("div",{className:w.codeBlockContent},r.createElement(N.y$,{theme:p,code:O,language:null!=b?b:"text"},(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:a})=>r.createElement("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,c.Z)(e,w.codeBlock,"thin-scrollbar"),style:t},r.createElement("code",{className:(0,c.Z)(w.codeBlockLines,E&&w.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(S,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:v[t],showLineNumbers:E}))))))),r.createElement("div",{className:w.buttonGroup},(y.isEnabled||y.isCodeScrollable)&&r.createElement(R,{className:w.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),r.createElement(W,{className:w.codeButton,code:O}))))}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function q(e){var{children:t}=e,n=V(e,["children"]);const c=(0,o.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?M:E;return r.createElement(l,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}({key:String(c)},n),a)}},5696:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l,a:()=>a});var r=n(959);const o={},c=r.createContext(o);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);