
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as a}from"../index/index.74198fad.js";import{ao as e,d as t,r as s,q as n,j as o,V as l,w as i,e as r,o as u,c as d,f as c,g as p,b as f,h as g,Q as m,n as b}from"../main-31e47da4.js";const y=a=>e.post("balance/upgradeBalance",a),v=t({__name:"upgrade",setup(e){const t=s(!0),b=s(!1);async function v(){var a;const e=await m.queryConfig({keys:["upgradeStatus"]});t.value="1"===(null==(a=e.data)?void 0:a.upgradeStatus)}async function w(){b.value=!0,await y(),v(),setTimeout((()=>{v(),b.value=!1}),3e4)}return n((()=>{v()})),(e,s)=>{const n=o("el-alert"),m=a,y=o("el-button"),v=o("el-tooltip"),_=o("el-card"),x=l("loading");return i((u(),d("div",null,[c(m,{bottomPadding:"20px"},{default:p((()=>[c(n,{closable:!1,"show-icon":"",title:"V1.5版本迁移助手",description:"如果您是新部署的用户则无需点击、如果是你是老用户升级(1.6版本以下用户)、由于1.5的计费调整、造成了一定破坏性更新、需要在此进行数据迁移、请注意不要刷新网页、当前升级为危险操作、仅可点击一次、点击完成后请等待约一分钟后完成数据同步、我们将会对历史的用户余额、使用额度、基础模型、4、绘画等数据进行迁移、在迁移完成后即可正常工作了、在未迁移前您是无法查看用户管理下面的用户信息的详细余额的、迁移完毕前去访问您可以看到完整的用户信息包含其余额信息！",type:"error"})])),_:1}),c(_,{style:{margin:"20px"}},{header:p((()=>s[0]||(s[0]=[f("div",{class:"flex justify-between"},[f("b",null,"V1.5版本迁移助手")],-1)]))),default:p((()=>[c(v,{content:" "+(r(t)?"您已经升级过了、请勿重复操作":"当前升级是危险操作、请勿刷新或重复点击、等待加载完成后再进行其他工作！"),placement:"right","show-after":100},{default:p((()=>[c(y,{disabled:r(t),type:"warning",onClick:w},{default:p((()=>s[1]||(s[1]=[g(" 点击升级 ")]))),_:1},8,["disabled"])])),_:1},8,["content"])])),_:1})])),[[x,r(b)]])}}});"function"==typeof b&&b(v);export{v as default};
