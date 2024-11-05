
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.74198fad.js";import{d as l,E as a,r as o,q as n,j as d,o as s,c as p,f as i,g as t,b as u,h as M,Q as k,O as r,n as x}from"../main-31e47da4.js";const m={class:"flex justify-between"},f={style:{height:"59vh","overflow-y":"auto","overflow-x":"hidden"}},T=l({__name:"interface",setup(l){const x=a({openaiBaseUrl:"",openaiTimeoutMs:"",openaiaAtoDowngrade:0,openaiModel3MaxTokens:"",openaiModel3MaxTokensRes:"",openaiModel3MaxTokens16k:"",openaiModel3MaxTokens16kRes:"",openaiModel4MaxTokens:"",openaiModel4MaxTokensRes:"",openaiModel4MaxTokens32k:"",openaiModel4MaxTokens32kRes:""}),T=o({openaiBaseUrl:[{required:!1,trigger:"blur",message:"请填写openai的请求地址"}],openaiTimeoutMs:[{required:!1,trigger:"blur",message:"请填写openai的超时时间（单位ms）"}]}),c=o();async function _(){const e=await k.queryConfig({keys:["openaiBaseUrl","openaiTimeoutMs","openaiModel3MaxTokens","openaiaAtoDowngrade","openaiModel3MaxTokensRes","openaiModel3MaxTokens16k","openaiModel3MaxTokens16kRes","openaiModel4MaxTokens","openaiModel4MaxTokensRes","openaiModel4MaxTokens32k","openaiModel4MaxTokens32kRes"]}),{openaiBaseUrl:l="",openaiTimeoutMs:a="",openaiaAtoDowngrade:o,openaiModel3MaxTokens:n,openaiModel3MaxTokensRes:d,openaiModel3MaxTokens16k:s,openaiModel3MaxTokens16kRes:p,openaiModel4MaxTokens:i,openaiModel4MaxTokensRes:t,openaiModel4MaxTokens32k:u,openaiModel4MaxTokens32kRes:M}=e.data;Object.assign(x,{openaiBaseUrl:l,openaiTimeoutMs:a,openaiaAtoDowngrade:Number(o),openaiModel3MaxTokens:n,openaiModel3MaxTokensRes:d,openaiModel3MaxTokens16k:s,openaiModel3MaxTokens16kRes:p,openaiModel4MaxTokens:i,openaiModel4MaxTokensRes:t,openaiModel4MaxTokens32k:u,openaiModel4MaxTokens32kRes:M})}function b(){var e;null==(e=c.value)||e.validate((async e=>{if(e){try{await k.setConfig({settings:(l=x,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),r.success("变更配置信息成功")}catch(a){}_()}else r.error("请填写完整信息");var l}))}return n((()=>{_()})),(l,a)=>{const o=d("el-alert"),n=e,k=d("el-button"),r=d("el-input"),_=d("el-form-item"),g=d("el-col"),V=d("el-row"),h=d("el-divider"),R=d("el-switch"),w=d("el-tooltip"),U=d("el-form"),y=d("el-card");return s(),p("div",null,[i(n,{bottomPadding:"20px"},{default:t((()=>[i(o,{closable:!1,"show-icon":"",title:"openai全局配置说明",description:"系统默认的地址是 https://api.openai.com 、如果你是国内的服务器可能无法访问、您可以使用自己的代理地址、或者免费的 https://open2.aiproxy.xyz 、此处的配置为全局配置、我们可以对单张key进行单独设置、当我们对key不进行设置的时候将会走此处的设置、如果此处也没有设置、系统将会走系统内置默认配置！",type:"success"})])),_:1}),i(y,{style:{margin:"20px 20px 0 20px"}},{header:t((()=>[u("div",m,[a[12]||(a[12]=u("b",null,"接口请求设置",-1)),i(k,{class:"button",onClick:b},{default:t((()=>a[11]||(a[11]=[M(" 保存设置 ")]))),_:1})])])),default:t((()=>[u("div",f,[i(U,{ref_key:"formRef",ref:c,rules:T.value,model:x,"label-width":"230px"},{default:t((()=>[i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"请求地址",prop:"openaiBaseUrl","label-width":"120px"},{default:t((()=>[i(r,{modelValue:x.openaiBaseUrl,"onUpdate:modelValue":a[0]||(a[0]=e=>x.openaiBaseUrl=e),placeholder:"默认地址: https://api.openai.com",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"超时时间",prop:"openaiTimeoutMs","label-width":"120px"},{default:t((()=>[i(r,{modelValue:x.openaiTimeoutMs,"onUpdate:modelValue":a[1]||(a[1]=e=>x.openaiTimeoutMs=e),placeholder:"openai超时时间设置、默认100s 单位 ms",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(h),a[13]||(a[13]=u("h4",null,"自动降级",-1)),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"是否自动降级",prop:"openaiaAtoDowngrade","label-width":"130"},{default:t((()=>[i(w,{class:"box-item",effect:"dark",content:"开启自动降级后、如果用户没有4的权限、将会自动降级为基础模型、并扣除3的余额！",placement:"right"},{default:t((()=>[i(R,{modelValue:x.openaiaAtoDowngrade,"onUpdate:modelValue":a[2]||(a[2]=e=>x.openaiaAtoDowngrade=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),a[14]||(a[14]=u("h4",null,"基础模型上下文配置",-1)),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"普通基础模型允许最大上下文",prop:"openaiModel3MaxTokens"},{default:t((()=>[i(r,{modelValue:x.openaiModel3MaxTokens,"onUpdate:modelValue":a[3]||(a[3]=e=>x.openaiModel3MaxTokens=e),placeholder:"普通基础模型最大支持4096、默认4096",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"普通基础模型允许最大回复上下文",prop:"openaiModel3MaxTokensRes"},{default:t((()=>[i(r,{modelValue:x.openaiModel3MaxTokensRes,"onUpdate:modelValue":a[4]||(a[4]=e=>x.openaiModel3MaxTokensRes=e),placeholder:"最大回复设置、默认1000、建议不能设置太高！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"16k基础模型允许最大上下文",prop:"openaiModel3MaxTokens16k"},{default:t((()=>[i(r,{modelValue:x.openaiModel3MaxTokens16k,"onUpdate:modelValue":a[5]||(a[5]=e=>x.openaiModel3MaxTokens16k=e),placeholder:"16k基础模型最大支持16384、默认16384",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"16k基础模型允许最大回复上下文",prop:"openaiModel3MaxTokens16kRes"},{default:t((()=>[i(r,{modelValue:x.openaiModel3MaxTokens16kRes,"onUpdate:modelValue":a[6]||(a[6]=e=>x.openaiModel3MaxTokens16kRes=e),placeholder:"16k模型最大回复设置、默认8192",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),a[15]||(a[15]=u("h4",null,"高级模型上下文配置",-1)),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"普通高级模型允许最大上下文",prop:"openaiModel4MaxTokens"},{default:t((()=>[i(r,{modelValue:x.openaiModel4MaxTokens,"onUpdate:modelValue":a[7]||(a[7]=e=>x.openaiModel4MaxTokens=e),placeholder:"高级模型上下文最大支持8192、默认8192",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"普通高级模型允许最大回复上下文",prop:"openaiModel4MaxTokensRes"},{default:t((()=>[i(r,{modelValue:x.openaiModel4MaxTokensRes,"onUpdate:modelValue":a[8]||(a[8]=e=>x.openaiModel4MaxTokensRes=e),placeholder:"高级模型回复设置、默认4000",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"32k高级模型允许最大上下文",prop:"openaiModel4MaxTokens32k"},{default:t((()=>[i(r,{modelValue:x.openaiModel4MaxTokens32k,"onUpdate:modelValue":a[9]||(a[9]=e=>x.openaiModel4MaxTokens32k=e),placeholder:"32k高级模型上下文最大支持32768、默认16384",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(V,null,{default:t((()=>[i(g,{xs:24,md:20,lg:15,xl:12},{default:t((()=>[i(_,{label:"32k高级模型允许最大回复上下文",prop:"openaiModel4MaxTokens32kRes"},{default:t((()=>[i(r,{modelValue:x.openaiModel4MaxTokens32kRes,"onUpdate:modelValue":a[10]||(a[10]=e=>x.openaiModel4MaxTokens32kRes=e),placeholder:"32k高级模型上下文最大回复设置、默认16384",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])])),_:1})])}}});"function"==typeof x&&x(T);export{T as default};