
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as s,E as t,r as a,q as o,j as r,o as n,c as i,b as l,f as d,g as p,h as g,Q as c,O as u,_ as y,n as m}from"../main-31e47da4.js";const f={style:{"padding-top":"32px"}},x={style:{"margin-top":"16px"}},b=e({__name:"globalPre",setup(e){const y=s(),m=t({systemPreMessage:""});async function b(){const e=await c.queryConfig({keys:["systemPreMessage"]});Object.assign(m,e.data)}async function P(){if(0==y.isUserModifyPermissions())return u.error("非超级管理员无权限操作！");var e;null==m.systemPreMessage||""==m.systemPreMessage?u.error("请填写完整信息"):(await c.setConfig({settings:(e=m,Object.keys(e).map((s=>({configKey:s,configVal:e[s]}))))}),u.success("变更配置信息成功"),b())}return a({systemPreMessage:[{required:!0,trigger:"blur",message:"请填写全局预设信息、用于模型预设词"}]}),a(),o((()=>{b()})),(e,s)=>{const t=r("el-alert"),a=r("el-input"),o=r("el-button");return n(),i("div",null,[l("div",null,[d(t,{closable:!1,"show-icon":"",title:"模型全局头部预设说明",description:"当前消息将会被追加到对话模型的全局预设当中、对应用APP无效、对其他所有绘画生效！",type:"warning"})]),l("div",f,[s[2]||(s[2]=l("div",{style:{color:"#20295A","font-size":"15px","font-weight":"bold","margin-bottom":"10px"}},"模型系统消息预设",-1)),l("div",null,[s[1]||(s[1]=l("div",{style:{color:"#20295","font-size":"15px","margin-bottom":"12px"}},"模型全局头部预设",-1)),l("div",null,[d(a,{style:{width:"500px"},modelValue:m.systemPreMessage,"onUpdate:modelValue":s[0]||(s[0]=e=>m.systemPreMessage=e),type:"textarea",rows:5,placeholder:"请填写模型全局头部预设信息！",clearable:""},null,8,["modelValue"])])])]),l("div",x,[d(o,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:P},{default:p((()=>s[3]||(s[3]=[g("保存设置")]))),_:1})])])}}});"function"==typeof m&&m(b);const P=y(b,[["__scopeId","data-v-d2a34a03"]]);export{P as default};
