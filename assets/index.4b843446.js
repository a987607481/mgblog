import{d as e,r as t,o as n,c as r,a as o,b as s,e as a,f as i,g as u,I as c}from"./vendor.c4bbf705.js";var m=e({name:"App"});let d;m.render=function(e,o,s,a,i,u){const c=t("router-view");return n(),r(c)};const l={};var p=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:o(0)})});p.render=function(e,t,o,s,a,i){return n(),r("div",null,"自动化部署完成？？？")};const f=[{path:"/",name:"Home",component:p},{path:"/vuex",name:"Vuex",component:{}},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===d){const e=document.createElement("link").relList;d=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in l)return;l[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":d,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./axios.83a540bf.js")),["./assets/axios.83a540bf.js","./assets/vendor.c4bbf705.js"])}],h=s({history:a(),routes:f}),v={count:0};var E=i({state:()=>v,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});u(m).use(h).use(E).use(c).mount("#app");