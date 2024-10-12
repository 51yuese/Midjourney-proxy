
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as e}from"../config/config.e980ec46.js";import{A as l}from"../index/index.7e2cb35b.js";import{d as a,u as t,r,au as o,G as d,x as u,j as i,o as m,c as n,b as s,H as p,f as _,g as f,K as c,J as j,h as x,P as b,p as v,k as g,_ as y,q as D}from"../main-5b9099dc.js";import V from"./index.14a81540.js";import"../components/mjManger.838222e6.js";import"../mj/mj.7f2ee6d6.js";import"../components/mjDetail.7ddac888.js";const h=e=>(v("data-v-5d9030d4"),e=e(),g(),e),P={style:{display:"flex","align-items":"center","margin-bottom":"16px"}},U={style:{"margin-top":"16px"}},w={key:0},z={key:0},k={key:1},S={key:1},F=h((()=>s("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," 不存储图片 ",-1))),I=h((()=>s("div",{style:{width:"250px"}}," 默认会存储图片到配置的存储中、如果开启此选择则表示不保存原图到我们配置的存储上、那么则必须配置一个图片反代地址、直接反代访问原始图片、这样可以进一步节省空间、需要您部署mj-proxy项目并填写基础地址即可！ ",-1))),T={key:2},C={key:3},M=h((()=>s("div",{style:{"font-size":"15px"}},"会员免费",-1))),q={style:{display:"flex","align-items":"center"}},H={style:{display:"flex","align-items":"center","margin-top":"20px"}},A=h((()=>s("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," fast模式 ",-1))),N={style:{display:"flex","align-items":"center","margin-top":"20px","margin-left":"20px"}},L=h((()=>s("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," relax模式 ",-1))),B={style:{display:"flex","align-items":"center","margin-top":"20px","margin-left":"20px"}},R=h((()=>s("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," trubo模式 ",-1))),O=h((()=>s("br",null,null,-1))),E={style:{"margin-top":"16px","margin-bottom":"32px"}},J=h((()=>s("br",null,null,-1))),K={style:{"margin-top":"16px","margin-bottom":"32px"}},G=h((()=>s("br",null,null,-1))),Q={style:{"margin-top":"16px"}},X={key:0,style:{"margin-top":"16px"}},$={key:1},W=a({__name:"proxy",setup(a){const v=t(),g=r(0);o(l);const y=r(!1),D=r(!1),h=r(!1),W=d({mjTimeoutMs:"",mjProxy:"0",mjSocketProxyUrl:"",mjProxyUrl:"",mjLimitCount:null,mjProxyImgUrl:"",mjNotSaveImg:"0",mjModel:"",mjProxyHost:"",mjProxySecert:"",mjTransferHost:"",mjTransferSecert:"",mjTransferOrganization:"",fast_vip_free:0,relax_vip_free:0,trubo_vip_free:0,fast_mjDeduction1:"",fast_mjDeduction2:"",fast_mjDeduction3:"",relax_mjDeduction1:"",relax_mjDeduction2:"",relax_mjDeduction3:"",trubo_mjDeduction1:"",trubo_mjDeduction2:"",trubo_mjDeduction3:""}),Y=r({mjProxyHost:[{required:!0}],mjProxySecert:[{required:!0}],mjTransferHost:[{required:!0}],mjTransferSecert:[{required:!0}],fast_vip_free:[{required:!0}],relax_vip_free:[{required:!0}],trubo_vip_free:[{required:!0}],fast_mjDeduction1:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}],fast_mjDeduction2:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}],fast_mjDeduction3:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}],relax_mjDeduction1:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}],relax_mjDeduction2:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}],relax_mjDeduction3:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}],trubo_mjDeduction1:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}],trubo_mjDeduction2:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}],trubo_mjDeduction3:[{required:!0,message:"扣减积分不能为空"},{validator:(e,l,a)=>{l<0?a("扣减积分不能小于0"):a()}}]}),Z=r();async function ee(){const l=await e.queryConfig({keys:["mjTimeoutMs","mjProxy","mjProxyUrl","mjSocketProxyUrl","mjLimitCount","mjNotSaveImg","mjProxyImgUrl","mjModel","mjProxyHost","mjProxySecert","mjTransferHost","mjTransferSecert","mjTransferOrganization","fast_mjDeduction1","fast_mjDeduction2","fast_mjDeduction3","relax_mjDeduction1","relax_mjDeduction2","relax_mjDeduction3","trubo_mjDeduction1","trubo_mjDeduction2","trubo_mjDeduction3","fast_vip_free","relax_vip_free","trubo_vip_free"]});l.data.fast_vip_free&&(l.data.fast_vip_free=Number(l.data.fast_vip_free)),l.data.relax_vip_free&&(l.data.fast_vip_free=Number(l.data.relax_vip_free)),l.data.trubo_vip_free&&(l.data.fast_vip_free=Number(l.data.trubo_vip_free)),y.value=!(Number(l.data.fast_vip_free)>=0),D.value=!(Number(l.data.relax_vip_free)>=0),h.value=!(Number(l.data.trubo_vip_free)>=0),Object.assign(W,l.data)}function le(){var l;null==(l=Z.value)||l.validate((async l=>{if(l){if(0==v.isUserModifyPermissions())return b.error("非超级管理员无权限操作！");try{let l={};0==g.value&&"mjProxy"==W.mjModel?(l.mjModel=W.mjModel,l.mjProxyHost=W.mjProxyHost,l.mjProxySecert=W.mjProxySecert):0==g.value&&"mjTransfer"==W.mjModel?(l.mjModel=W.mjModel,l.mjTransferHost=W.mjTransferHost,l.mjTransferSecert=W.mjTransferSecert):1==g.value?(l.mjNotSaveImg=W.mjNotSaveImg,l.mjProxyImgUrl=W.mjProxyImgUrl):2==g.value&&(l.mjLimitCount=W.mjLimitCount),await e.setConfig({settings:te(l)}),b.success("变更配置信息成功")}catch(a){}ee()}else b.error("请填写完整信息")}))}function ae(l){var a;null==(a=Z.value)||a.validate((async a=>{if(a){if("super"!=v.userRole)return b.error("非超级管理员无权限操作！");if(0==y.value&&W.fast_vip_free<0)return b.error("会员每日免费次数不能小于0");if(0==D.value&&W.relax_vip_free<0)return b.error("会员每日免费次数不能小于0");if(0==h.value&&W.trubo_vip_free<0)return b.error("会员每日免费次数不能小于0");try{let a={fast_vip_free:W.fast_vip_free,relax_vip_free:W.relax_vip_free,trubo_vip_free:W.trubo_vip_free};1==l?(a.fast_mjDeduction1=W.fast_mjDeduction1,a.relax_mjDeduction1=W.relax_mjDeduction1,a.trubo_mjDeduction1=W.trubo_mjDeduction1):2==l?(a.fast_mjDeduction2=W.fast_mjDeduction2,a.relax_mjDeduction2=W.relax_mjDeduction2,a.trubo_mjDeduction2=W.trubo_mjDeduction2):3==l&&(a.fast_mjDeduction3=W.fast_mjDeduction3,a.relax_mjDeduction3=W.relax_mjDeduction3,a.trubo_mjDeduction3=W.trubo_mjDeduction3),await e.setConfig({settings:te(a)}),b.success("变更配置信息成功")}catch(t){}ee()}else b.error("请填写完整信息")}))}function te(e){return Object.keys(e).map((l=>({configKey:l,configVal:e[l]})))}function re(e){g.value=e}function oe(e){W.fast_vip_free=1==e?-1:0}function de(e){W.relax_vip_free=1==e?-1:0}function ue(e){W.trubo_vip_free=1==e?-1:0}return u((()=>{ee()})),(e,l)=>{const a=i("el-option"),t=i("el-select"),r=i("el-form-item"),o=i("el-col"),d=i("el-row"),u=i("el-input"),b=i("el-switch"),v=i("QuestionFilled"),ee=i("el-icon"),te=i("el-tooltip"),ie=i("el-alert"),me=i("el-button"),ne=i("el-form");return m(),n("div",null,[s("div",null,[s("div",P,[s("div",{class:p(0==g.value?"type_title":"def_type_title"),onClick:l[0]||(l[0]=e=>re(0))},"绘图模型",2),s("div",{class:p(1==g.value?"type_title":"def_type_title"),onClick:l[1]||(l[1]=e=>re(1))},"图片存储设置",2),s("div",{class:p(2==g.value?"type_title":"def_type_title"),onClick:l[2]||(l[2]=e=>re(2))},"绘图用户设置",2),s("div",{class:p(3==g.value?"type_title":"def_type_title"),onClick:l[3]||(l[3]=e=>re(3))},"绘图扣费设置",2)])]),s("div",U,[_(ne,{ref_key:"formRef",ref:Z,rules:Y.value,model:W,"label-width":"150px","label-position":"top"},{default:f((()=>[0==g.value?(m(),n("div",w,[_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(r,{label:"绘图模式",prop:"mjModel","label-width":"150"},{default:f((()=>[_(t,{size:"large",modelValue:W.mjModel,"onUpdate:modelValue":l[4]||(l[4]=e=>W.mjModel=e),placeholder:"请选择",clearable:""},{default:f((()=>[_(a,{value:"mjProxy",label:"代理模式（通过代理服务器进行多个MJ账号管理）"}),_(a,{value:"mjTransfer",label:"中转模式（通过中转服务商提供的单个账号服务）"})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),"mjProxy"==W.mjModel?(m(),n("div",z,[_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(r,{label:"代理地址",prop:"mjProxyHost","label-width":"150"},{default:f((()=>[_(u,{size:"large",modelValue:W.mjProxyHost,"onUpdate:modelValue":l[5]||(l[5]=e=>W.mjProxyHost=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(r,{label:"代理密钥",prop:"mjProxySecert","label-width":"150"},{default:f((()=>[_(u,{size:"large",modelValue:W.mjProxySecert,"onUpdate:modelValue":l[6]||(l[6]=e=>W.mjProxySecert=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):(m(),n("div",k,[_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(r,{label:"中转地址",prop:"mjTransferHost","label-width":"150"},{default:f((()=>[_(u,{size:"large",modelValue:W.mjTransferHost,"onUpdate:modelValue":l[7]||(l[7]=e=>W.mjTransferHost=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(r,{label:"中转密钥",prop:"mjTransferSecert","label-width":"150"},{default:f((()=>[_(u,{size:"large",modelValue:W.mjTransferSecert,"onUpdate:modelValue":l[8]||(l[8]=e=>W.mjTransferSecert=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})]))])):c("",!0),1==g.value?(m(),n("div",S,[_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:12},{default:f((()=>[_(r,{prop:"mjNotSaveImg"},{default:f((()=>[F,_(b,{modelValue:W.mjNotSaveImg,"onUpdate:modelValue":l[9]||(l[9]=e=>W.mjNotSaveImg=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),_(te,{class:"box-item",effect:"dark",placement:"right"},{content:f((()=>[I])),default:f((()=>[_(ee,{class:"ml-3 cursor-pointer"},{default:f((()=>[_(v)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(r,{label:"图片反代地址",prop:"mjProxyImgUrl","label-width":"150"},{default:f((()=>[_(u,{size:"large",modelValue:W.mjProxyImgUrl,"onUpdate:modelValue":l[10]||(l[10]=e=>W.mjProxyImgUrl=e),placeholder:"图片反代地址、用于代理访问图片、此项目请自行部署mj-proxy项目配置其中的地址即可！",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):c("",!0),2==g.value?(m(),n("div",T,[_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(r,{label:"单人绘图并发限制",prop:"mjLimitCount","label-width":"150"},{default:f((()=>[_(u,{size:"large",modelValue:W.mjLimitCount,"onUpdate:modelValue":l[11]||(l[11]=e=>W.mjLimitCount=e),placeholder:"单人同时绘制限制数量、同一时间最多可以绘制几张！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):c("",!0),3==g.value?(m(),n("div",C,[s("div",null,[M,s("div",q,[_(r,null,{default:f((()=>[s("div",H,[A,_(b,{modelValue:y.value,"onUpdate:modelValue":l[12]||(l[12]=e=>y.value=e),onChange:oe},null,8,["modelValue"])])])),_:1}),_(r,null,{default:f((()=>[s("div",N,[L,_(b,{modelValue:D.value,"onUpdate:modelValue":l[13]||(l[13]=e=>D.value=e),onChange:de},null,8,["modelValue"])])])),_:1}),_(r,null,{default:f((()=>[s("div",B,[R,_(b,{modelValue:h.value,"onUpdate:modelValue":l[14]||(l[14]=e=>h.value=e),onChange:ue},null,8,["modelValue"])])])),_:1})]),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[1!=y.value?(m(),j(r,{key:0,label:"fast模式会员每日免费次数",prop:"fast_vip_free","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.fast_vip_free,"onUpdate:modelValue":l[15]||(l[15]=e=>W.fast_vip_free=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})):c("",!0)])),_:1})])),_:1}),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[1!=D.value?(m(),j(r,{key:0,label:"relax模式会员每日免费次数",prop:"relax_vip_free","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.relax_vip_free,"onUpdate:modelValue":l[16]||(l[16]=e=>W.relax_vip_free=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})):c("",!0)])),_:1})])),_:1}),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[1!=h.value?(m(),j(r,{key:0,label:"trubo模式会员每日免费次数",prop:"trubo_vip_free","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.trubo_vip_free,"onUpdate:modelValue":l[17]||(l[17]=e=>W.trubo_vip_free=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})):c("",!0)])),_:1})])),_:1})]),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(ie,{closable:!1,"show-icon":"",title:"I类操作说明",type:"warning",style:{"margin-bottom":"20px"}},{default:f((()=>[x(" Imagine/Variation/Outpaint/Pan/Blend/Inpaint/Upscale 2x/Upscale 4x/PicReader/Reroll "),O,x(" 中文释义: 想象/变体/扩展/平移/融合/补漆/放大2倍/放大4倍/图片阅读器/重掷骰子 ")])),_:1}),_(r,{label:"fast模式",prop:"fast_mjDeduction1","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.fast_mjDeduction1,"onUpdate:modelValue":l[18]||(l[18]=e=>W.fast_mjDeduction1=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),_(r,{label:"relax模式",prop:"relax_mjDeduction1","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.relax_mjDeduction1,"onUpdate:modelValue":l[19]||(l[19]=e=>W.relax_mjDeduction1=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),_(r,{label:"trubo模式",prop:"trubo_mjDeduction1","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.trubo_mjDeduction1,"onUpdate:modelValue":l[20]||(l[20]=e=>W.trubo_mjDeduction1=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s("div",E,[_(me,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:l[21]||(l[21]=e=>ae(1))},{default:f((()=>[x("保存设置 ")])),_:1})]),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(ie,{closable:!1,"show-icon":"",title:"II类操作说明",type:"warning",style:{"margin-bottom":"20px"}},{default:f((()=>[x(" Upscale/Describe/PicReaderRetry/FaceSwap/Shorten "),J,x(" 中文释义: 放大/图表文字/图表重试/换脸/prompt缩短 ")])),_:1}),_(r,{label:"fast模式",prop:"fast_mjDeduction2","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.fast_mjDeduction2,"onUpdate:modelValue":l[22]||(l[22]=e=>W.fast_mjDeduction2=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),_(r,{label:"relax模式",prop:"relax_mjDeduction2","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.relax_mjDeduction2,"onUpdate:modelValue":l[23]||(l[23]=e=>W.relax_mjDeduction2=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),_(r,{label:"trubo模式",prop:"trubo_mjDeduction2","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.trubo_mjDeduction2,"onUpdate:modelValue":l[24]||(l[24]=e=>W.trubo_mjDeduction2=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s("div",K,[_(me,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:l[25]||(l[25]=e=>ae(2))},{default:f((()=>[x("保存设置 ")])),_:1})]),_(d,null,{default:f((()=>[_(o,{xs:24,md:20,lg:15,xl:8},{default:f((()=>[_(ie,{closable:!1,"show-icon":"",title:"III类操作说明",type:"warning",style:{"margin-bottom":"20px"}},{default:f((()=>[x(" Fetch/ListByIds/Modal/Seed "),G,x(" 中文释义: 获取单个任务/批量获取任务/弹出模态框/种子Seed ")])),_:1}),_(r,{label:"fast模式",prop:"fast_mjDeduction3","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.fast_mjDeduction3,"onUpdate:modelValue":l[26]||(l[26]=e=>W.fast_mjDeduction3=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),_(r,{label:"relax模式",prop:"relax_mjDeduction3","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.relax_mjDeduction3,"onUpdate:modelValue":l[27]||(l[27]=e=>W.relax_mjDeduction3=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),_(r,{label:"trubo模式",prop:"trubo_mjDeduction3","label-width":"100"},{default:f((()=>[_(u,{size:"large",modelValue:W.trubo_mjDeduction3,"onUpdate:modelValue":l[28]||(l[28]=e=>W.trubo_mjDeduction3=e),type:"number",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s("div",Q,[_(me,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:l[29]||(l[29]=e=>ae(3))},{default:f((()=>[x("保存设置 ")])),_:1})])])):c("",!0)])),_:1},8,["rules","model"]),3!=g.value?(m(),n("div",X,[_(me,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:le},{default:f((()=>[x("保存设置 ")])),_:1})])):c("",!0),"mjProxy"==W.mjModel&&0==g.value?(m(),n("div",$,[_(V)])):c("",!0)])])}}});"function"==typeof D&&D(W);const Y=y(W,[["__scopeId","data-v-5d9030d4"]]);export{Y as default};