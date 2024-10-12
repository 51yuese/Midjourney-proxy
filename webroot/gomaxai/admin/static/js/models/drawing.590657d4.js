
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,C as t,G as o,x as r,j as d,V as i,o as s,c as u,b as p,f as n,g as m,W as y,X as c,e as g,h as f,w as b,J as v,t as x,K as h,O as k,P as w,$ as _,ab as F,y as V,p as U,k as z,_ as T}from"../main-2d3d97e8.js";import{h as C,Q as N,b as W}from"../index/index.21f4f4e7.js";import{A as j}from"./models.6bfff1b8.js";import{u as A}from"../utcformatTime/utcformatTime.f6db2c52.js";const S=e=>(U("data-v-a9b4b1e7"),e=e(),z(),e),q={class:"dialogue_model_box"},B={style:{"margin-bottom":"32px"}},M={class:"search_condition"},D={style:{display:"flex","align-items":"center"}},K=S((()=>p("div",{class:"search_title"},"启用状态",-1))),P={style:{"margin-top":"22px","margin-left":"12px"}},Y={style:{"margin-top":"22px"}},E={style:{"margin-top":"12px"}},I={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},R={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},L={style:{display:"flex","align-items":"center","justify-content":"space-between"}},O={style:{display:"flex","align-items":"center","justify-content":"space-between"}},G={style:{display:"flex","align-items":"center","justify-content":"space-between"}},J={style:{"margin-left":"61px",width:"100%",display:"flex","align-items":"center"}},Q={style:{display:"flex","align-items":"center"}},X=S((()=>p("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"启用状态",-1))),$={style:{display:"flex","align-items":"center","margin-left":"20px"}},H=S((()=>p("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"会员免费",-1))),Z={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},ee=T(e({__name:"drawing",setup(e){const U=l(),z=a(),T=a([]),S=a(0),ee=a(!1),le=a(!1),ae=a(!1),te=a(0),oe=t((()=>te.value?"更新秘钥":"新增秘钥")),re=t((()=>te.value?"确认更新":"确认新增")),de=o({keyType:"",model:"",status:null,modelType:C[2].value,page:1,size:10}),ie=o({modelName:(new Date).getTime(),model:"model",keyType:1,model:"",deduct:1,displaySort:0,keyWeight:0,vipFreeNum:0,proxyUrl:"",key:"",status:!1,modelType:"draw"}),se=o({keyType:[{required:!0,message:"请选择您的调用模型类型",trigger:"blur"}],vipFreeNum:[{required:!0,message:"请填写会员每日可用的最大次数",trigger:"blur"}],model:[{required:!0,message:"请选择您需要使用的模型",trigger:"blur"}],modelName:[{required:!0,message:"为您的模型取一个名字吧",trigger:"blur"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],keyWeight:[{required:!0,message:"请填写key的权重值",trigger:"blur"}],key:[{required:!0,message:"请填写您的调用模型key",trigger:"blur"}]});async function ue(){try{ee.value=!0;const e=await j.queryModels(de);ee.value=!1;const{rows:l,count:a}=e.data;S.value=a,T.value=l}catch(e){ee.value=!1}}function pe(){de.page=1,de.size=10,de.keyType="",de.model="",de.status=null,ue()}function ne(){te.value=0,ie.modelName=(new Date).getTime(),ie.model="",ie.keyType=1,ie.deduct=1,ie.keyWeight=0,ie.vipFreeNum=0,ie.displaySort=0,ie.proxyUrl="",ie.key="",ie.status=!1,ie.modelType="draw",le.value=!0}function me(e){ie.vipFreeNum=1==e?-1:0}function ye(){z.value.validate((async e=>{if(!e)return;if(0==U.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");if(0==ae.value&&ie.vipFreeNum<0)return void w({type:"error",message:"会员每日可用次数不能小于零"});const l=F(ie);if(delete l.id,te.value&&(l.id=te.value),1===Number(ie.keyType)){const e=F(ie.key);l.key=e.split("\n")}const a=await j.setModels(l);200==a.code?(w({type:"success",message:"操作成功"}),le.value=!1,ue()):w({type:"error",message:a.data})}))}return r((()=>{ue()})),(e,l)=>{const a=d("el-alert"),t=d("el-option"),o=d("el-select"),r=d("el-button"),F=d("RefreshRight"),C=d("el-icon"),ce=d("el-table-column"),ge=d("el-tag"),fe=d("el-popconfirm"),be=d("el-table"),ve=d("el-pagination"),xe=d("el-row"),he=V,ke=d("el-input"),we=d("el-form-item"),_e=d("el-switch"),Fe=d("el-form"),Ve=d("el-dialog"),Ue=i("loading");return s(),u("div",q,[p("div",B,[n(a,{closable:!1,"show-icon":"",title:"说明",description:"这里配置的DALL绘画模型，Key启动就会调用，未启动则不会调用",type:"warning"})]),p("div",M,[p("div",D,[p("div",null,[K,p("div",null,[n(o,{modelValue:de.status,"onUpdate:modelValue":l[0]||(l[0]=e=>de.status=e),placeholder:"请选择启用状态",style:{width:"120px"}},{default:m((()=>[(s(!0),u(y,null,c(g(N),(e=>(s(),v(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),p("div",P,[n(r,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:ue},{default:m((()=>[f("查询 ")])),_:1})]),p("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:pe},[n(C,{color:"#3B82F6",size:"20"},{default:m((()=>[n(F)])),_:1})])]),p("div",Y,[n(r,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:ne},{default:m((()=>[f("添加key ")])),_:1})])]),p("div",E,[b((s(),v(be,{border:"",data:g(T),style:{"font-size":"13px",width:"100%"},"max-height":"65vh"},{default:m((()=>[n(ce,{prop:"displaySort",label:"排序id",width:"100"}),n(ce,{prop:"status",label:"是否启用",width:"100"},{default:m((e=>[1==e.row.status?(s(),v(ge,{key:0,type:"primary"},{default:m((()=>[f("启用")])),_:1})):(s(),v(ge,{key:1,type:"info"},{default:m((()=>[f("禁用")])),_:1}))])),_:1}),n(ce,{prop:"model",label:"使用模型"}),n(ce,{prop:"key",label:"模型key",width:"300"}),n(ce,{prop:"proxyUrl",label:"代理地址",width:"200"},{default:m((e=>[f(x(""==e.row.proxyUrl?"——":e.row.proxyUrl),1)])),_:1}),n(ce,{prop:"keyWeight",label:"模型权重",width:"100"}),n(ce,{prop:"deduct",label:"单次扣除",width:"100"}),n(ce,{prop:"useCount",label:"调用次数"}),n(ce,{prop:"useToken",label:"已使用token"}),n(ce,{prop:"createdAt",label:"添加时间",width:"200"},{default:m((e=>[f(x(g(A)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),n(ce,{label:"操作",fixed:"right",width:"160"},{default:m((e=>[n(r,{style:{border:"none",color:"#3B82F6","font-size":"13px","background-color":"transparent"},onClick:l=>{return a=e.row,te.value=a.id,a.vipFreeNum,ae.value,_((()=>{const{modelName:e,keyType:l,deduct:t,keyWeight:o,vipFreeNum:r,displaySort:d,proxyUrl:i,key:s,status:u,modelType:p}=a;Object.assign(ie,{modelName:e,keyType:l,deduct:t,keyWeight:o,vipFreeNum:r,displaySort:d,proxyUrl:i,key:s,status:u,modelType:p})})),void(le.value=!0);var a}},{default:m((()=>[f("编辑 ")])),_:2},1032,["onClick"]),n(fe,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){if(0==U.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");const{id:l}=e;await j.delModels({id:l}),w({type:"success",message:"操作完成！"}),ue()}(e.row)},{reference:m((()=>[n(r,{style:{border:"none",color:"#FF3B30","font-size":"13px","background-color":"transparent"}},{default:m((()=>[f("删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Ue,g(ee)]]),n(xe,{class:"flex justify-end mt-5"},{default:m((()=>[n(ve,{"current-page":de.page,"onUpdate:currentPage":l[1]||(l[1]=e=>de.page=e),"page-size":de.size,"onUpdate:pageSize":l[2]||(l[2]=e=>de.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:g(S),onSizeChange:ue,onCurrentChange:ue},null,8,["current-page","page-size","total"])])),_:1})]),n(Ve,{modelValue:g(le),"onUpdate:modelValue":l[16]||(l[16]=e=>k(le)?le.value=e:null),width:"750","show-close":!1,"destroy-on-close":""},{header:m((({close:e,titleId:a,titleClass:t})=>[p("div",I,[p("div",null,x(oe.value),1),p("div",{onClick:l[3]||(l[3]=e=>le.value=!1),style:{cursor:"pointer"}},[n(C,null,{default:m((()=>[n(he,{name:"close"})])),_:1})])])])),default:m((()=>[p("div",R,[n(Fe,{ref_key:"addModelKeyFormRef",ref:z,rules:se,model:ie,"label-width":"auto",style:{"max-width":"750px"}},{default:m((()=>[p("div",L,[n(we,{label:"使用模型",prop:"model"},{default:m((()=>[n(ke,{size:"large",modelValue:ie.model,"onUpdate:modelValue":l[5]||(l[5]=e=>ie.model=e),style:{width:"200px"},placeholder:"请选择使用模型",class:"input-with-select_dialog"},{suffix:m((()=>[n(o,{modelValue:ie.model,"onUpdate:modelValue":l[4]||(l[4]=e=>ie.model=e),style:{width:"30px",border:"none"}},{default:m((()=>[(s(!0),u(y,null,c(g(W),(e=>(s(),v(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),n(we,{label:"单次消耗积分",prop:"deduct"},{default:m((()=>[n(ke,{modelValue:ie.deduct,"onUpdate:modelValue":l[6]||(l[6]=e=>ie.deduct=e),size:"large",style:{width:"200px"},placeholder:"请填写单次消耗的积分量",type:"number"},null,8,["modelValue"])])),_:1})]),p("div",O,[1==g(ae)?(s(),v(we,{key:0,label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[n(ke,{modelValue:ie.keyWeight,"onUpdate:modelValue":l[7]||(l[7]=e=>ie.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0),1!=g(ae)?(s(),v(we,{key:1,label:"会员每日可用次数",prop:"vipFreeNum"},{default:m((()=>[n(ke,{modelValue:ie.vipFreeNum,"onUpdate:modelValue":l[8]||(l[8]=e=>ie.vipFreeNum=e),size:"large",style:{width:"200px"},placeholder:"请填写会员单日可用的次数",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0),n(we,{label:"模型显示排序"},{default:m((()=>[n(ke,{modelValue:ie.displaySort,"onUpdate:modelValue":l[9]||(l[9]=e=>ie.displaySort=e),size:"large",style:{width:"200px"},type:"number",placeholder:"请填写模型的排序"},null,8,["modelValue"])])),_:1})]),p("div",G,[1!=g(ae)?(s(),v(we,{key:0,label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[n(ke,{modelValue:ie.keyWeight,"onUpdate:modelValue":l[10]||(l[10]=e=>ie.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0),n(we,{label:"指定代理地址"},{default:m((()=>[n(ke,{modelValue:ie.proxyUrl,"onUpdate:modelValue":l[11]||(l[11]=e=>ie.proxyUrl=e),size:"large",style:{width:"200px"},placeholder:"请填写模型代理地址"},null,8,["modelValue"])])),_:1})]),n(we,{label:"API Key",prop:"key"},{default:m((()=>[n(ke,{modelValue:ie.key,"onUpdate:modelValue":l[12]||(l[12]=e=>ie.key=e),size:"large",placeholder:"请填写模型Key l clientld l Appld"},null,8,["modelValue"])])),_:1}),n(we,null,{default:m((()=>[p("div",J,[p("div",Q,[X,p("div",null,[n(_e,{modelValue:ie.status,"onUpdate:modelValue":l[13]||(l[13]=e=>ie.status=e)},null,8,["modelValue"])])]),p("div",$,[H,p("div",null,[n(_e,{modelValue:g(ae),"onUpdate:modelValue":l[14]||(l[14]=e=>k(ae)?ae.value=e:null),onChange:me},null,8,["modelValue"])])])])])),_:1})])),_:1},8,["rules","model"])]),p("div",Z,[n(r,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[15]||(l[15]=e=>le.value=!1)},{default:m((()=>[f("取消 ")])),_:1}),n(r,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:ye},{default:m((()=>[f(x(re.value),1)])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-a9b4b1e7"]]);export{ee as default};
