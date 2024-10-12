
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,r as n,p as s,q as t,o as e,c as o,f as l,b as c,g as u,k as r,s as i,j as d,h as v,t as f,e as p,_ as m,n as _}from"../main-c47e4581.js";const w={class:"notfound"},I={class:"content"},b=a({__name:"[...all]",setup(a){const m=r(),_=n({inter:NaN,countdown:5});function b(){m.push("/")}return s((()=>{_.value.inter&&clearInterval(_.value.inter)})),t((()=>{_.value.inter=setInterval((()=>{_.value.countdown--,0===_.value.countdown&&(_.value.inter&&clearInterval(_.value.inter),b())}),1e3)})),(a,n)=>{const s=i,t=d("el-button");return e(),o("div",w,[l(s,{name:"404",class:"icon"}),c("div",I,[n[0]||(n[0]=c("h1",null,"404",-1)),n[1]||(n[1]=c("div",{class:"desc"}," 抱歉，你访问的页面不存在 ",-1)),l(t,{type:"primary",onClick:b},{default:u((()=>[v(f(p(_).countdown)+" 秒后，返回首页 ",1)])),_:1})])])}}});"function"==typeof _&&_(b);const h=m(b,[["__scopeId","data-v-599b59df"]]);export{h as default};
