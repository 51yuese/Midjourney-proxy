
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,G as r,r as a,x as i,j as o,o as u,c as t,b as p,f as d,g as s,h as c,Q as n,P as g,q as m}from"../main-043c96ab.js";const f={style:{"margin-top":"16px"}},b=e({__name:"copyright",setup(e){const m=l(),b=r({copyrightTitle:"",icpNumber:"",policeFilingNumber:"",icpUrl:"",policeFilingUrl:""}),y=a({copyrightTitle:[{required:!0,trigger:"blur",message:"请填写点击版权内容"}],icpNumber:[{required:!1,trigger:"blur",message:"请填写ICP备案号"}],policeFilingNumber:[{required:!1,trigger:"blur",message:"请填写公安网备案号"}],icpUrl:[{required:!1,trigger:"blur",message:"请填写ICP备案号查询跳转地址"}],policeFilingUrl:[{required:!1,trigger:"blur",message:"请填写公安网备案号查询跳转地址"}]}),x=a();async function _(){const e=await n.queryConfig({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]});Object.assign(b,e.data)}function U(){var e;null==(e=x.value)||e.validate((async e=>{if(e){if(0==m.isUserModifyPermissions())return g.error("非超级管理员无权限操作！");try{await n.setConfig({settings:(l=b,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),g.success("变更配置信息成功")}catch(r){}_()}else g.error("请填写完整信息");var l}))}return i((()=>{_()})),(e,l)=>{const r=o("el-input"),a=o("el-form-item"),i=o("el-col"),n=o("el-row"),g=o("el-form"),m=o("el-button");return u(),t("div",null,[p("div",null,[d(g,{ref_key:"formRef",ref:x,rules:y.value,model:b,"label-width":"130px","label-position":"top"},{default:s((()=>[d(n,null,{default:s((()=>[d(i,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(a,{label:"版权内容",prop:"copyrightTitle"},{default:s((()=>[d(r,{size:"large",modelValue:b.copyrightTitle,"onUpdate:modelValue":l[0]||(l[0]=e=>b.copyrightTitle=e),placeholder:"请填写版权内容",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:s((()=>[d(i,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(a,{label:"ICP备案号",prop:"icpNumber"},{default:s((()=>[d(r,{size:"large",modelValue:b.icpNumber,"onUpdate:modelValue":l[1]||(l[1]=e=>b.icpNumber=e),placeholder:"请填写ICP备案号",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:s((()=>[d(i,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(a,{label:"ICP备案地址",prop:"icpUrl"},{default:s((()=>[d(r,{size:"large",modelValue:b.icpUrl,"onUpdate:modelValue":l[2]||(l[2]=e=>b.icpUrl=e),placeholder:"请填写ICP备案地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:s((()=>[d(i,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(a,{label:"公安网备案号",prop:"policeFilingNumber"},{default:s((()=>[d(r,{size:"large",modelValue:b.policeFilingNumber,"onUpdate:modelValue":l[3]||(l[3]=e=>b.policeFilingNumber=e),placeholder:"请填写公安网备案号",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:s((()=>[d(i,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(a,{label:"公安网备案地址",prop:"policeFilingUrl"},{default:s((()=>[d(r,{size:"large",modelValue:b.policeFilingUrl,"onUpdate:modelValue":l[4]||(l[4]=e=>b.policeFilingUrl=e),placeholder:"请填写公安网备案地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"]),p("div",f,[d(m,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:U},{default:s((()=>[c("保存设置")])),_:1})])])])}}});"function"==typeof m&&m(b);export{b as default};
