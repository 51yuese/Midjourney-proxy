
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as t}from"../config/config.e980ec46.js";/* empty css                     */import{d as e,u as o,a,G as i,C as s,r as n,x as l,j as r,o as p,c,b as y,f as d,g as u,h as g,P as f,p as m,k as x,_ as C,q as b}from"../main-5b9099dc.js";const h={style:{"margin-top":"16px"}},v=(t=>(m("data-v-e3f7a757"),t=t(),x(),t))((()=>y("div",{style:{color:"#20295A","font-size":"15px","margin-top":"24px","margin-bottom":"12px"}}," 隐私政策内容 ",-1))),j={style:{"margin-top":"50px"}},_=e({__name:"policy",setup(e){const m=o(),x=a(),C=i({policyContent:"",policyTitle:""});async function b(){const e=await t.queryConfig({keys:["policyTitle","policyContent"]}),{policyTitle:o,policyContent:a}=e.data;Object.assign(C,{policyTitle:o,policyContent:a})}async function _(){if(0==m.isUserModifyPermissions())return f.error("非超级管理员无权限操作！");if(""!=C.policyContent){try{await t.setConfig({settings:(e=C,Object.keys(e).map((t=>({configKey:t,configVal:e[t]}))))}),f.success("变更配置信息成功")}catch(o){}var e;b()}else f.error("请填写用户协议内容")}return s((()=>x.settings.app.colorScheme)),n({policyContent:[{required:!0,trigger:"blur",message:"请填写隐私政策内容"}]}),n(),n("/api/file/upload"),l((()=>{b()})),(t,e)=>{const o=r("el-alert"),a=r("el-input"),i=r("el-button");return p(),c("div",null,[y("div",h,[d(o,{closable:!1,"show-icon":"",title:"隐私政策设置说明",description:"这里的隐私政策设置是对应用户端底部隐私政策链接的设置、你可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"warning"})]),y("div",null,[v,d(a,{style:{width:"100%",height:"50vh"},type:"textarea",modelValue:C.policyContent,"onUpdate:modelValue":e[0]||(e[0]=t=>C.policyContent=t),placeholder:"请输入隐私政策内容",clearable:""},null,8,["modelValue"])]),y("div",j,[d(i,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:_},{default:u((()=>[g("保存设置")])),_:1})])])}}});"function"==typeof b&&b(_);const k=C(_,[["__scopeId","data-v-e3f7a757"]]);export{k as default};