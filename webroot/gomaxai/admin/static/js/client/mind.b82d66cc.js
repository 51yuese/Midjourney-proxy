
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as e}from"../config/config.e980ec46.js";import{d as a,u as t,G as l,r as o,x as s,j as n,o as r,c as i,b as d,f as u,g as m,h as p,P as f,p as c,k as g,_ as x,q as b}from"../main-5b9099dc.js";const y=(e=>(c("data-v-e37c80ab"),e=e(),g(),e))((()=>d("div",{style:{color:"#20295A","font-size":"15px","font-weight":"bold","margin-top":"32px","margin-bottom":"10px"}}," 思维导图设置 ",-1))),_={style:{"margin-top":"16px"}},v=a({__name:"mind",setup(a){const c=t(),g=l({mindDefaultData:"",mindCustomPrompt:""}),x=o({}),b=o();async function v(){const a=await e.queryConfig({keys:["mindDefaultData","mindCustomPrompt"]});Object.assign(g,a.data)}function w(){var a;null==(a=b.value)||a.validate((async a=>{if(a){if(0==c.isUserModifyPermissions())return f.error("非超级管理员无权限操作！");try{await e.setConfig({settings:(t=g,Object.keys(t).map((e=>({configKey:e,configVal:t[e]}))))}),f.success("变更配置信息成功")}catch(l){}v()}else f.error("请填写完整信息");var t}))}return s((()=>{v()})),(e,a)=>{const t=n("el-alert"),l=n("el-input"),o=n("el-form-item"),s=n("el-col"),f=n("el-row"),c=n("el-form"),v=n("el-button");return r(),i("div",null,[d("div",null,[u(t,{closable:!1,"show-icon":"",title:"系统基础设置配置说明",description:"默认配置数据会在页面加载后初次展示给用户、预设信息系统有内置提示词、如果您想覆盖掉他、则在此处设置您的专属提示词！",type:"warning"})]),y,d("div",null,[u(c,{ref_key:"formRef",ref:b,rules:x.value,model:g,"label-width":"150px","label-position":"top"},{default:m((()=>[u(f,null,{default:m((()=>[u(s,{xs:24,md:20,lg:15,xl:12},{default:m((()=>[u(o,{label:"思维导图默认数据",prop:"mindDefaultData"},{default:m((()=>[u(l,{modelValue:g.mindDefaultData,"onUpdate:modelValue":a[0]||(a[0]=e=>g.mindDefaultData=e),type:"textarea",rows:10,placeholder:"思维导图的默认展示数据Markdown格式",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(f,null,{default:m((()=>[u(s,{xs:24,md:20,lg:15,xl:12},{default:m((()=>[u(o,{label:"导图自定义提示词",prop:"mindCustomPrompt"},{default:m((()=>[u(l,{modelValue:g.mindCustomPrompt,"onUpdate:modelValue":a[1]||(a[1]=e=>g.mindCustomPrompt=e),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])]),d("div",_,[u(v,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:w},{default:m((()=>[p("保存设置")])),_:1})])])}}});"function"==typeof b&&b(v);const w=x(v,[["__scopeId","data-v-e37c80ab"]]);export{w as default};
