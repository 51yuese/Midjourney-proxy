
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as a}from"../index/index.7b018e8d.js";import{a as e}from"../config/config.e980ec46.js";import{ac as t,d as s,r as n,x as o,j as l,U as i,w as r,e as u,o as d,c,f,g as p,h as g,b as m,q as b}from"../main-5b9099dc.js";const y=a=>t.post("balance/upgradeBalance",a),v=m("div",{class:"flex justify-between"},[m("b",null,"V1.5版本迁移助手")],-1),w=s({__name:"upgrade",setup(t){const s=n(!0),m=n(!1);async function b(){var a;const t=await e.queryConfig({keys:["upgradeStatus"]});s.value="1"===(null==(a=t.data)?void 0:a.upgradeStatus)}async function w(){m.value=!0,await y(),b(),setTimeout((()=>{b(),m.value=!1}),3e4)}return o((()=>{b()})),(e,t)=>{const n=l("el-alert"),o=a,b=l("el-button"),y=l("el-tooltip"),x=l("el-card"),_=i("loading");return r((d(),c("div",null,[f(o,{bottomPadding:"20px"},{default:p((()=>[f(n,{closable:!1,"show-icon":"",title:"V1.5版本迁移助手",description:"如果您是新部署的用户则无需点击、如果是你是老用户升级(1.6版本以下用户)、由于1.5的计费调整、造成了一定破坏性更新、需要在此进行数据迁移、请注意不要刷新网页、当前升级为危险操作、仅可点击一次、点击完成后请等待约一分钟后完成数据同步、我们将会对历史的用户余额、使用额度、基础模型、4、绘画等数据进行迁移、在迁移完成后即可正常工作了、在未迁移前您是无法查看用户管理下面的用户信息的详细余额的、迁移完毕前去访问您可以看到完整的用户信息包含其余额信息！",type:"error"})])),_:1}),f(x,{style:{margin:"20px"}},{header:p((()=>[v])),default:p((()=>[f(y,{content:" "+(u(s)?"您已经升级过了、请勿重复操作":"当前升级是危险操作、请勿刷新或重复点击、等待加载完成后再进行其他工作！"),placement:"right","show-after":100},{default:p((()=>[f(b,{disabled:u(s),type:"warning",onClick:w},{default:p((()=>[g(" 点击升级 ")])),_:1},8,["disabled"])])),_:1},8,["content"])])),_:1})])),[[_,u(m)]])}}});"function"==typeof b&&b(w);export{w as default};
