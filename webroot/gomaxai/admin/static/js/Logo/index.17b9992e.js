
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,E as s,a as t,A as e,q as o,o as n,c,b as l,t as i,Q as m,_ as r}from"../main-31e47da4.js";const g={class:"title"},u=["src"],d=a({name:"Logo"}),p=r(a({...d,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(a){const r=s({siteName:"",clientLogoPath:""});const d=t();return e((()=>{const a={};return d.settings.home.enable&&(a.name="home"),a})),o((()=>{!async function(){const a=await m.queryConfig({keys:["siteName","clientLogoPath"]});Object.assign(r,a.data)}()})),(a,s)=>(n(),c("div",g,[l("img",{src:r.clientLogoPath,class:"logo"},null,8,u),l("span",null,i(r.siteName),1)]))}}),[["__scopeId","data-v-707adafc"]]);export{p as default};
