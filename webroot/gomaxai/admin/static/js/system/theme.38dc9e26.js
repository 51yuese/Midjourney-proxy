
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as e}from"../config/config.e980ec46.js";import{d as a,u as t,G as s,r as o,x as r,j as l,o as i,c as n,f,g as m,h as d,b as u,P as c,q as p}from"../main-5b9099dc.js";const g=u("div",{style:{color:"#20295A","font-size":"15px","margin-bottom":"24px"}},"设置默认系统主题",-1),y={style:{"margin-top":"24px"}},b=a({__name:"theme",setup(a){const p=t(),b=s({theme:""}),h=o({theme:[{required:!0,trigger:"blur",message:"必选"}]}),x=o();async function k(){const a=await e.queryConfig({keys:["theme"]});Object.assign(b,a.data)}function _(){var a;null==(a=x.value)||a.validate((async a=>{if(a){if(0==p.isUserModifyPermissions())return c.error("非超级管理员无权限操作！");try{await e.setConfig({settings:(t=b,Object.keys(t).map((e=>({configKey:e,configVal:t[e]}))))}),c.success("变更配置信息成功")}catch(s){}k()}else c.error("请填写完整信息");var t}))}return r((()=>{k()})),(e,a)=>{const t=l("el-radio"),s=l("el-radio-group"),o=l("el-form-item"),r=l("el-form"),c=l("el-button");return i(),n("div",null,[g,f(r,{ref_key:"formRef",ref:x,rules:h.value,model:b},{default:m((()=>[f(o,{prop:"theme"},{default:m((()=>[f(s,{modelValue:b.theme,"onUpdate:modelValue":a[0]||(a[0]=e=>b.theme=e),style:{display:"block"}},{default:m((()=>[f(t,{style:{display:"block",transform:"scale(1.1)","margin-bottom":"12px"},label:"dark"},{default:m((()=>[d("深色")])),_:1}),f(t,{style:{display:"block",transform:"scale(1.1)"},label:"light"},{default:m((()=>[d("浅色")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["rules","model"]),u("div",y,[f(c,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:_},{default:m((()=>[d("保存设置")])),_:1})])])}}});"function"==typeof p&&p(b);export{b as default};
