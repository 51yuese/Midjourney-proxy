
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,r as n,p as s,q as e,o as t,c as o,f as l,b as c,g as u,k as r,s as i,j as d,h as v,t as p,e as f,_ as m,n as _}from"../main-31e47da4.js";const w={class:"notfound"},I={class:"content"},h=a({__name:"[...all]",setup(a){const m=r(),_=n({inter:NaN,countdown:5});function h(){m.push("/")}return s((()=>{_.value.inter&&clearInterval(_.value.inter)})),e((()=>{_.value.inter=setInterval((()=>{_.value.countdown--,0===_.value.countdown&&(_.value.inter&&clearInterval(_.value.inter),h())}),1e3)})),(a,n)=>{const s=i,e=d("el-button");return t(),o("div",w,[l(s,{name:"404",class:"icon"}),c("div",I,[n[0]||(n[0]=c("h1",null,"404",-1)),n[1]||(n[1]=c("div",{class:"desc"}," 抱歉，你访问的页面不存在 ",-1)),l(e,{type:"primary",onClick:h},{default:u((()=>[v(p(f(_).countdown)+" 秒后，返回首页 ",1)])),_:1})])])}}});"function"==typeof _&&_(h);const y=m(h,[["__scopeId","data-v-207550e4"]]);export{y as default};
