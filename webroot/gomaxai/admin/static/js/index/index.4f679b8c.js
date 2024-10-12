
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as i}from"../config/config.e980ec46.js";import{d as e,r as a,G as c,x as r,o as s,c as o,b as t,h as l,t as p,e as n,K as m,_ as g}from"../main-5b9099dc.js";const y={class:"copy-container"},u={style:{color:"#9FA3B8"}},f={key:0},h=["href"],b={key:1},d=["href"],N=e({name:"Copyright"}),F=g(e({...N,setup(e){a({copyrightTitle:"GoMaxAiAdmin",copyrightUrl:"/"});const g=c({agreementTitle:"",policyTitle:"",filingNumber:"",companyName:""});return r((()=>{!async function(){const e=await i.copyright({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]});e.success&&Object.assign(g,e.data)}()})),(i,e)=>(s(),o("div",y,[t("div",u,[t("p",null,[l("版权所有 © "+p(n(g).copyrightTitle)+" ",1),n(g).icpNumber?(s(),o("span",f,[t("a",{href:n(g).icpUrl||"#"},p(n(g).icpNumber),9,h)])):m("",!0),n(g).policeFilingNumber?(s(),o("span",b,[t("a",{href:n(g).policeFilingUrl||"#"},p(n(g).policeFilingNumber),9,d)])):m("",!0)])])]))}}),[["__scopeId","data-v-aacddcf8"]]);export{F as _};
