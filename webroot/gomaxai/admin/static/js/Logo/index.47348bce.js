
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,G as s,a as o,C as t,x as e,o as n,c,b as i,t as l,_ as m}from"../main-5b9099dc.js";import{a as r}from"../config/config.e980ec46.js";const g={class:"title"},p=["src"],u=a({name:"Logo"}),f=m(a({...u,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(a){const m=s({siteName:"",clientLogoPath:""});const u=o();return t((()=>{const a={};return u.settings.home.enable&&(a.name="home"),a})),e((()=>{!async function(){const a=await r.queryConfig({keys:["siteName","clientLogoPath"]});Object.assign(m,a.data)}()})),(a,s)=>(n(),c("div",g,[i("img",{src:m.clientLogoPath,class:"logo"},null,8,p),i("span",null,l(m.siteName),1)]))}}),[["__scopeId","data-v-2c3b1680"]]);export{f as default};
