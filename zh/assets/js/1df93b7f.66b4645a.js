"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[3237],{1172:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(959),l=a(5924),r=a(5581),s=a(5243),m=a(1626),c=a(7229);const o=a.p+"assets/images/rocket-84b12b0b9c2fedde390e122d2563ecbc.png",i=a.p+"assets/images/plug-509f8f982a9a08431017c8c46bb6d3bb.png",u=a.p+"assets/images/feature-1a0545f4589a9c5ac2949f6ff0acde53.png",d=a.p+"assets/images/box-2073f27f31683afdfc3b2e6f1f775e1f.png",f=a.p+"assets/images/compatible-1387759c6885367cdeb0569560b3a950.png",p={features:"features_t9lD",item:"item_fAv5",card:"card_L8bV",backgroundImage:"backgroundImage_M6A8","card-container":"card-container_mQSC",glowing:"glowing_rukm","card-container-content":"card-container-content_HPWq"};function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}const E=[{title:n.createElement(c.Z,null,"Extremely Fast"),Img:o,description:n.createElement(c.Z,null,"Written in Rust, start a React / Vue project in milliseconds and perform an HMR update within 10ms for most situations."),className:"w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2"},{title:n.createElement(c.Z,null,"Incremental Building"),Img:d,description:n.createElement(c.Z,null,"Incremental Building: Support persistent cache, module level cache enabled by default, any module won't be compiled twice until it's changed!"),className:"w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2"},{title:n.createElement(c.Z,null,"Rich Features"),Img:u,description:n.createElement(c.Z,null,"Farm support compiling Html, Css, Css Modules, Js/Jsx/Ts/Tsx, Json, Static Assets out of box, support sass, less, postcss, vue, react, solid by official plugins, support lazy compiling, partial bundling and more"),className:"w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2"},{title:n.createElement(c.Z,null,"Fully Pluggable and Vite Compatible"),Img:i,description:n.createElement(c.Z,null,"Fully Pluggable: Everything inside Farm is powered by plugins, Supports both Rust and JavaScript plugins. Support Vite plugins out of box."),className:" w-full flex h-52 rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-auto"},{title:n.createElement(c.Z,null,"Partial Bundling"),Img:d,description:n.createElement(c.Z,null,"Partial Bundling: Bundle your project into a few reasonable bundles, speeding up resource loading without losing caching granularity."),className:"w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2"},{title:"Consistency and Compatibility",Img:f,description:n.createElement(c.Z,null,"Consistency & Compatibility: What you see in development will be the same as what you get in production. Supports both legacy (ES5) and modern browsers."),className:" w-full flex h-52 rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-auto"}];function x({Img:e,title:t,description:a,className:r}){return n.createElement("div",{className:(0,l.Z)("rounded-lg shadow-lg",p.card,p["card-container"],r)},n.createElement("div",{className:(0,l.Z)("flex items-center flex-col",p["card-container-content"])},n.createElement("div",{className:(0,l.Z)("flex items-center justify-center absolute",p.backgroundImage)},n.createElement("img",{src:e,className:(0,l.Z)("text--center w-20 h-20"),role:"img"})),n.createElement("img",{src:e,className:(0,l.Z)("text--center w-16 h-16"),role:"img"}),n.createElement("div",{className:"p-6 flex-grow flex-shrink"},n.createElement("h3",{className:"text-lg font-bold mt-4 mb-2"},t),n.createElement("p",{className:"text-base"},a))))}function w(){return n.createElement("section",{className:"my-4"},n.createElement("div",{className:"max-w-7xl mx-auto flex"},n.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"},E.map(((e,t)=>n.createElement(x,b(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){g(e,t,a[t])}))}return e}({key:t},e),{className:"flex-grow flex-shrink my-4"})))))))}var y=a(2915);const h={"progress-bar-container":"progress-bar-container_Btve","progress-bar-inner-container":"progress-bar-inner-container_RjNy","progress-bar":"progress-bar_MQ9H","font-mono":"font-mono_qmiE",main:"main_Gz2F",fill:"fill_bMTX",content:"content__pcr",container:"container_GXFn",tabs:"tabs_FETH"};function v({value:e,max:t}){const[a,l]=(0,n.useState)(0),r=1e3*e,s=window.innerWidth<768?80:18,m=(c=a,r<1e3?`${c.toFixed(0)}ms`:`${(c/1e3).toFixed(2)}s`);var c;const o=(0,y.q_)({width:"100%",from:{width:"0%"},config:{duration:r},onChange(e){l(parseFloat(e.value.width)/100*r)}});return n.createElement("div",{className:`${h["progress-bar-container"]} flex justify-between items-center sm:pr-4`,style:{width:`${s}vw`,flex:1}},n.createElement("div",{className:`${h["progress-bar-inner-container"]} flex justify-between`,style:{width:e/t*.8*s+"vw"}},n.createElement(y.q.div,{className:h["progress-bar"],style:o})),n.createElement("div",{className:`${h["font-mono"]} text-sm sm:text-base`},m))}var N=a(3473);const Z={ColdStart:[{name:"Farm",time:.41},{name:"Rspack",time:.614},{name:"Vite",time:3.407},{name:"Webpack",time:7.857}],HotStart:[{name:"Farm",time:.285},{name:"Rspack",time:.544},{name:"Vite",time:3.251},{name:"Webpack",time:1.047}],HmrRoot:[{name:"Farm",time:.02},{name:"Rspack",time:.089},{name:"Vite",time:.029},{name:"Webpack",time:.317}],HmrLeaf:[{name:"Farm",time:.01},{name:"Rspack",time:.104},{name:"Vite",time:.022},{name:"Webpack",time:.255}],ColdBuild:[{name:"Farm",time:.475},{name:"Rspack",time:.724},{name:"Vite",time:2.02},{name:"Webpack",time:11.978}],HotBuild:[{name:"Farm",time:.176},{name:"Rspack",time:.743},{name:"Vite",time:2.085},{name:"Webpack",time:.924}]};function k(){const e=[{name:n.createElement(c.Z,null,"ColdStart"),title:"ColdStart"},{name:n.createElement(c.Z,null,"HotStart"),title:"HotStart"},{name:n.createElement(c.Z,null,"HmrRoot"),title:"HmrRoot"},{name:n.createElement(c.Z,null,"HmrLeaf"),title:"HmrLeaf"},{name:n.createElement(c.Z,null,"ColdBuild"),title:"ColdBuild"},{name:n.createElement(c.Z,null,"HotBuild"),title:"HotBuild"}],[t,a]=(0,n.useState)("ColdStart"),{ref:s,inView:m}=(0,N.YD)(),o=Z[t],[i,u]=(0,n.useState)("ColdStart");function d({section:e}){return n.createElement("div",null,n.createElement("div",{className:(0,l.Z)("flex-1 cursor-pointer rounded-md py-2 px-2 sm:px-4 text-center font-jakarta text-sm font-semibold",i===e.title?"bg-fuchsia-600 text-white":"color-re"),onClick:()=>{u(e.title),a(e.title)}},e.name))}function f({SCENE:e,children:t}){return n.createElement("div",null,n.createElement("div",{className:"inline-flex mb-4 items-center rounded-lg bg text-sm  lg:text-base"},e.map(((e,t)=>n.createElement(d,{section:e,key:t})))),n.createElement("div",null,t))}return n.createElement(n.Fragment,null,n.createElement("div",{ref:s,className:"flex"},m&&n.createElement(n.Fragment,null,n.createElement("div",{className:`${h.tabs} flex flex-col items-center my-4 z-1`},n.createElement("div",{className:"flex h-20 w-full flex-1 items-center self-start lg:justify-end"},n.createElement("div",{className:"w-full"},n.createElement(f,{SCENE:e},o.map((e=>n.createElement("div",{key:e.name,className:"flex flex-center justify-start my-8 flex-col sm:flex-row"},m&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex items-center text-light-500  text-center font-bold",style:{minWidth:"100px"}},e.name),n.createElement(v,{value:e.time,max:Math.max(...o.map((e=>e.time)))})))))),n.createElement("div",{className:"font-bold cursor-pointer"},n.createElement(r.Z,{rel:"stylesheet",href:"https://github.com/farm-fe/performance-compare"},"See benchmark details"))))))))}var j=a(5554),S=a(9276),_=a(7080),C=a(4534),P=a(2221),F=a(3350);function O(){new S.PointsMaterial({color:"rgb(255, 255, 0)",size:.1});const e=new S.BufferGeometry,t=(new S.PointsMaterial({color:"white",size:.1}),new Float32Array(300));for(let a=0;a<100;a++){const e=100*Math.random()-50,n=100*Math.random()-50,l=100*Math.random()-50;t[3*a]=e,t[3*a+1]=n,t[3*a+2]=l}e.setAttribute("position",new S.BufferAttribute(t,3));(0,n.useRef)();return n.createElement(n.Fragment,null,n.createElement(j.Xz,{dpr:[1.5,2],linear:!0,shadows:!0,style:{position:"absolute"}},n.createElement("fog",{attach:"fog",args:["#272730",16,30]}),n.createElement("ambientLight",{intensity:.75}),n.createElement(_.c,{makeDefault:!0,position:[0,0,16],fov:75},n.createElement("pointLight",{intensity:1,position:[-10,-25,-10]}),n.createElement("spotLight",{castShadow:!0,intensity:2.25,angle:.2,penumbra:1,position:[-25,20,-15],"shadow-mapSize":[1024,1024],"shadow-bias":-1e-4})),n.createElement(C.z,{autoRotate:!0,autoRotateSpeed:.08,enablePan:!0,enableZoom:!1,enableRotate:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),n.createElement(P.t,{radius:100,count:1500,factor:8,saturation:1,fade:!0})),n.createElement("div",{className:"layer"}),n.createElement(F.a,null))}const B={heroBanner:"heroBanner_qdFl",banner:"banner_d9gt",buttons:"buttons_AeoN",btn:"btn_bvfa",farmButton:"farmButton_siNL",glowing:"glowing_QCKo"},R={VPTeamMembers:"VPTeamMembers_MKMj",container:"container_hhjZ"};function M(e){const{members:t,size:a}=e,{siteConfig:r}=(0,s.Z)(),m=(0,l.Z)(R.VPTeamMembers,"small my-40");return n.createElement("div",{className:m},n.createElement("div",{className:"flex justify-center my-8 text-2xl font-bold"},n.createElement(c.Z,null,"Contributors")),n.createElement("div",{className:(0,l.Z)("mt-10",R.container)},n.createElement("a",{className:"flex justify-center",href:"https://github.com/farm-fe/farm/graphs/contributors"},n.createElement("img",{className:"w-12/12 sm:w-7/12",src:"https://contrib.rocks/image?repo=farm-fe/farm"}))))}function H(){const{siteConfig:e}=(0,s.Z)();return n.createElement("header",{className:(0,l.Z)("grid grid-cols-1 gap-10 relative z-10 mx-auto max-w-8xl py-4 sm:py-6 lg:py-8","lg:grid-cols-2",B.heroBanner)},n.createElement("div",{className:"container w-full flex flex-col items-center justify-center"},n.createElement("p",{className:"font-extrabold text-4xl sm:text-7xl lg:text-7xl tracking-tight text-center"},n.createElement("span",null,n.createElement(c.Z,null,"Extremely Fast")),n.createElement("span",{className:(0,l.Z)(B.banner,"my-6","block")},n.createElement(c.Z,null," Web")),n.createElement("span",{className:(0,l.Z)(B.banner,"my-6","block")},n.createElement(c.Z,null," Build Tool")),n.createElement("span",null,n.createElement(c.Z,null," Written In"),n.createElement("span",{className:B.banner}," Rust"))),n.createElement("div",{className:(0,l.Z)(B.buttons,"my-8")},n.createElement(r.Z,{to:"/docs/quick-start",style:{textDecoration:"none"}},n.createElement("div",{className:(0,l.Z)(B.farmButton,"flex w-36 sm:w-40 items-center justify-center font-bold")},n.createElement(c.Z,null,"Quick Start"))),n.createElement(r.Z,{style:{marginLeft:"20px",textDecoration:"none"},to:"/docs/why-farm"},n.createElement("div",{className:(0,l.Z)(B.farmButton,"flex w-36 sm:w-40  items-center justify-center font-bold")},n.createElement(c.Z,null,"Why Farm?"))))),n.createElement(k,null))}function I(){const{siteConfig:e}=(0,s.Z)();return n.createElement(m.Z,{title:`${e.title} Documentation`,description:"Description will go into a meta tag in <head />"},n.createElement(O,null),n.createElement("main",{className:"max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl"},n.createElement(H,null),n.createElement(w,null),n.createElement(M,null)))}}}]);