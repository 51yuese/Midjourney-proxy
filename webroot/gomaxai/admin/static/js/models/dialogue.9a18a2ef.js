
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,C as t,G as o,x as d,j as r,U as i,o as s,c as u,b as n,f as p,g as m,V as c,W as y,e as g,h as f,w as v,J as x,t as b,K as h,O as V,P as k,Z as w,aa as _,y as F,p as U,k as z,_ as C}from"../main-5b9099dc.js";import{h as N,i as A,b as T,Q as j,j as B}from"../index/index.7e2cb35b.js";import{A as q}from"./models.10495bd4.js";const S=e=>(U("data-v-3050c7f5"),e=e(),z(),e),W={class:"dialogue_model_box"},M={style:{"margin-bottom":"32px"}},P={class:"search_condition"},K={style:{display:"flex","align-items":"center"}},E=S((()=>n("div",{class:"search_title"},"模型类型",-1))),I={style:{"margin-left":"12px"}},R=S((()=>n("div",{class:"search_title"},"使用模型",-1))),O={style:{"margin-left":"12px"}},G=S((()=>n("div",{class:"search_title"},"启用状态",-1))),J={style:{"margin-top":"22px","margin-left":"12px"}},Q={style:{"margin-top":"22px"}},Z={style:{"margin-top":"12px"}},$={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},D={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},H={style:{display:"flex","align-items":"center","justify-content":"space-between"}},L={style:{display:"flex","align-items":"center","justify-content":"space-between"}},X={style:{display:"flex","align-items":"center","justify-content":"space-between"}},Y={style:{display:"flex","align-items":"center","justify-content":"space-between"}},ee={style:{"margin-left":"61px",width:"100%",display:"flex","align-items":"center"}},le={style:{display:"flex","align-items":"center"}},ae=S((()=>n("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"启用状态",-1))),te={style:{display:"flex","align-items":"center","margin-left":"20px"}},oe=S((()=>n("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"会员免费",-1))),de={style:{display:"flex","align-items":"center","margin-left":"20px"}},re=S((()=>n("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"上传文档",-1))),ie={style:{display:"flex","align-items":"center","margin-left":"20px"}},se=S((()=>n("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"语音通话",-1))),ue={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},ne=C(e({__name:"dialogue",setup(e){const U=l(),z=a(),C=a([]),S=a(0),ne=a(!1),pe=a(!1),me=a(!1),ce=a(0),ye=t((()=>ce.value?"更新秘钥":"新增秘钥")),ge=t((()=>ce.value?"确认更新":"确认新增")),fe=o({keyType:"",model:"",status:null,modelType:N[0].value,page:1,size:10}),ve=o({proxyUrl:"",key:"",model:"",modelName:"",keyType:1,vipFreeNum:0,displaySort:0,deduct:1,keyWeight:0,description:"",status:!0,canUpload:!1,canAudio:!1,front:!0,modelType:"chat"}),xe=o({keyType:[{required:!0,message:"请选择您的调用模型类型",trigger:"blur"}],vipFreeNum:[{required:!0,message:"请填写会员每日可用的最大次数",trigger:"blur"}],model:[{required:!0,message:"请选择您需要使用的模型",trigger:"blur"}],modelName:[{required:!0,message:"为您的模型取一个名字吧",trigger:"blur"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],keyWeight:[{required:!0,message:"请填写key的权重值",trigger:"blur"}],key:[{required:!0,message:"请填写您的调用模型key",trigger:"blur"}],description:[{required:!0,message:"请填写模型的描述",trigger:"blur"}]});async function be(){try{ne.value=!0;const e=await q.queryModels(fe);ne.value=!1;const{rows:l,count:a}=e.data;S.value=a,C.value=l}catch(e){ne.value=!1}}function he(){fe.page=1,fe.size=10,fe.keyType="",fe.model="",fe.status=null,be()}function Ve(){ve.proxyUrl="",ve.key="",ve.model="",ve.modelName="",ve.status=!0,ve.canUpload=!1,ve.canAudio=!1,ve.front=!0,ve.keyType=1,ve.vipFreeNum=0,ve.displaySort=0,ve.deduct=1,ve.keyWeight=0,ve.modelType="chat",ve.description="",pe.value=!0}function ke(e){ve.vipFreeNum=1==e?-1:0}function we(){z.value.validate((async e=>{if(!e)return;if(0==U.isUserModifyPermissions())return k.error("非超级管理员无权限操作！");if(0==me.value&&ve.vipFreeNum<0)return void k({type:"error",message:"会员每日可用次数不能小于零"});const l=_(ve);delete l.id,ce.value&&(l.id=ce.value);const a=await q.setModels(l);200==a.code?(k({type:"success",message:"操作成功"}),pe.value=!1,be()):k({type:"error",message:a.data})}))}return d((()=>{be()})),(e,l)=>{const a=r("el-alert"),t=r("el-option"),o=r("el-select"),d=r("el-input"),_=r("el-button"),N=r("RefreshRight"),_e=r("el-icon"),Fe=r("el-table-column"),Ue=r("el-tag"),ze=r("el-popconfirm"),Ce=r("el-table"),Ne=r("el-pagination"),Ae=r("el-row"),Te=F,je=r("el-form-item"),Be=r("el-switch"),qe=r("el-form"),Se=r("el-dialog"),We=i("loading");return s(),u("div",W,[n("div",M,[p(a,{closable:!1,"show-icon":"",title:"说明",description:"key启动就会调用，未启动则不会调用，同一个key支持添加到多个模型",type:"warning"})]),n("div",P,[n("div",K,[n("div",null,[E,n("div",null,[p(o,{modelValue:fe.keyType,"onUpdate:modelValue":l[0]||(l[0]=e=>fe.keyType=e),placeholder:"请选择模型类型",style:{width:"150px"}},{default:m((()=>[(s(!0),u(c,null,y(g(A),(e=>(s(),x(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),n("div",I,[R,n("div",null,[p(d,{modelValue:fe.model,"onUpdate:modelValue":l[2]||(l[2]=e=>fe.model=e),style:{"max-width":"600px",width:"150px"},placeholder:"请选择使用模型",class:"input-with-select"},{suffix:m((()=>[p(o,{modelValue:fe.model,"onUpdate:modelValue":l[1]||(l[1]=e=>fe.model=e),placeholder:"Select",style:{width:"30px",border:"none"}},{default:m((()=>[(s(!0),u(c,null,y(g(T),(e=>(s(),x(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])]),n("div",O,[G,n("div",null,[p(o,{modelValue:fe.status,"onUpdate:modelValue":l[3]||(l[3]=e=>fe.status=e),placeholder:"请选择启用状态",style:{width:"120px"}},{default:m((()=>[(s(!0),u(c,null,y(g(j),(e=>(s(),x(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),n("div",J,[p(_,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:be},{default:m((()=>[f("查询 ")])),_:1})]),n("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:he},[p(_e,{color:"#3B82F6",size:"20"},{default:m((()=>[p(N)])),_:1})])]),n("div",Q,[p(_,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:Ve},{default:m((()=>[f("添加key ")])),_:1})])]),n("div",Z,[v((s(),x(Ce,{border:"",data:g(C),style:{"font-size":"13px",width:"100%"},"max-height":"60vh"},{default:m((()=>[p(Fe,{prop:"displaySort",label:"排序id"}),p(Fe,{label:"模型类型"},{default:m((e=>[f(b(g(B)[e.row.keyType]),1)])),_:1}),p(Fe,{prop:"modelName",label:"自定义模型名称"}),p(Fe,{prop:"model",label:"绑定模型"}),p(Fe,{prop:"status",label:"是否启用"},{default:m((e=>[1==e.row.status?(s(),x(Ue,{key:0,type:"primary"},{default:m((()=>[f("启用")])),_:1})):(s(),x(Ue,{key:1,type:"info"},{default:m((()=>[f("禁用")])),_:1}))])),_:1}),p(Fe,{prop:"key",label:"模型key"}),p(Fe,{prop:"proxyUrl",label:"代理地址"},{default:m((e=>[f(b(""==e.row.proxyUrl?"——":e.row.proxyUrl),1)])),_:1}),p(Fe,{prop:"keyWeight",label:"模型权重"}),p(Fe,{label:"操作",fixed:"right",width:"160"},{default:m((e=>[p(_,{style:{border:"none",color:"#3B82F6","font-size":"13px","background-color":"transparent"},onClick:l=>{return a=e.row,ce.value=a.id,a.vipFreeNum,me.value,w((()=>{Object.assign(ve,a)})),void(pe.value=!0);var a}},{default:m((()=>[f("编辑 ")])),_:2},1032,["onClick"]),p(ze,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){if(0==U.isUserModifyPermissions())return k.error("非超级管理员无权限操作！");const{id:l}=e;await q.delModels({id:l}),k({type:"success",message:"操作完成！"}),be()}(e.row)},{reference:m((()=>[p(_,{style:{border:"none",color:"#FF3B30","font-size":"13px","background-color":"transparent"}},{default:m((()=>[f("删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[We,g(ne)]]),p(Ae,{class:"flex justify-end mt-5"},{default:m((()=>[p(Ne,{"current-page":fe.page,"onUpdate:currentPage":l[4]||(l[4]=e=>fe.page=e),"page-size":fe.size,"onUpdate:pageSize":l[5]||(l[5]=e=>fe.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:g(S),onSizeChange:be,onCurrentChange:be},null,8,["current-page","page-size","total"])])),_:1})]),p(Se,{modelValue:g(pe),"onUpdate:modelValue":l[23]||(l[23]=e=>V(pe)?pe.value=e:null),width:"750","show-close":!1,"destroy-on-close":""},{header:m((({close:e,titleId:a,titleClass:t})=>[n("div",$,[n("div",null,b(ye.value),1),n("div",{onClick:l[6]||(l[6]=e=>pe.value=!1),style:{cursor:"pointer"}},[p(_e,null,{default:m((()=>[p(Te,{name:"close"})])),_:1})])])])),default:m((()=>[n("div",D,[p(qe,{ref_key:"addModelKeyFormRef",ref:z,rules:xe,model:ve,"label-width":"auto",style:{"max-width":"750px"}},{default:m((()=>[n("div",H,[p(je,{label:"自定义模型名称",prop:"modelName"},{default:m((()=>[p(d,{modelValue:ve.modelName,"onUpdate:modelValue":l[7]||(l[7]=e=>ve.modelName=e),size:"large",style:{width:"200px"},placeholder:"请填写模型名称"},null,8,["modelValue"])])),_:1}),p(je,{label:"单次消耗积分",prop:"deduct"},{default:m((()=>[p(d,{modelValue:ve.deduct,"onUpdate:modelValue":l[8]||(l[8]=e=>ve.deduct=e),size:"large",style:{width:"200px"},placeholder:"请填写单次消耗的积分量",type:"number"},null,8,["modelValue"])])),_:1})]),n("div",L,[p(je,{label:"使用模型",prop:"model"},{default:m((()=>[p(d,{size:"large",modelValue:ve.model,"onUpdate:modelValue":l[10]||(l[10]=e=>ve.model=e),style:{width:"200px"},placeholder:"请选择使用模型",class:"input-with-select_dialog"},{suffix:m((()=>[p(o,{modelValue:ve.model,"onUpdate:modelValue":l[9]||(l[9]=e=>ve.model=e),style:{width:"30px",border:"none"}},{default:m((()=>[(s(!0),u(c,null,y(g(T),(e=>(s(),x(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),p(je,{label:"模型显示排序"},{default:m((()=>[p(d,{modelValue:ve.displaySort,"onUpdate:modelValue":l[11]||(l[11]=e=>ve.displaySort=e),size:"large",style:{width:"200px"},type:"number",placeholder:"请填写模型的排序"},null,8,["modelValue"])])),_:1})]),n("div",X,[p(je,{label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[p(d,{modelValue:ve.keyWeight,"onUpdate:modelValue":l[12]||(l[12]=e=>ve.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1}),p(je,{label:"指定代理地址"},{default:m((()=>[p(d,{modelValue:ve.proxyUrl,"onUpdate:modelValue":l[13]||(l[13]=e=>ve.proxyUrl=e),size:"large",style:{width:"200px"},placeholder:"请填写模型代理地址"},null,8,["modelValue"])])),_:1})]),n("div",Y,[p(je,{label:"模型类型选择",prop:"keyType"},{default:m((()=>[p(o,{modelValue:ve.keyType,"onUpdate:modelValue":l[14]||(l[14]=e=>ve.keyType=e),size:"large",style:{width:"200px"},placeholder:"请选择模型的类型"},{default:m((()=>[(s(!0),u(c,null,y(g(A),(e=>(s(),x(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),1!=g(me)?(s(),x(je,{key:0,label:"会员每日可用次数",prop:"vipFreeNum"},{default:m((()=>[p(d,{modelValue:ve.vipFreeNum,"onUpdate:modelValue":l[15]||(l[15]=e=>ve.vipFreeNum=e),size:"large",style:{width:"200px"},placeholder:"请填写会员单日可用的次数",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0)]),p(je,{label:"API Key",prop:"key"},{default:m((()=>[p(d,{modelValue:ve.key,"onUpdate:modelValue":l[16]||(l[16]=e=>ve.key=e),size:"large",placeholder:"请填写模型Key l clientld l Appld"},null,8,["modelValue"])])),_:1}),p(je,{label:"模型描述",prop:"description"},{default:m((()=>[p(d,{modelValue:ve.description,"onUpdate:modelValue":l[17]||(l[17]=e=>ve.description=e),size:"large",placeholder:"请填写模型的描述"},null,8,["modelValue"])])),_:1}),p(je,null,{default:m((()=>[n("div",ee,[n("div",le,[ae,n("div",null,[p(Be,{modelValue:ve.status,"onUpdate:modelValue":l[18]||(l[18]=e=>ve.status=e)},null,8,["modelValue"])])]),n("div",te,[oe,n("div",null,[p(Be,{modelValue:g(me),"onUpdate:modelValue":l[19]||(l[19]=e=>V(me)?me.value=e:null),onChange:ke},null,8,["modelValue"])])]),n("div",de,[re,n("div",null,[p(Be,{modelValue:ve.canUpload,"onUpdate:modelValue":l[20]||(l[20]=e=>ve.canUpload=e)},null,8,["modelValue"])])]),n("div",ie,[se,n("div",null,[p(Be,{modelValue:ve.canAudio,"onUpdate:modelValue":l[21]||(l[21]=e=>ve.canAudio=e)},null,8,["modelValue"])])])])])),_:1})])),_:1},8,["rules","model"])]),n("div",ue,[p(_,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[22]||(l[22]=e=>pe.value=!1)},{default:m((()=>[f("取消 ")])),_:1}),p(_,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:we},{default:m((()=>[f(b(ge.value),1)])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-3050c7f5"]]);export{ne as default};
