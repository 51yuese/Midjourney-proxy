
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.7f2ee6d6.js";import{A as l}from"../chat/chat.6b6e75bd.js";import{u as a}from"../utcformatTime/utcformatTime.f6db2c52.js";import{e as r,W as t,f as o}from"../index/index.7e2cb35b.js";import{d as n,u as i,x as s,r as u,G as d,j as c,U as p,o as f,c as m,b as g,f as w,g as h,V as v,W as y,e as b,h as _,w as I,J as x,t as k,P as z,p as j,k as C,_ as F,q as U}from"../main-5b9099dc.js";const A=e=>(j("data-v-4e892e55"),e=e(),C(),e),P={class:"search_condition"},V={style:{display:"flex","align-items":"center"}},D=A((()=>g("div",{class:"search_title"},"推荐状态",-1))),M={style:{"margin-left":"12px"}},S=A((()=>g("div",{class:"search_title"},"绘制状态",-1))),Y={style:{"margin-top":"22px","margin-left":"12px"}},$={style:{"margin-top":"12px"}},E={key:0},q={key:1},J={key:0},L={key:1},R={key:0},T={key:1},W={key:0},B={key:1},G=n({__name:"draw",setup(n){const j=i();s((()=>{G()}));const C=u(0),F=u(!1),U=d({rec:null,status:null,page:1,size:10}),A=u([]);async function G(){try{F.value=!0;const l=await e.queryAdminDrawList(U),{rows:a,count:r}=l.data;C.value=r,a.forEach((e=>{e.fileInfo=JSON.parse(e.fileInfo),A.value.push(e)})),F.value=!1}catch(l){F.value=!1}}function N(){U.rec=null,U.status=null,G()}return(e,n)=>{const i=c("el-option"),s=c("el-select"),u=c("el-button"),d=c("RefreshRight"),O=c("el-icon"),H=c("el-table-column"),K=c("el-image"),Q=c("el-tag"),X=c("el-popconfirm"),Z=c("el-table"),ee=c("el-pagination"),le=c("el-row"),ae=p("loading");return f(),m("div",null,[g("div",P,[g("div",V,[g("div",null,[D,g("div",null,[w(s,{modelValue:U.rec,"onUpdate:modelValue":n[0]||(n[0]=e=>U.rec=e),placeholder:"请选择推荐状态",clearable:"",style:{width:"192px"}},{default:h((()=>[(f(!0),m(v,null,y(b(r),(e=>(f(),x(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),g("div",M,[S,g("div",null,[w(s,{modelValue:U.status,"onUpdate:modelValue":n[1]||(n[1]=e=>U.status=e),placeholder:"请选择绘制状态",clearable:"",style:{width:"192px"}},{default:h((()=>[(f(!0),m(v,null,y(b(t),(e=>(f(),x(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),g("div",Y,[w(u,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:G},{default:h((()=>[_("查询 ")])),_:1})]),g("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:N},[w(O,{color:"#3B82F6",size:"20"},{default:h((()=>[w(d)])),_:1})])])]),g("div",$,[I((f(),x(Z,{border:"",data:b(A),height:"70vh",style:{width:"100%"}},{default:h((()=>[w(H,{prop:"id",align:"center",label:"ID",width:"70"}),w(H,{prop:"fileInfo.thumbImg",align:"center",label:"绘图结果",width:"120"},{default:h((e=>{var l,a;return[w(K,{style:{height:"80px","border-radius":"8px"},"preview-teleported":"",fit:"contain","preview-src-list":[null==(l=e.row)?void 0:l.imageUrl],src:null==(a=e.row)?void 0:a.imageUrl,lazy:"","hide-on-click-modal":""},null,8,["preview-src-list","src"])]})),_:1}),w(H,{prop:"userInfo.username",align:"center",label:"用户名",width:"120"},{default:h((e=>[null==e.row.userInfo?(f(),m("div",E," -- ")):(f(),m("div",q,k(null==e.row.userInfo.username?"--":e.row.userInfo.username),1))])),_:1}),w(H,{prop:"userInfo.phone",align:"center",label:"手机号",width:"120"},{default:h((e=>[null==e.row.userInfo?(f(),m("div",J," -- ")):(f(),m("div",L,k(null==e.row.userInfo.phone?"--":e.row.userInfo.phone),1))])),_:1}),w(H,{prop:"userInfo.nickname",align:"center",label:"昵称",width:"120"},{default:h((e=>[null==e.row.userInfo?(f(),m("div",R," -- ")):(f(),m("div",T,k(null==e.row.userInfo.nickname?"--":e.row.userInfo.nickname),1))])),_:1}),w(H,{prop:"userInfo.email",label:"邮箱",align:"center"},{default:h((e=>[null==e.row.userInfo?(f(),m("div",W," -- ")):(f(),m("div",B,k(""==e.row.userInfo.email?"--":e.row.userInfo.email),1))])),_:1}),w(H,{prop:"fileInfo.thumbImg",align:"center",label:"推荐状态",width:"90"},{default:h((e=>[w(Q,{type:1==e.row.rec?"success":"warning"},{default:h((()=>[_(k(1==e.row.rec?"已推荐":"未推荐"),1)])),_:2},1032,["type"])])),_:1}),w(H,{prop:"status",align:"center",label:"图片状态",width:"105"},{default:h((e=>[w(Q,{type:100===e.row.status?"success":"primary"},{default:h((()=>[_(k(b(o)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),w(H,{prop:"originPrompt",align:"center",label:"图片描述"},{default:h((e=>[_(k(""==e.row.originPrompt?"--":e.row.originPrompt),1)])),_:1}),w(H,{prop:"fileInfo.thumbImg",align:"center",label:"绘图尺寸",width:"180"},{default:h((e=>{var l,a,r,t,o;return[_(k((null==(l=e.row)?void 0:l.fileInfo)?`${null==(r=null==(a=e.row)?void 0:a.fileInfo)?void 0:r.width}*${null==(o=null==(t=e.row)?void 0:t.fileInfo)?void 0:o.height}`:"---"),1)]})),_:1}),w(H,{prop:"createdAt",label:"提问时间",align:"center",width:"200"},{default:h((e=>[_(k(b(a)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),w(H,{fixed:"right",label:"操作",width:"110",align:"center"},{default:h((e=>[w(X,{title:`确认${1===e.row.rec?"取消推荐":"推荐"}图片吗！`,width:"260","icon-color":"red",onConfirm:a=>async function(e){if(0==j.isUserModifyPermissions())return z.error("非超级管理员无权限操作！");await l.recMjDrawImg({id:e}),z.success("图片推荐成功"),G()}(e.row.id)},{reference:h((()=>[w(u,{link:"",type:"primary",size:"small"},{default:h((()=>[_(" 推荐 ")])),_:1})])),_:2},1032,["title","onConfirm"]),w(X,{title:"`确认删除此条记录么！",width:"260","icon-color":"red",onConfirm:a=>async function(e){if(0==j.isUserModifyPermissions())return z.error("非超级管理员无权限操作！");await l.delChatLog({id:e}),z.success("删除成功"),G()}(e.row.id)},{reference:h((()=>[w(u,{link:"",type:"danger",size:"small"},{default:h((()=>[_(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[ae,b(F)]]),w(le,{class:"flex justify-end mt-5"},{default:h((()=>[w(ee,{"current-page":U.page,"onUpdate:currentPage":n[2]||(n[2]=e=>U.page=e),"page-size":U.size,"onUpdate:pageSize":n[3]||(n[3]=e=>U.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:b(C),onSizeChange:G,onCurrentChange:G},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof U&&U(G);const N=F(G,[["__scopeId","data-v-4e892e55"]]);export{N as default};