
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,F as a,r as l,E as o,q as t,j as d,V as r,o as n,c as i,b as s,f as p,e as u,g as c,h as m,W as g,w as f,I as x,t as b,N as y,O as v,s as h,_}from"../main-c47e4581.js";import{a as w}from"./access.ae69f1ea.js";const F={class:"search_add_card"},k={style:{display:"flex","align-items":"center"}},V={style:{"margin-left":"10px"}},z={style:{"margin-top":"12px"}},C={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},S={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)","overflow-y":"scroll","overflow-x":"hidden"}},j={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},A=_(e({__name:"saas-manage",setup(e){const _=a(!1),A=a(!1),U=a(0),B=a("添加代理商"),E=l([]),I=l({}),P=o({page:1,size:10,keyword:""});function q(){P.page=1,P.keyword="",N()}function D(){I.value={},A.value=!0,B.value="添加代理商"}async function N(){const{data:e}=await w.getSaasPage(P);E.value=e.rows}return t((()=>{N()})),(e,a)=>{const l=d("el-input"),o=d("el-button"),t=d("el-icon"),O=d("el-table-column"),R=d("el-link"),W=d("el-popconfirm"),G=d("el-space"),H=d("el-table"),J=d("el-pagination"),K=d("el-row"),L=h,M=d("el-form-item"),Q=d("el-form"),T=d("el-dialog"),X=r("loading");return n(),i("div",null,[s("div",F,[s("div",k,[s("div",null,[a[10]||(a[10]=s("div",{class:"condition_name"}," 代理商搜索 ",-1)),p(l,{modelValue:u(P).keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>u(P).keyword=e),placeholder:"代理商名称或代理商域名",clearable:""},null,8,["modelValue"])]),s("div",V,[p(o,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",height:"32px",background:"#EFF6FF",color:"#60A5FA","border-radius":"8px","margin-top":"25px"},onClick:N},{default:c((()=>a[11]||(a[11]=[m(" 查询 ")]))),_:1})]),s("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:q},[p(t,{color:"#3B82F6",size:"20"},{default:c((()=>[p(u(g))])),_:1})])]),s("div",null,[p(o,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:D},{default:c((()=>a[12]||(a[12]=[m(" 添加代理商 ")]))),_:1})])]),s("div",z,[f((n(),x(H,{border:"",data:u(E),height:"66vh",width:"100%"},{default:c((()=>[p(O,{prop:"id",label:"SaasID"}),p(O,{prop:"name",label:"代理商名"}),p(O,{prop:"domain",label:"绑定域名"}),p(O,{prop:"userCount",label:"用户数"}),p(O,{prop:"createdAt",label:"创建时间"}),p(O,{label:"操作"},{default:c((({row:e})=>[p(G,null,{default:c((()=>[p(R,{type:"primary",underline:!1,onClick:a=>function(e){I.value={id:e.id,name:e.name,domain:e.domain,remark:e.remark},A.value=!0,B.value="编辑代理商"}(e)},{default:c((()=>a[13]||(a[13]=[m(" 编辑 ")]))),_:2},1032,["onClick"]),p(W,{title:"确认删除该SAAS节点？",onConfirm:a=>async function(e){await w.deleteSaas({ids:[e]}),await N()}(e.id)},{reference:c((()=>[p(R,{type:"danger",underline:!1},{default:c((()=>a[14]||(a[14]=[m(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["data"])),[[X,u(_)]]),p(K,{class:"flex justify-end mt-5 pb-5"},{default:c((()=>[p(J,{"current-page":u(P).page,"onUpdate:currentPage":a[1]||(a[1]=e=>u(P).page=e),"page-size":u(P).size,"onUpdate:pageSize":a[2]||(a[2]=e=>u(P).size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:u(U),onSizeChange:N,onCurrentChange:N},null,8,["current-page","page-size","total"])])),_:1})]),p(T,{modelValue:u(A),"onUpdate:modelValue":a[9]||(a[9]=e=>y(A)?A.value=e:null),"show-close":!1,width:"500px"},{header:c((()=>[s("div",C,[s("div",null,b(u(B)),1),s("div",{style:{cursor:"pointer"},onClick:a[3]||(a[3]=e=>A.value=!1)},[p(t,null,{default:c((()=>[p(L,{name:"close"})])),_:1})])])])),default:c((()=>[s("div",S,[p(Q,{model:u(I),"label-width":"120px"},{default:c((()=>[p(M,{label:"代理商名称"},{default:c((()=>[p(l,{modelValue:u(I).name,"onUpdate:modelValue":a[4]||(a[4]=e=>u(I).name=e),placeholder:"代理商名称"},null,8,["modelValue"])])),_:1}),p(M,{label:"分配域名"},{default:c((()=>[p(l,{modelValue:u(I).domain,"onUpdate:modelValue":a[5]||(a[5]=e=>u(I).domain=e),placeholder:"分配域名"},null,8,["modelValue"])])),_:1}),p(M,{label:"备注"},{default:c((()=>[p(l,{modelValue:u(I).remark,"onUpdate:modelValue":a[6]||(a[6]=e=>u(I).remark=e),type:"textarea",placeholder:"备注"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])]),s("div",j,[p(o,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[7]||(a[7]=e=>A.value=!1)},{default:c((()=>a[15]||(a[15]=[m("取消 ")]))),_:1}),p(o,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:a[8]||(a[8]=a=>async function(){await w.saveSaas(I.value),v.success("提交成功！"),A.value=!1,await N()}(e.formRef))},{default:c((()=>a[16]||(a[16]=[m(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-c96713b9"]]);export{A as default};
