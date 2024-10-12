
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,C as t,G as o,x as r,j as d,V as i,o as s,c as u,b as p,f as n,g as m,W as y,X as c,e as g,h as f,w as b,J as v,t as x,K as h,O as k,P as w,$ as F,ab as _,y as V,p as U,k as z,_ as T}from"../main-2d3d97e8.js";import{h as C,Q as N}from"../index/index.21f4f4e7.js";import{A as W}from"./models.6bfff1b8.js";import{u as j}from"../utcformatTime/utcformatTime.f6db2c52.js";const A=e=>(U("data-v-5cc51e69"),e=e(),z(),e),S={class:"dialogue_model_box"},q={style:{"margin-bottom":"32px"}},B={class:"search_condition"},M={style:{display:"flex","align-items":"center"}},P=A((()=>p("div",{class:"search_title"},"启用状态",-1))),K={style:{"margin-top":"22px","margin-left":"12px"}},Y={style:{"margin-top":"22px"}},D={style:{"margin-top":"12px"}},E={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},I={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},R={style:{display:"flex","align-items":"center","justify-content":"space-between"}},G={style:{display:"flex","align-items":"center","justify-content":"space-between"}},O={style:{"margin-left":"61px",width:"100%",display:"flex","align-items":"center"}},J={style:{display:"flex","align-items":"center"}},Q=A((()=>p("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"启用状态",-1))),X={style:{display:"flex","align-items":"center","margin-left":"20px"}},$=A((()=>p("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"会员免费",-1))),H={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},L=T(e({__name:"apply",setup(e){const U=l(),z=a(),T=a([]),A=a(0),L=a(!1),Z=a(!1),ee=a(!1),le=a(0),ae=t((()=>le.value?"更新秘钥":"新增秘钥")),te=t((()=>le.value?"确认更新":"确认新增")),oe=o({status:null,modelType:C[1].value,page:1,size:10}),re=o({modelName:(new Date).getTime(),model:"model",keyType:1,deduct:1,displaySort:0,keyWeight:0,vipFreeNum:0,proxyUrl:"",key:"",status:!1,modelType:"app"}),de=o({keyType:[{required:!0,message:"请选择您的调用模型类型",trigger:"blur"}],vipFreeNum:[{required:!0,message:"请填写会员每日可用的最大次数",trigger:"blur"}],model:[{required:!0,message:"请选择您需要使用的模型",trigger:"blur"}],modelName:[{required:!0,message:"为您的模型取一个名字吧",trigger:"blur"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],keyWeight:[{required:!0,message:"请填写key的权重值",trigger:"blur"}],key:[{required:!0,message:"请填写您的调用模型key",trigger:"blur"}]});async function ie(){try{L.value=!0;const e=await W.queryModels(oe);L.value=!1;const{rows:l,count:a}=e.data;A.value=a,T.value=l}catch(e){L.value=!1}}function se(){oe.page=1,oe.size=10,oe.keyType="",oe.model="",oe.status=null,ie()}function ue(){le.value=0,re.modelName=(new Date).getTime(),re.model="model",re.keyType=1,re.deduct=1,re.keyWeight=0,re.vipFreeNum=0,re.displaySort=0,re.proxyUrl="",re.key="",re.status=!1,re.modelType="app",ee.value=!0}function pe(e){re.vipFreeNum=1==e?-1:0}function ne(){z.value.validate((async e=>{if(!e)return;if(0==U.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");if(0==Z.value&&re.vipFreeNum<0)return void w({type:"error",message:"会员每日可用次数不能小于零"});const l=_(re);if(delete l.id,le.value&&(l.id=le.value),1===Number(re.keyType)){const e=_(re.key);l.key=e.split("\n")}const a=await W.setModels(l);200==a.code?(w({type:"success",message:"操作成功"}),ee.value=!1,ie()):w({type:"error",message:a.data})}))}return r((()=>{ie()})),(e,l)=>{const a=d("el-alert"),t=d("el-option"),o=d("el-select"),r=d("el-button"),_=d("RefreshRight"),C=d("el-icon"),me=d("el-table-column"),ye=d("el-tag"),ce=d("el-popconfirm"),ge=d("el-table"),fe=d("el-pagination"),be=d("el-row"),ve=V,xe=d("el-input"),he=d("el-form-item"),ke=d("el-switch"),we=d("el-form"),Fe=d("el-dialog"),_e=i("loading");return s(),u("div",S,[p("div",q,[n(a,{closable:!1,"show-icon":"",title:"说明",description:"应用分为普通应用和GPTS应用，均调用当前界面配置的KEY",type:"warning"})]),p("div",B,[p("div",M,[p("div",null,[P,p("div",null,[n(o,{modelValue:oe.status,"onUpdate:modelValue":l[0]||(l[0]=e=>oe.status=e),placeholder:"请选择启用状态",style:{width:"120px"}},{default:m((()=>[(s(!0),u(y,null,c(g(N),(e=>(s(),v(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),p("div",K,[n(r,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:ie},{default:m((()=>[f("查询 ")])),_:1})]),p("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:se},[n(C,{color:"#3B82F6",size:"20"},{default:m((()=>[n(_)])),_:1})])]),p("div",Y,[n(r,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:ue},{default:m((()=>[f("添加key ")])),_:1})])]),p("div",D,[b((s(),v(ge,{border:"",data:g(T),style:{"font-size":"13px",width:"100%"},"max-height":"65vh"},{default:m((()=>[n(me,{prop:"displaySort",label:"排序id",width:"100"}),n(me,{prop:"status",label:"是否启用",width:"100"},{default:m((e=>[1==e.row.status?(s(),v(ye,{key:0,type:"primary"},{default:m((()=>[f("启用")])),_:1})):(s(),v(ye,{key:1,type:"info"},{default:m((()=>[f("禁用")])),_:1}))])),_:1}),n(me,{prop:"key",label:"模型key",width:"300"}),n(me,{prop:"proxyUrl",label:"代理地址",width:"200"},{default:m((e=>[f(x(""==e.row.proxyUrl?"——":e.row.proxyUrl),1)])),_:1}),n(me,{prop:"keyWeight",label:"模型权重",width:"100"}),n(me,{prop:"deduct",label:"单次扣除",width:"100"}),n(me,{prop:"useCount",label:"调用次数"}),n(me,{prop:"useToken",label:"已使用token"}),n(me,{prop:"createdAt",label:"添加时间",width:"200"},{default:m((e=>[f(x(g(j)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),n(me,{label:"操作",fixed:"right",width:"160"},{default:m((e=>[n(r,{style:{border:"none",color:"#3B82F6","font-size":"13px","background-color":"transparent"},onClick:l=>{return a=e.row,le.value=a.id,a.vipFreeNum,Z.value,F((()=>{const{modelName:e,model:l,keyType:t,deduct:o,keyWeight:r,vipFreeNum:d,displaySort:i,proxyUrl:s,key:u,status:p,modelType:n}=a;Object.assign(re,{modelName:e,model:l,keyType:t,deduct:o,keyWeight:r,vipFreeNum:d,displaySort:i,proxyUrl:s,key:u,status:p,modelType:n})})),void(ee.value=!0);var a}},{default:m((()=>[f("编辑")])),_:2},1032,["onClick"]),n(ce,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){if(0==U.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");const{id:l}=e;await W.delModels({id:l}),w({type:"success",message:"操作完成！"}),ie()}(e.row)},{reference:m((()=>[n(r,{style:{border:"none",color:"#FF3B30","font-size":"13px","background-color":"transparent"}},{default:m((()=>[f("删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[_e,g(L)]]),n(be,{class:"flex justify-end mt-5"},{default:m((()=>[n(fe,{"current-page":oe.page,"onUpdate:currentPage":l[1]||(l[1]=e=>oe.page=e),"page-size":oe.size,"onUpdate:pageSize":l[2]||(l[2]=e=>oe.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:g(A),onSizeChange:ie,onCurrentChange:ie},null,8,["current-page","page-size","total"])])),_:1})]),n(Fe,{modelValue:g(ee),"onUpdate:modelValue":l[14]||(l[14]=e=>k(ee)?ee.value=e:null),width:"750","show-close":!1,"destroy-on-close":""},{header:m((({close:e,titleId:a,titleClass:t})=>[p("div",E,[p("div",null,x(ae.value),1),p("div",{onClick:l[3]||(l[3]=e=>ee.value=!1),style:{cursor:"pointer"}},[n(C,null,{default:m((()=>[n(ve,{name:"close"})])),_:1})])])])),default:m((()=>[p("div",I,[n(we,{ref_key:"addModelKeyFormRef",ref:z,rules:de,model:re,"label-width":"auto",style:{"max-width":"750px"}},{default:m((()=>[p("div",R,[n(he,{label:"单次消耗积分",prop:"deduct"},{default:m((()=>[n(xe,{modelValue:re.deduct,"onUpdate:modelValue":l[4]||(l[4]=e=>re.deduct=e),size:"large",style:{width:"200px"},placeholder:"请填写单次消耗的积分量",type:"number"},null,8,["modelValue"])])),_:1}),n(he,{label:"指定代理地址"},{default:m((()=>[n(xe,{modelValue:re.proxyUrl,"onUpdate:modelValue":l[5]||(l[5]=e=>re.proxyUrl=e),size:"large",style:{width:"200px"},placeholder:"请填写模型代理地址"},null,8,["modelValue"])])),_:1})]),p("div",G,[1==g(Z)?(s(),v(he,{key:0,label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[n(xe,{modelValue:re.keyWeight,"onUpdate:modelValue":l[6]||(l[6]=e=>re.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0),1!=g(Z)?(s(),v(he,{key:1,label:"会员每日可用次数",prop:"vipFreeNum"},{default:m((()=>[n(xe,{modelValue:re.vipFreeNum,"onUpdate:modelValue":l[7]||(l[7]=e=>re.vipFreeNum=e),size:"large",style:{width:"200px"},placeholder:"请填写会员单日可用的次数",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0),n(he,{label:"模型显示排序"},{default:m((()=>[n(xe,{modelValue:re.displaySort,"onUpdate:modelValue":l[8]||(l[8]=e=>re.displaySort=e),size:"large",style:{width:"200px"},type:"number",placeholder:"请填写模型的排序"},null,8,["modelValue"])])),_:1})]),1!=g(Z)?(s(),v(he,{key:0,label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[n(xe,{modelValue:re.keyWeight,"onUpdate:modelValue":l[9]||(l[9]=e=>re.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0),n(he,{label:"API Key",prop:"key"},{default:m((()=>[n(xe,{modelValue:re.key,"onUpdate:modelValue":l[10]||(l[10]=e=>re.key=e),size:"large",placeholder:"请填写模型Key l clientld l Appld"},null,8,["modelValue"])])),_:1}),n(he,null,{default:m((()=>[p("div",O,[p("div",J,[Q,p("div",null,[n(ke,{modelValue:re.status,"onUpdate:modelValue":l[11]||(l[11]=e=>re.status=e)},null,8,["modelValue"])])]),p("div",X,[$,p("div",null,[n(ke,{modelValue:g(Z),"onUpdate:modelValue":l[12]||(l[12]=e=>k(Z)?Z.value=e:null),onChange:pe},null,8,["modelValue"])])])])])),_:1})])),_:1},8,["rules","model"])]),p("div",H,[n(r,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[13]||(l[13]=e=>ee.value=!1)},{default:m((()=>[f("取消 ")])),_:1}),n(r,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:ne},{default:m((()=>[f(x(te.value),1)])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-5cc51e69"]]);export{L as default};
