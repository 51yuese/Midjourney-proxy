
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.8279f6f1.js";import{d as a,G as t,r as l,x as o,j as s,o as n,c as m,f as r,g as u,b as i,h as d,Q as p,P as c,q as f}from"../main-2d3d97e8.js";const x={class:"flex justify-between"},y=i("b",null,"MJ参数设置",-1),g=a({__name:"prompt",setup(a){const f=t({mjCustomFanyiPrompt:"",mjCustomLianxiangPrompt:""}),g=l({}),b=l();async function j(){const e=await p.queryConfig({keys:["mjCustomFanyiPrompt","mjCustomLianxiangPrompt"]});Object.assign(f,e.data)}function C(){var e;null==(e=b.value)||e.validate((async e=>{if(e){try{await p.setConfig({settings:(a=f,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),c.success("变更配置信息成功")}catch(t){}j()}else c.error("请填写完整信息");var a}))}return o((()=>{j()})),(a,t)=>{const l=s("el-alert"),o=e,p=s("el-button"),c=s("el-input"),j=s("el-form-item"),_=s("el-col"),P=s("el-row"),w=s("el-form"),h=s("el-card");return n(),m("div",null,[r(o,{bottomPadding:"20px"},{default:u((()=>[r(l,{closable:!1,"show-icon":"",title:"MJ参数说明",description:"如果您是海外服务器则不强制开启代理、反之则需要开启代理、代理为系统配套项目、非常规代理、如果您想自己搭建代理请查看教程、如果您想使用系统提供的默认代理、那么选择开启代理并且不填写代理地址即可使用默认地址、如果想获取默认地址请在售后群获取地址！",type:"success"})])),_:1}),r(h,{style:{margin:"20px"}},{header:u((()=>[i("div",x,[y,r(p,{class:"button",onClick:C},{default:u((()=>[d(" 保存设置 ")])),_:1})])])),default:u((()=>[r(w,{ref_key:"formRef",ref:b,rules:g.value,model:f,"label-width":"130px"},{default:u((()=>[r(P,null,{default:u((()=>[r(_,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[r(j,{label:"自定义翻译提示词",prop:"mindCustomPrompt"},{default:u((()=>[r(c,{modelValue:f.mjCustomFanyiPrompt,"onUpdate:modelValue":t[0]||(t[0]=e=>f.mjCustomFanyiPrompt=e),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),r(_,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[r(j,{label:"自定义联想提示词",prop:"mindCustomPrompt"},{default:u((()=>[r(c,{modelValue:f.mjCustomLianxiangPrompt,"onUpdate:modelValue":t[1]||(t[1]=e=>f.mjCustomLianxiangPrompt=e),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof f&&f(g);export{g as default};
