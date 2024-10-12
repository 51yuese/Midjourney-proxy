
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as e}from"../config/config.e980ec46.js";import{d as l,u as r,r as a,G as i,x as s,j as t,o as m,c as u,b as g,f as d,H as o,g as c,K as p,h as f,P as n,_ as E,q as V}from"../main-5b9099dc.js";const y={class:"email_box"},x={class:"disposition_main"},_={class:"type_title_list"},T={style:{"margin-top":"16px"}},b={key:0},F={key:1},v={key:2},S={style:{"margin-top":"16px"}},U=l({__name:"email",setup(l){const E=r(),V=a(0),U=i({emailRegisterStatus:"",registerBaseUrl:"",registerVerifyEmailTitle:"",registerVerifyEmailDesc:"",registerVerifyEmailFrom:"",registerVerifyExpir:"",registerSuccessEmailTitle:"",registerSuccessEmailTeamName:"",registerSuccessEmaileAppend:"",registerFailEmailTitle:"",registerFailEmailTeamName:""}),A=a({registerBaseUrl:[{required:!0,trigger:"blur",message:"请填写注册后端服务基础地址！"}],registerVerifyEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱标题"}],registerVerifyEmailFrom:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱来源团队"}],registerVerifyEmailDesc:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱正文内容"}],registerVerifyExpir:[{required:!0,trigger:"blur",message:"请填写注册验证码的过期时间"}],registerSuccessEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册成功页的标题"}],registerSuccessEmailTeamName:[{required:!0,trigger:"blur",message:"请填写注册成功页的团队名称"}],registerSuccessEmaileAppend:[{required:!0,trigger:"blur",message:"请填写注册成功页的正文追加内容"}],registerFailEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册失败页的标题名称"}],registerFailEmailTeamName:[{required:!0,trigger:"blur",message:"请填写注册失败页的团队名称"}]}),h=a();async function N(){const l=await e.queryConfig({keys:["registerBaseUrl","registerVerifyEmailTitle","registerVerifyEmailFrom","registerVerifyEmailDesc","registerVerifyExpir","registerSuccessEmailTitle","registerSuccessEmailTeamName","registerSuccessEmaileAppend","registerFailEmailTitle","registerFailEmailTeamName","emailRegisterStatus"]});Object.assign(U,l.data)}function q(){var l;null==(l=h.value)||l.validate((async l=>{if(l){if(0==E.isUserModifyPermissions())return n.error("非超级管理员无权限操作！");var r={};0==V.value?(r.registerBaseUrl=U.registerBaseUrl,r.registerVerifyEmailTitle=U.registerVerifyEmailTitle,r.registerVerifyEmailFrom=U.registerVerifyEmailFrom,r.registerVerifyExpir=U.registerVerifyExpir,r.registerVerifyEmailDesc=U.registerVerifyEmailDesc):1==V.value?(r.registerSuccessEmailTitle=U.registerSuccessEmailTitle,r.registerSuccessEmailTeamName=U.registerSuccessEmailTeamName,r.registerSuccessEmaileAppend=U.registerSuccessEmaileAppend):2==V.value&&(r.registerFailEmailTitle=U.registerFailEmailTitle,r.registerFailEmailTeamName=U.registerFailEmailTeamName);try{await e.setConfig({settings:(a=r,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),n.success("变更配置信息成功")}catch(i){}N()}else n.error("请填写完整信息");var a}))}function z(e){V.value=e}return s((()=>{N()})),(e,l)=>{const r=t("el-alert"),a=t("el-input"),i=t("el-form-item"),s=t("el-col"),n=t("el-row"),E=t("el-form"),N=t("el-button");return m(),u("div",y,[g("div",null,[d(r,{closable:!1,"show-icon":"",title:"邮件设置说明",description:"这里的邮件设置是作用于邮箱绑定发送的验证邮件、您需要先在服务的.env文件中配置邮件服务信息。",type:"warning"})]),g("div",x,[g("div",_,[g("div",{class:o(0==V.value?"type_title":"def_type_title"),onClick:l[0]||(l[0]=e=>z(0))},"验证邮件基础配置",2),g("div",{class:o(1==V.value?"type_title":"def_type_title"),onClick:l[1]||(l[1]=e=>z(1))},"验证成功页面基础配置",2),g("div",{class:o(2==V.value?"type_title":"def_type_title"),onClick:l[2]||(l[2]=e=>z(2))},"验证失败页面基础配置",2)]),g("div",T,[d(E,{"label-position":"top",ref_key:"formRef",ref:h,rules:A.value,model:U},{default:c((()=>[0==V.value?(m(),u("div",b,[d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"后端服务BASE_URL",prop:"registerBaseUrl"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerBaseUrl,"onUpdate:modelValue":l[3]||(l[3]=e=>U.registerBaseUrl=e),placeholder:"示例地址: http://ai.xxxx.com 后端服务地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"注册验证码下发邮件标题",prop:"registerVerifyEmailTitle"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerVerifyEmailTitle,"onUpdate:modelValue":l[4]||(l[4]=e=>U.registerVerifyEmailTitle=e),placeholder:"默认标题: GoMaxAi团队验证码",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"注册验证码下发邮件来源",prop:"registerVerifyEmailFrom"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerVerifyEmailFrom,"onUpdate:modelValue":l[5]||(l[5]=e=>U.registerVerifyEmailFrom=e),placeholder:"邮件尾部来源 From: (默认： GoMaxAiTeam)",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"注册账号验证码有效时间",prop:"registerVerifyExpir"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerVerifyExpir,"onUpdate:modelValue":l[6]||(l[6]=e=>U.registerVerifyExpir=e),modelModifiers:{number:!0},placeholder:"注册验证码的有效时间（默认 30 * 60 = 30分钟）",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"注册时下发邮件详细内容",prop:"registerVerifyEmailDesc"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerVerifyEmailDesc,"onUpdate:modelValue":l[7]||(l[7]=e=>U.registerVerifyEmailDesc=e),type:"textarea",rows:3,placeholder:"默认内容(欢迎使用GoMaxAiTeam团队AI团队的产品服务,请在三十分钟内完成你的账号绑定,点击以下按钮绑定您的账号) | 发送的邮件内容、会追加一个绑定按钮、详细内容请查看文档。    ",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):p("",!0),1==V.value?(m(),u("div",F,[d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"验证成功通知页标题内容",prop:"registerSuccessEmailTitle"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerSuccessEmailTitle,"onUpdate:modelValue":l[8]||(l[8]=e=>U.registerSuccessEmailTitle=e),placeholder:"默认标题: GoMaxAiTeam团队账户绑定成功",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"验证成功通知页团队名称",prop:"registerSuccessEmailTeamName"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerSuccessEmailTeamName,"onUpdate:modelValue":l[9]||(l[9]=e=>U.registerSuccessEmailTeamName=e),placeholder:"邮件尾部来源 From: (默认： GoMaxAiTeam)",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"通知页邮件详情追加内容",prop:"registerSuccessEmaileAppend"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerSuccessEmaileAppend,"onUpdate:modelValue":l[10]||(l[10]=e=>U.registerSuccessEmaileAppend=e),type:"textarea",rows:3,placeholder:"默认内容(亲爱的{{ username }},欢迎加入{{ xx }}团队,您是尊贵的{{ 000x }}号用户，你的账号[username] | [email] 已经绑定成功)、此处填写内容将追加至默认内容后方。",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):p("",!0),2==V.value?(m(),u("div",v,[d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"注册失败通知页标题内容",prop:"registerFailEmailTitle"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerFailEmailTitle,"onUpdate:modelValue":l[11]||(l[11]=e=>U.registerFailEmailTitle=e),placeholder:"默认标题: GoMaxAiTeam团队账户绑定失败",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(n,null,{default:c((()=>[d(s,{xs:24,md:20,lg:15,xl:8},{default:c((()=>[d(i,{label:"注册失败通知页团队名称",prop:"registerFailEmailTeamName"},{default:c((()=>[d(a,{size:"large",modelValue:U.registerFailEmailTeamName,"onUpdate:modelValue":l[12]||(l[12]=e=>U.registerFailEmailTeamName=e),placeholder:"邮件尾部来源 From: (默认： GoMaxAiTeam)",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):p("",!0)])),_:1},8,["rules","model"])]),g("div",S,[d(N,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:q},{default:c((()=>[f("保存设置")])),_:1})])])])}}});"function"==typeof V&&V(U);const A=E(U,[["__scopeId","data-v-8cef4269"]]);export{A as default};
