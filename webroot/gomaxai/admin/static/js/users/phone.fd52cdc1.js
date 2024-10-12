
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,G as a,r as s,x as t,j as o,o as i,c as r,b as n,f as d,g as c,h as u,Q as p,P as m,p as g,k as h,_ as f,q as y}from"../main-7fe883cc.js";const b=e=>(g("data-v-eb117bd7"),e=e(),h(),e),P={class:"note_register_main"},x=b((()=>n("div",{class:"title"}," 阿里云手机验证码配置 ",-1))),v={style:{display:"flex","align-items":"center","margin-top":"16px","margin-bottom":"24px"}},_=b((()=>n("div",{style:{"font-size":"15px",color:"#9FA3B8"}},"手机号注册",-1))),S={style:{"margin-left":"12px"}},A={style:{"margin-top":"16px"}},K=e({__name:"phone",setup(e){const g=l(),h=a({phoneRegisterStatus:"",aliPhoneAccessKeyId:"",aliPhoneAccessKeySecret:"",aliPhoneSignName:"",aliPhoneTemplateCode:""}),f=s({phoneRegisterStatus:[{required:!1,trigger:"blur",message:"请选择是否开启手机号注册"}],aliPhoneAccessKeyId:[{required:!1,trigger:"blur",message:"请填写阿里云短信服务accessKeyId"}],aliPhoneAccessKeySecret:[{required:!1,trigger:"blur",message:"请填写阿里云短信服务accessKeySecret"}],aliPhoneSignName:[{required:!1,trigger:"blur",message:"请填写阿里云短信服务的模板签名"}],aliPhoneTemplateCode:[{required:!1,trigger:"blur",message:"请填写阿里云短信服务的模板ID"}]}),y=s();async function b(){const e=await p.queryConfig({keys:["phoneRegisterStatus","aliPhoneAccessKeyId","aliPhoneAccessKeySecret","aliPhoneSignName","aliPhoneTemplateCode"]});Object.assign(h,e.data)}function K(){var e;null==(e=y.value)||e.validate((async e=>{if(e){if(0==g.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");try{await p.setConfig({settings:(l=h,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),m.success("变更配置信息成功")}catch(a){}b()}else m.error("请填写完整信息");var l}))}return t((()=>{b()})),(e,l)=>{const a=o("el-alert"),s=o("el-switch"),t=o("el-tooltip"),p=o("el-input"),m=o("el-form-item"),g=o("el-col"),b=o("el-row"),V=o("el-form"),I=o("el-button");return i(),r("div",null,[n("div",null,[d(a,{closable:!1,"show-icon":"",title:"验证码说明",description:"此处采用阿里云短信服务、请先申请好个人的签名模板以及获取到您的秘钥信息、详细申请地址为：https://dysms.console.aliyun.com/overview 当您配置并开启后则表示开启用户端手机号注册的行为！",type:"warning"})]),n("div",P,[x,n("div",null,[n("div",v,[_,n("div",S,[d(t,{class:"box-item",effect:"dark",content:"如您启用短信验证、则用户端则可以通过手机验证码方式注册或登录！",placement:"right"},{default:c((()=>[d(s,{modelValue:h.phoneRegisterStatus,"onUpdate:modelValue":l[0]||(l[0]=e=>h.phoneRegisterStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])]),n("div",null,[d(V,{ref_key:"formRef",ref:y,rules:f.value,model:h,"label-width":"170px","label-position":"top"},{default:c((()=>[d(b,null,{default:c((()=>[d(g,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(m,{label:"AccessKeyId",prop:"aliPhoneAccessKeyId"},{default:c((()=>[d(p,{size:"large",modelValue:h.aliPhoneAccessKeyId,"onUpdate:modelValue":l[1]||(l[1]=e=>h.aliPhoneAccessKeyId=e),placeholder:"请填写AccessKeyId",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(b,null,{default:c((()=>[d(g,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(m,{label:"AccessKeySecret",prop:"aliPhoneAccessKeySecret"},{default:c((()=>[d(p,{size:"large",modelValue:h.aliPhoneAccessKeySecret,"onUpdate:modelValue":l[2]||(l[2]=e=>h.aliPhoneAccessKeySecret=e),placeholder:"请填写AccessKeySecret",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(b,null,{default:c((()=>[d(g,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(m,{label:"短信签名",prop:"aliPhoneSignName"},{default:c((()=>[d(p,{size:"large",modelValue:h.aliPhoneSignName,"onUpdate:modelValue":l[3]||(l[3]=e=>h.aliPhoneSignName=e),placeholder:"请填写您申请的短信签名",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(b,null,{default:c((()=>[d(g,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(m,{label:"短信模板ID",prop:"aliPhoneTemplateCode"},{default:c((()=>[d(p,{size:"large",modelValue:h.aliPhoneTemplateCode,"onUpdate:modelValue":l[4]||(l[4]=e=>h.aliPhoneTemplateCode=e),placeholder:"请填写短信模板ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])])]),n("div",A,[d(I,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:K},{default:c((()=>[u("保存设置")])),_:1})])])}}});"function"==typeof y&&y(K);const V=f(K,[["__scopeId","data-v-eb117bd7"]]);export{V as default};