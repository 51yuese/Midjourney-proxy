
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as t,G as l,x as i,j as o,U as s,o as r,c as d,b as n,f as c,g as u,h as p,e as m,w as f,J as g,t as y,P as x,y as b,p as v,k as h,_ as w,q as _}from"../main-5b9099dc.js";import{u as F}from"../utcformatTime/utcformatTime.f6db2c52.js";import{T as k,A as z}from"../aiMusic/aiMusic.7858773e.js";const C={class:"search_condition"},N={style:{display:"flex","align-items":"center"}},V=(e=>(v("data-v-88615fe2"),e=e(),h(),e))((()=>n("div",{class:"search_title"},"搜索关键字",-1))),j={style:{"margin-top":"22px","margin-left":"12px"}},T={style:{"margin-top":"22px"}},U={style:{"margin-top":"12px"}},A={key:0},M={key:1},B={key:2},P={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},Y={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},D={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},E=e({__name:"style",setup(e){const v=a();t();const h=t(0);t(!1);const w=t(!1),_=t(!1),E=l({id:0,ids:[],dictType:"music-style",dictName:""}),I=l({dictType:"music-style",dictName:"",page:1,size:15}),q=t([]);async function R(){try{w.value=!0;const e=await z.page(I),{rows:a,count:t}=e.data;h.value=t,w.value=!1,q.value=a}catch(e){w.value=!1}}function S(e){I.dictName="",R()}const G=l({dictName:[{required:!0,message:"名称不能为空",trigger:"blur"}]});function J(e){_.value=!0,E.id=e.id,E.ids=[],E.dictName=e.dictName,E.dictValue=e.dictValue}async function H(){if(0==v.isUserModifyPermissions())return x.error("非超级管理员无权限操作！");(await z.save(E)).data&&x({type:"success",message:"操作成功！"}),_.value=!1,R()}return i((()=>R())),(e,a)=>{const t=o("el-input"),l=o("el-button"),i=o("RefreshRight"),K=o("el-icon"),L=o("el-table-column"),O=o("el-popconfirm"),Q=o("el-table"),W=o("el-pagination"),X=o("el-row"),Z=b,$=o("el-form-item"),ee=o("el-form"),ae=o("el-dialog"),te=s("loading");return r(),d("div",null,[n("div",C,[n("div",N,[n("div",null,[V,n("div",null,[c(t,{modelValue:I.dictName,"onUpdate:modelValue":a[0]||(a[0]=e=>I.dictName=e),placeholder:"请输入字典关键字",clearable:"",style:{width:"192px"}},null,8,["modelValue"])])]),n("div",j,[c(l,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:R},{default:u((()=>[p("查询 ")])),_:1})]),n("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:S},[c(K,{color:"#3B82F6",size:"20"},{default:u((()=>[c(i)])),_:1})])]),n("div",T,[c(l,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:a[1]||(a[1]=e=>J(new(m(k))))},{default:u((()=>[p("添加内容 ")])),_:1})])]),n("div",U,[f((r(),g(Q,{border:"",height:"66vh",data:q.value,style:{width:"100%"},size:"large"},{default:u((()=>[c(L,{fixed:"",prop:"id",label:"ID",width:"80"}),c(L,{prop:"dictType",label:"类型",width:"150"},{default:u((e=>["music-style"===e.row.dictType?(r(),d("span",A,"音乐风格")):"music-lyrics"===e.row.dictType?(r(),d("span",M,"音乐歌词")):(r(),d("span",B,"--"))])),_:1}),c(L,{prop:"dictName",label:"名称",width:"150"}),c(L,{prop:"dictValue",label:"内容",align:"center"}),c(L,{prop:"createdAt",label:"创建时间",width:"200",align:"center"},{default:u((e=>[p(y(m(F)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),c(L,{fixed:"right",label:"操作",width:"250",align:"center"},{default:u((e=>[c(l,{link:"",type:"primary",size:"small",onClick:a=>J(e.row)},{default:u((()=>[p(" 编辑 ")])),_:2},1032,["onClick"]),c(O,{title:"确认删除?","confirm-button-text":"确认删除",onConfirm:a=>async function(e){if(0==v.isUserModifyPermissions())return x.error("非超级管理员无权限操作！");E.ids.push(e.id),(await z.delete(E)).data&&x({type:"success",message:"操作成功！"}),R()}(e.row)},{reference:u((()=>[c(l,{link:"",type:"danger"},{default:u((()=>[p(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[te,w.value]]),c(X,{class:"flex justify-end mt-5"},{default:u((()=>[c(W,{class:"mr-5",total:h.value,onSizeChange:R,"page-sizes":[15,30,50,100],onCurrentChange:R,"page-size":I.size,"onUpdate:pageSize":a[2]||(a[2]=e=>I.size=e),"current-page":I.page,"onUpdate:currentPage":a[3]||(a[3]=e=>I.page=e),layout:"total, sizes, prev, pager, next, jumper"},null,8,["total","page-size","current-page"])])),_:1})]),c(ae,{modelValue:_.value,"onUpdate:modelValue":a[7]||(a[7]=e=>_.value=e),width:"650","show-close":!1,"destroy-on-close":""},{header:u((({close:e,titleId:t,titleClass:l})=>[n("div",P,[n("div",null,y(E.id?"编辑内容":"新增内容"),1),n("div",{onClick:a[4]||(a[4]=e=>_.value=!1),style:{cursor:"pointer"}},[c(K,null,{default:u((()=>[c(Z,{name:"close"})])),_:1})])])])),default:u((()=>[n("div",Y,[c(ee,{model:E},{default:u((()=>[c($,{label:"名称",rules:G.dictName},{default:u((()=>[c(t,{size:"large",modelValue:E.dictName,"onUpdate:modelValue":a[5]||(a[5]=e=>E.dictName=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["model"])]),n("div",D,[c(l,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[6]||(a[6]=e=>_.value=!1)},{default:u((()=>[p("取消 ")])),_:1}),c(l,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:H},{default:u((()=>[p(" 确定 ")])),_:1})])])),_:1},8,["modelValue"])])}}});"function"==typeof _&&_(E);const I=w(E,[["__scopeId","data-v-88615fe2"]]);export{I as default};
