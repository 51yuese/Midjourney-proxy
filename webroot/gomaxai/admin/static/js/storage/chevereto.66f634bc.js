
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as e}from"../config/config.e980ec46.js";import{d as t,u as l,G as a,r as o,C as r,x as s,j as i,o as c,c as u,b as n,f as d,g as p,e as h,h as f,P as m,q as v}from"../main-5b9099dc.js";const g={style:{"margin-top":"32px","margin-bottom":"24px"}},y=n("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," 启用状态 ",-1),x={style:{"margin-top":"16px"}},b=t({__name:"chevereto",setup(t){const v=l(),b=a({cheveretoStatus:"",cheveretoUploadPath:"",cheveretoKey:""}),_=o();async function V(){const t=await e.queryConfig({keys:["cheveretoKey","cheveretoUploadPath","cheveretoStatus"]});Object.assign(b,t.data)}function U(){var t;null==(t=_.value)||t.validate((async t=>{if(t){if(0==v.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");try{await e.setConfig({settings:(l=b,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),m.success("变更配置信息成功")}catch(a){}V()}else m.error("请填写完整信息");var l}))}const K=r((()=>[{required:1===Number(b.cheveretoStatus),message:"开启配置后请填写此项",trigger:"change"}]));return s((()=>{V()})),(e,t)=>{const l=i("el-alert"),a=i("el-switch"),o=i("el-form-item"),r=i("el-col"),s=i("el-row"),m=i("el-input"),v=i("el-form"),V=i("el-button");return c(),u("div",null,[n("div",g,[d(l,{closable:!1,"show-icon":"",title:"chevereto图床配置说明",description:"chevereto图床官方文档 https://v4-docs.chevereto.com/developer/api/api-v1.html 同时开启多个存储会以菜单排序优先级开启使用",type:"warning"})]),n("div",null,[d(v,{ref_key:"formRef",ref:_,model:b,"label-width":"100px","label-position":"top"},{default:p((()=>[d(s,null,{default:p((()=>[d(r,{xs:24,md:20,lg:15,xl:8},{default:p((()=>[d(o,{prop:"cheveretoStatus"},{default:p((()=>[y,d(a,{modelValue:b.cheveretoStatus,"onUpdate:modelValue":t[0]||(t[0]=e=>b.cheveretoStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(s,null,{default:p((()=>[d(r,{xs:24,md:20,lg:15,xl:8},{default:p((()=>[d(o,{label:"上传地址",prop:"cheveretoUploadPath",rules:h(K)},{default:p((()=>[d(m,{size:"large",modelValue:b.cheveretoUploadPath,"onUpdate:modelValue":t[1]||(t[1]=e=>b.cheveretoUploadPath=e),placeholder:"请填写您的图床上传地址",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),d(s,null,{default:p((()=>[d(r,{xs:24,md:20,lg:15,xl:8},{default:p((()=>[d(o,{label:"ApiKey",prop:"cheveretoKey",rules:h(K)},{default:p((()=>[d(m,{size:"large",modelValue:b.cheveretoKey,"onUpdate:modelValue":t[2]||(t[2]=e=>b.cheveretoKey=e),placeholder:"请填写ApiKey",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1})])),_:1},8,["model"])]),n("div",x,[d(V,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:U},{default:p((()=>[f("保存设置")])),_:1})])])}}});"function"==typeof v&&v(b);export{b as default};