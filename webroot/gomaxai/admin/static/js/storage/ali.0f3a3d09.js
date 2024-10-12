
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as e}from"../config/config.e980ec46.js";import{d as l,u as s,G as a,r as t,C as i,x as o,j as r,o as u,c,b as d,f as n,g as p,e as m,h as f,P as g,q as y}from"../main-5b9099dc.js";const O={style:{"margin-top":"32px","margin-bottom":"24px"}},x=d("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," 启用状态 ",-1),b={style:{"margin-top":"16px"}},_=l({__name:"ali",setup(l){const y=s(),_=a({aliOssStatus:"",aliOssAccessKeyId:"",aliOssAccessKeySecret:"",aliOssRegion:"",aliOssBucket:""}),h=t();async function V(){const l=await e.queryConfig({keys:["aliOssAccessKeySecret","aliOssRegion","aliOssBucket","aliOssAccessKeyId","aliOssStatus"]});Object.assign(_,l.data)}function S(){var l;null==(l=h.value)||l.validate((async l=>{if(l){if(0==y.isUserModifyPermissions())return g.error("非超级管理员无权限操作！");try{await e.setConfig({settings:(s=_,Object.keys(s).map((e=>({configKey:e,configVal:s[e]}))))}),g.success("变更配置信息成功")}catch(a){}V()}else g.error("请填写完整信息");var s}))}const v=i((()=>[{required:1===Number(_.aliOssStatus),message:"开启配置后请填写此项",trigger:"change"}]));return o((()=>{V()})),(e,l)=>{const s=r("el-alert"),a=r("el-switch"),t=r("el-form-item"),i=r("el-col"),o=r("el-row"),g=r("el-input"),y=r("el-form"),V=r("el-button");return u(),c("div",null,[d("div",O,[n(s,{closable:!1,"show-icon":"",title:"阿里云COS参数说明",description:"阿里云的对象存储oss服务、前往阿里云申请oss服务 https://oss.console.aliyun.com/ 、如果同时开启多个存储服务、腾讯云高于阿里云优先级！",type:"warning"})]),d("div",null,[n(y,{ref_key:"formRef",ref:h,model:_,"label-width":"120px","label-position":"top"},{default:p((()=>[n(o,null,{default:p((()=>[n(i,{xs:24,md:20,lg:15,xl:8},{default:p((()=>[n(t,{prop:"aliOssStatus"},{default:p((()=>[x,n(a,{modelValue:_.aliOssStatus,"onUpdate:modelValue":l[0]||(l[0]=e=>_.aliOssStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(o,null,{default:p((()=>[n(i,{xs:24,md:20,lg:15,xl:8},{default:p((()=>[n(t,{label:"accessKeyId",prop:"aliOssAccessKeyId",rules:m(v)},{default:p((()=>[n(g,{size:"large",modelValue:_.aliOssAccessKeyId,"onUpdate:modelValue":l[1]||(l[1]=e=>_.aliOssAccessKeyId=e),placeholder:"请填写SecretId",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),n(o,null,{default:p((()=>[n(i,{xs:24,md:20,lg:15,xl:8},{default:p((()=>[n(t,{label:"keySecret",prop:"aliOssAccessKeySecret",rules:m(v)},{default:p((()=>[n(g,{size:"large",modelValue:_.aliOssAccessKeySecret,"onUpdate:modelValue":l[2]||(l[2]=e=>_.aliOssAccessKeySecret=e),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),n(o,null,{default:p((()=>[n(i,{xs:24,md:20,lg:15,xl:8},{default:p((()=>[n(t,{label:"存储桶名称",prop:"aliOssBucket",rules:m(v)},{default:p((()=>[n(g,{size:"large",modelValue:_.aliOssBucket,"onUpdate:modelValue":l[3]||(l[3]=e=>_.aliOssBucket=e),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),n(o,null,{default:p((()=>[n(i,{xs:24,md:20,lg:15,xl:8},{default:p((()=>[n(t,{label:"所属地域",prop:"aliOssRegion",rules:m(v)},{default:p((()=>[n(g,{size:"large",modelValue:_.aliOssRegion,"onUpdate:modelValue":l[4]||(l[4]=e=>_.aliOssRegion=e),placeholder:"请填写所属地域(oss-cn-shanghai)",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1})])),_:1},8,["model"])]),d("div",b,[n(V,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:S},{default:p((()=>[f("保存设置")])),_:1})])])}}});"function"==typeof y&&y(_);export{_ as default};
