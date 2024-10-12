
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,u as e,E as l,r as p,q as t,j as r,o as y,c as i,b as o,f as u,g as d,Y as n,X as s,h as c,Q as f,O as m,t as g,_ as M,n as x}from"../main-c47e4581.js";const b={style:{display:"flex","align-items":"center","margin-top":"16px","margin-bottom":"24px"}},v={style:{"margin-top":"3px","margin-left":"12px"}},_={style:{"margin-top":"16px"}},h={style:{"margin-top":"3px"}},U={style:{"margin-top":"16px"}},V=a({__name:"mpay",setup(a){const M=e(),x=l({payMpayStatus:"",payMpayPid:"",payMpaySecret:"",payMpayNotifyUrl:"",payMpayReturnUrl:"",payMpayApiPayUrl:"",payMpayRedirect:"",payMpayChannel:[]}),V=p({payMpayStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payMpaySecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payMpayPid:[{required:!0,trigger:"blur",message:"请填写商户PID"}],payMpayNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}],payMpayApiPayUrl:[{required:!0,trigger:"blur",message:"请填写平台支付API请求地址"}]}),P=p(),S=[{label:"微信支付",value:"wxpay"},{label:"支付宝支付",value:"alipay"}];async function A(){const a=await f.queryConfig({keys:["payMpaySecret","payMpayNotifyUrl","payMpayReturnUrl","payMpayPid","payMpayStatus","payMpayApiPayUrl","payMpayRedirect","payMpayChannel"]}),e=a.data.payMpayChannel?JSON.parse(a.data.payMpayChannel):[];Object.assign(x,a.data,{payMpayChannel:e})}function C(){var a;null==(a=P.value)||a.validate((async a=>{if(a){if(0==M.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");try{await f.setConfig({settings:(e=x,Object.keys(e).map((a=>({configKey:a,configVal:z(a,e[a])}))))}),m.success("变更配置信息成功")}catch(l){}A()}else m.error("请填写完整信息");var e}))}function z(a,e){return["payMpayChannel"].includes(a)?e?e?JSON.stringify(e):void 0:[]:e}return t((()=>{A()})),(a,e)=>{const l=r("el-alert"),p=r("el-switch"),t=r("el-input"),f=r("el-form-item"),m=r("el-col"),M=r("el-row"),A=r("el-checkbox"),z=r("el-checkbox-group"),w=r("el-form"),k=r("el-button");return y(),i("div",null,[o("div",null,[u(l,{closable:!1,"show-icon":"",title:"码支付参数说明",description:"码支付只能支持跳转登录、可同时开通多渠道、同时开启多种支付方式的情况优先级参照支付菜单排序、同时只能使用一种平台、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"warning"})]),o("div",null,[o("div",null,[e[8]||(e[8]=o("div",{style:{"font-size":"15px",color:"#20295A","font-weight":"500","margin-top":"32px"}}," 支付参数设置 ",-1)),o("div",b,[e[7]||(e[7]=o("div",{style:{color:"#9FA3B8","font-size":"15px"}},"启用当前支付",-1)),o("div",v,[u(p,{modelValue:x.payMpayStatus,"onUpdate:modelValue":e[0]||(e[0]=a=>x.payMpayStatus=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])])])]),o("div",_,[u(w,{ref_key:"formRef",ref:P,rules:V.value,model:x,"label-width":"120px","label-position":"top"},{default:d((()=>[u(M,null,{default:d((()=>[u(m,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(f,{label:"商户PID",prop:"payMpayPid"},{default:d((()=>[u(t,{size:"large",modelValue:x.payMpayPid,"onUpdate:modelValue":e[1]||(e[1]=a=>x.payMpayPid=a),placeholder:"请填写商户PID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(M,null,{default:d((()=>[u(m,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(f,{label:"商户秘钥",prop:"payMpaySecret"},{default:d((()=>[u(t,{size:"large",modelValue:x.payMpaySecret,"onUpdate:modelValue":e[2]||(e[2]=a=>x.payMpaySecret=a),placeholder:"请填写商户秘钥",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(M,null,{default:d((()=>[u(m,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(f,{label:"支付通知地址",prop:"payMpaySecret"},{default:d((()=>[u(t,{size:"large",modelValue:x.payMpayNotifyUrl,"onUpdate:modelValue":e[3]||(e[3]=a=>x.payMpayNotifyUrl=a),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(M,null,{default:d((()=>[u(m,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(f,{label:"支付回调地址",prop:"payMpaySecret"},{default:d((()=>[u(t,{size:"large",modelValue:x.payMpayReturnUrl,"onUpdate:modelValue":e[4]||(e[4]=a=>x.payMpayReturnUrl=a),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(M,null,{default:d((()=>[u(m,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(f,{label:"支付请求地址",prop:"payMpayApiPayUrl"},{default:d((()=>[u(t,{size:"large",modelValue:x.payMpayApiPayUrl,"onUpdate:modelValue":e[5]||(e[5]=a=>x.payMpayApiPayUrl=a),placeholder:"请填写平台支付请求地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(M,null,{default:d((()=>[u(m,{xs:24,md:24,lg:24,xl:24},{default:d((()=>[u(f,{prop:"payEpayChannel"},{default:d((()=>[e[9]||(e[9]=o("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"20px"}}," 开启支付渠道 ",-1)),o("div",h,[u(z,{modelValue:x.payMpayChannel,"onUpdate:modelValue":e[6]||(e[6]=a=>x.payMpayChannel=a),size:"small"},{default:d((()=>[(y(),i(n,null,s(S,(a=>u(A,{key:a.value,value:a.value},{default:d((()=>[c(g(a.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])]),o("div",U,[u(k,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:C},{default:d((()=>e[10]||(e[10]=[c("保存设置")]))),_:1})])])}}});"function"==typeof x&&x(V);const P=M(V,[["__scopeId","data-v-0180eddf"]]);export{P as default};