
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as e}from"../config/config.e980ec46.js";import{d as l,u as a,G as t,r as i,x as o,j as c,o as f,c as d,b as r,f as n,g as u,h as s,P as p,p as m,k as g,_ as x,q as h}from"../main-5b9099dc.js";const w=e=>(m("data-v-09d069e2"),e=e(),g(),e),b={class:"wechat_box"},_={class:"wechat_main"},A=w((()=>r("div",{class:"title"}," 微信开发者配置设置 ",-1))),y={style:{display:"flex","align-items":"center","margin-top":"16px","margin-bottom":"24px"}},S={style:{display:"flex","align-items":"center"}},T=w((()=>r("div",{style:{"font-size":"15px",color:"#9FA3B8"}}," 微信扫码注册 ",-1))),V={style:{"margin-left":"12px"}},v={style:{display:"flex","align-items":"center","margin-left":"40px"}},O=w((()=>r("div",{style:{"font-size":"15px",color:"#9FA3B8"}}," 微信静默 ",-1))),k={style:{"margin-left":"12px"}},I={style:{"margin-top":"16px"}},z=l({__name:"wechat",setup(l){const m=a(),g=t({wechatRegisterStatus:"",wechatSilentLoginStatus:"",wechatOfficialName:"",wechatOfficialAppId:"",wechatOfficialToken:"",wechatOfficialAppSecret:"",officialSubscribeText:"",officialBindAccountText:"",officialScanLoginText:"",officialAutoReplyText:"",WE_MiNI_APPID:"",WE_MINI_APPSECRET:""}),x=i({wechatOfficialName:[{required:!1,trigger:"blur",message:"请填写微信公众号名称"}],wechatOfficialAppId:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 AppId"}],wechatOfficialToken:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 Token"}],wechatOfficialAppSecret:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 AppSecret"}]}),h=i();async function w(){const l=await e.queryConfig({keys:["wechatOfficialName","wechatOfficialAppId","wechatOfficialToken","wechatOfficialAppSecret","officialSubscribeText","officialBindAccountText","officialScanLoginText","officialAutoReplyText","wechatRegisterStatus","wechatSilentLoginStatus","WE_MiNI_APPID","WE_MINI_APPSECRET"]});Object.assign(g,l.data)}function z(){var l;null==(l=h.value)||l.validate((async l=>{if(l){if(0==m.isUserModifyPermissions())return p.error("非超级管理员无权限操作！");try{await e.setConfig({settings:(a=g,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),p.success("变更配置信息成功")}catch(t){}w()}else p.error("请填写完整信息");var a}))}return o((()=>{w()})),(e,l)=>{const a=c("el-alert"),t=c("el-switch"),i=c("el-tooltip"),o=c("el-input"),p=c("el-form-item"),m=c("el-col"),w=c("el-row"),R=c("el-form"),U=c("el-button");return f(),d("div",b,[r("div",null,[n(a,{closable:!1,"show-icon":"",title:"微信设置说明[仔细阅读]",description:"系统微信登录通过关联公众号实现[请务必注册为服务号、个人公众号没有二维码等此类权限]、以便于后期联动小程序、开发文档前往微信公众平台 https://mp.weixin.qq.com/ 、拿到开发者配置信息即可、如果用户对公众号发送消息、我们将会从自定义回复管理当中的内容进行匹配自动回复、如果没有匹配到结果则回复下面设置的自定义回复默认信息、同时别忘记在微信公众号平台将自己的ip加为ip白名单、配置位置为公众号后台->基本配置：服务复制参考 https://域名/api/official/notify 将域名修改为您的域名 下方Token对应自己后台设置的Token、加密秘钥随机即可、当设置不指定首页并且配置了微信登录即可默认打开静默登录！",type:"warning"})]),r("div",_,[A,r("div",null,[r("div",y,[r("div",S,[T,r("div",V,[n(i,{class:"box-item",effect:"dark",content:"如您启用微信注册、则用户端则可以通过微信扫码方式注册或登录！",placement:"right"},{default:u((()=>[n(t,{modelValue:g.wechatRegisterStatus,"onUpdate:modelValue":l[0]||(l[0]=e=>g.wechatRegisterStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])]),r("div",v,[O,r("div",k,[n(i,{class:"box-item",effect:"dark",content:"如您启用静默登录、则用户在微信环境打开则直接自动登录！",placement:"right"},{default:u((()=>[n(t,{modelValue:g.wechatSilentLoginStatus,"onUpdate:modelValue":l[1]||(l[1]=e=>g.wechatSilentLoginStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])])]),n(R,{ref_key:"formRef",ref:h,rules:x.value,model:g,"label-width":"170px","label-position":"top"},{default:u((()=>[n(w,null,{default:u((()=>[n(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[n(p,{label:"公众号名称",prop:"wechatOfficialName"},{default:u((()=>[n(o,{size:"large",modelValue:g.wechatOfficialName,"onUpdate:modelValue":l[2]||(l[2]=e=>g.wechatOfficialName=e),placeholder:"公众号名称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:u((()=>[n(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[n(p,{label:"AppId",prop:"wechatOfficialAppId"},{default:u((()=>[n(o,{size:"large",modelValue:g.wechatOfficialAppId,"onUpdate:modelValue":l[3]||(l[3]=e=>g.wechatOfficialAppId=e),placeholder:"公众号开发信息 AppId",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:u((()=>[n(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[n(p,{label:"Token",prop:"wechatOfficialToken"},{default:u((()=>[n(o,{size:"large",modelValue:g.wechatOfficialToken,"onUpdate:modelValue":l[4]||(l[4]=e=>g.wechatOfficialToken=e),placeholder:"公众号Token配置",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:u((()=>[n(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[n(p,{label:"AppSecret",prop:"wechatOfficialAppSecret"},{default:u((()=>[n(o,{size:"large",modelValue:g.wechatOfficialAppSecret,"onUpdate:modelValue":l[5]||(l[5]=e=>g.wechatOfficialAppSecret=e),placeholder:"公众号开发信息 AppSecret",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:u((()=>[n(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[n(p,{label:"订阅公众号欢迎消息",prop:"officialSubscribeText"},{default:u((()=>[n(o,{size:"large",modelValue:g.officialSubscribeText,"onUpdate:modelValue":l[6]||(l[6]=e=>g.officialSubscribeText=e),type:"textarea",rows:3,placeholder:"订阅你的公众号后对他的欢迎语！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:u((()=>[n(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[n(p,{label:"绑定账号回复消息",prop:"officialBindAccountText"},{default:u((()=>[n(o,{size:"large",modelValue:g.officialBindAccountText,"onUpdate:modelValue":l[7]||(l[7]=e=>g.officialBindAccountText=e),type:"textarea",rows:3,placeholder:"非微信登录用户首次绑定微信的欢迎语",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:u((()=>[n(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[n(p,{label:"扫码登录回复消息",prop:"officialScanLoginText"},{default:u((()=>[n(o,{size:"large",modelValue:g.officialScanLoginText,"onUpdate:modelValue":l[8]||(l[8]=e=>g.officialScanLoginText=e),type:"textarea",rows:3,placeholder:"用户扫码登录成功时自动回复的内容",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:u((()=>[n(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[n(p,{label:"自定义回复的默认信息",prop:"officialAutoReplyText"},{default:u((()=>[n(o,{size:"large",modelValue:g.officialAutoReplyText,"onUpdate:modelValue":l[9]||(l[9]=e=>g.officialAutoReplyText=e),type:"textarea",rows:3,placeholder:"当用户对公众号发了消息不在自动回复列表时回复的兜底内容",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])]),r("div",I,[n(U,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:z},{default:u((()=>[s("保存设置")])),_:1})])])])}}});"function"==typeof h&&h(z);const R=x(z,[["__scopeId","data-v-09d069e2"]]);export{R as default};
