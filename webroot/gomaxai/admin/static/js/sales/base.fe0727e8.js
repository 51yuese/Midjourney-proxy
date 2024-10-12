
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.1e4219c7.js";import{d as l,E as a,r as s,q as t,j as o,o as i,c as r,f as u,g as n,b as d,h as m,Q as f,O as c,n as p}from"../main-c47e4581.js";const y={class:"flex justify-between"},g={style:{height:"61vh","overflow-y":"auto","overflow-x":"hidden"}},b=l({__name:"base",setup(l){const p=a({salesBaseRatio:10,salesSeniorRatio:30,salesAllowDrawMoney:10,salesBaseTitle:"新秀分销商"}),b=s({salesBaseRatio:[{required:!0,trigger:"blur",message:"请填写默认佣金比例"}],salesSeniorRatio:[{required:!0,trigger:"blur",message:"请填写高级代理默认比例"}],salesBaseTitle:[{required:!0,trigger:"blur",message:"请填写默认用户推介等级名称"}]}),_=s();async function w(){const e=await f.queryConfig({keys:["salesBaseRatio","salesSeniorRatio","salesAllowDrawMoney","salesBaseTitle"]});Object.assign(p,e.data)}function x(){var e;null==(e=_.value)||e.validate((async e=>{if(e){try{await f.setConfig({settings:(l=p,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),c.success("变更配置信息成功")}catch(a){}w()}else c.error("请填写完整信息");var l}))}return t((()=>{w()})),(l,a)=>{const s=o("el-alert"),t=e,f=o("el-button"),c=o("el-input-number"),w=o("el-form-item"),R=o("el-col"),V=o("el-row"),B=o("el-input"),v=o("el-form"),h=o("el-card");return i(),r("div",null,[u(t,{bottomPadding:"20px"},{default:n((()=>[u(s,{closable:!1,"show-icon":"",title:"分销系统基础配置",description:"填写默认佣金比例和高级分销佣金比例会对应显示到客户端的分销页面、同时新用户将使用默认分销比例、允许提现额度限制用户最低提现金额、分销名称同样对应分销页面、高级代理可自定义名称！",type:"success"})])),_:1}),u(h,{style:{margin:"20px"}},{header:n((()=>[d("div",y,[a[5]||(a[5]=d("b",null,"分销系统基础设置",-1)),u(f,{class:"button",onClick:x},{default:n((()=>a[4]||(a[4]=[m(" 保存设置 ")]))),_:1})])])),default:n((()=>[d("div",g,[u(v,{ref_key:"formRef",ref:_,model:p,"label-width":"140px",rules:b.value},{default:n((()=>[u(V,null,{default:n((()=>[u(R,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[u(w,{label:"默认分销佣金比例",prop:"salesBaseRatio"},{default:n((()=>[u(c,{modelValue:p.salesBaseRatio,"onUpdate:modelValue":a[0]||(a[0]=e=>p.salesBaseRatio=e),max:100,min:0,step:5,"step-strictly":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(V,null,{default:n((()=>[u(R,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[u(w,{label:"高级分销佣金比例",prop:"salesSeniorRatio"},{default:n((()=>[u(c,{modelValue:p.salesSeniorRatio,"onUpdate:modelValue":a[1]||(a[1]=e=>p.salesSeniorRatio=e),max:100,min:0,step:5,"step-strictly":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(V,null,{default:n((()=>[u(R,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[u(w,{label:"允许最低提现金额",prop:"salesAllowDrawMoney"},{default:n((()=>[u(B,{modelValue:p.salesAllowDrawMoney,"onUpdate:modelValue":a[2]||(a[2]=e=>p.salesAllowDrawMoney=e),type:"number","step-strictly":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(V,null,{default:n((()=>[u(R,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[u(w,{label:"默认等级分销名称",prop:"salesBaseTitle"},{default:n((()=>[u(B,{modelValue:p.salesBaseTitle,"onUpdate:modelValue":a[3]||(a[3]=e=>p.salesBaseTitle=e),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])])),_:1})])}}});"function"==typeof p&&p(b);export{b as default};