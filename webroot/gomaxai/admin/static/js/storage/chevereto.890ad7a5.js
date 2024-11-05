
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,E as t,r as a,A as o,q as r,j as s,o as i,c as u,b as c,f as n,g as d,e as p,h,Q as v,O as m,n as f}from"../main-31e47da4.js";const g={style:{"margin-top":"32px","margin-bottom":"24px"}},y={style:{"margin-top":"16px"}},x=e({__name:"chevereto",setup(e){const f=l(),x=t({cheveretoStatus:"",cheveretoUploadPath:"",cheveretoKey:""}),b=a();async function _(){const e=await v.queryConfig({keys:["cheveretoKey","cheveretoUploadPath","cheveretoStatus"]});Object.assign(x,e.data)}function V(){var e;null==(e=b.value)||e.validate((async e=>{if(e){if(0==f.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");try{await v.setConfig({settings:(l=x,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),m.success("变更配置信息成功")}catch(t){}_()}else m.error("请填写完整信息");var l}))}const U=o((()=>[{required:1===Number(x.cheveretoStatus),message:"开启配置后请填写此项",trigger:"change"}]));return r((()=>{_()})),(e,l)=>{const t=s("el-alert"),a=s("el-switch"),o=s("el-form-item"),r=s("el-col"),v=s("el-row"),m=s("el-input"),f=s("el-form"),_=s("el-button");return i(),u("div",null,[c("div",g,[n(t,{closable:!1,"show-icon":"",title:"chevereto图床配置说明",description:"chevereto图床官方文档 https://v4-docs.chevereto.com/developer/api/api-v1.html 同时开启多个存储会以菜单排序优先级开启使用",type:"warning"})]),c("div",null,[n(f,{ref_key:"formRef",ref:b,model:x,"label-width":"100px","label-position":"top"},{default:d((()=>[n(v,null,{default:d((()=>[n(r,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[n(o,{prop:"cheveretoStatus"},{default:d((()=>[l[3]||(l[3]=c("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," 启用状态 ",-1)),n(a,{modelValue:x.cheveretoStatus,"onUpdate:modelValue":l[0]||(l[0]=e=>x.cheveretoStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(v,null,{default:d((()=>[n(r,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[n(o,{label:"上传地址",prop:"cheveretoUploadPath",rules:p(U)},{default:d((()=>[n(m,{size:"large",modelValue:x.cheveretoUploadPath,"onUpdate:modelValue":l[1]||(l[1]=e=>x.cheveretoUploadPath=e),placeholder:"请填写您的图床上传地址",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),n(v,null,{default:d((()=>[n(r,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[n(o,{label:"ApiKey",prop:"cheveretoKey",rules:p(U)},{default:d((()=>[n(m,{size:"large",modelValue:x.cheveretoKey,"onUpdate:modelValue":l[2]||(l[2]=e=>x.cheveretoKey=e),placeholder:"请填写ApiKey",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1})])),_:1},8,["model"])]),c("div",y,[n(_,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:V},{default:d((()=>l[4]||(l[4]=[h("保存设置")]))),_:1})])])}}});"function"==typeof f&&f(x);export{x as default};
