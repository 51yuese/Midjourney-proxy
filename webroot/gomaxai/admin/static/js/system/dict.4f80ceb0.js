
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as t,G as l,x as i,j as o,V as d,o as s,c as r,b as n,f as c,g as u,h as p,e as m,w as g,J as f,t as y,P as x,y as b,p as v,k as h,_ as w,q as F}from"../main-043c96ab.js";import{u as _}from"../utcformatTime/utcformatTime.f6db2c52.js";import{T as k,A as z}from"../aiMusic/aiMusic.35c2301d.js";const C={class:"search_condition"},V={style:{display:"flex","align-items":"center"}},N=(e=>(v("data-v-fd6dfaa0"),e=e(),h(),e))((()=>n("div",{class:"search_title"}," 搜索关键字 ",-1))),j={style:{"margin-top":"22px","margin-left":"12px"}},A={style:{"margin-top":"22px"}},T={style:{"margin-top":"12px"}},U={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},B={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},M={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},Y=e({__name:"dict",props:{type:{default:""}},emits:["success"],setup(e,{emit:v}){const h=e,w=v;a(),t();const F=t(0);t(!1);const Y=t(!1),D=t(!1),E=l({id:0,ids:[],dictType:h.type,dictName:""}),q=l({dictType:h.type,dictName:"",page:1,size:15}),I=t([]);async function P(){try{Y.value=!0;const e=await z.page(q),{rows:a,count:t}=e.data;F.value=t,Y.value=!1,I.value=a}catch(e){Y.value=!1}}function R(e){q.dictName="",P()}const S=l({dictName:[{required:!0,message:"名称不能为空",trigger:"blur"}]});function G(e){D.value=!0,E.id=e.id,E.ids=[],E.dictName=e.dictName,E.dictValue=e.dictValue}async function J(){(await z.save(E)).data&&x({type:"success",message:"操作成功！"}),D.value=!1,P(),w("success")}return i((()=>P())),(e,a)=>{const t=o("el-input"),l=o("el-button"),i=o("RefreshRight"),v=o("el-icon"),h=o("el-table-column"),H=o("el-popconfirm"),K=o("el-table"),L=o("el-pagination"),O=o("el-row"),Q=b,W=o("el-form-item"),X=o("el-form"),Z=o("el-dialog"),$=d("loading");return s(),r("div",null,[n("div",C,[n("div",V,[n("div",null,[N,n("div",null,[c(t,{modelValue:q.dictName,"onUpdate:modelValue":a[0]||(a[0]=e=>q.dictName=e),placeholder:"请输入字典关键字",clearable:"",style:{width:"192px"}},null,8,["modelValue"])])]),n("div",j,[c(l,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:P},{default:u((()=>[p(" 查询 ")])),_:1})]),n("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:R},[c(v,{color:"#3B82F6",size:"20"},{default:u((()=>[c(i)])),_:1})])]),n("div",A,[c(l,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:a[1]||(a[1]=e=>G(new(m(k))))},{default:u((()=>[p(" 添加内容 ")])),_:1})])]),n("div",T,[g((s(),f(K,{border:"",height:"66vh",data:I.value,style:{width:"100%"},size:"large"},{default:u((()=>[c(h,{fixed:"",prop:"id",label:"ID",width:"80"}),c(h,{prop:"dictName",label:"名称",width:"150"}),c(h,{prop:"dictValue",label:"内容",align:"center"}),c(h,{prop:"createdAt",label:"创建时间",width:"200",align:"center"},{default:u((e=>[p(y(m(_)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),c(h,{fixed:"right",label:"操作",width:"250",align:"center"},{default:u((e=>[c(l,{link:"",type:"primary",size:"small",onClick:a=>G(e.row)},{default:u((()=>[p(" 编辑 ")])),_:2},1032,["onClick"]),c(H,{title:"确认删除?","confirm-button-text":"确认删除",onConfirm:a=>async function(e){E.ids.push(e.id),(await z.delete(E)).data&&x({type:"success",message:"操作成功！"}),P(),w("success")}(e.row)},{reference:u((()=>[c(l,{link:"",type:"danger"},{default:u((()=>[p(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[$,Y.value]]),c(O,{class:"flex justify-end mt-5"},{default:u((()=>[c(L,{"page-size":q.size,"onUpdate:pageSize":a[2]||(a[2]=e=>q.size=e),"current-page":q.page,"onUpdate:currentPage":a[3]||(a[3]=e=>q.page=e),class:"mr-5",total:F.value,"page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",onSizeChange:P,onCurrentChange:P},null,8,["page-size","current-page","total"])])),_:1})]),c(Z,{modelValue:D.value,"onUpdate:modelValue":a[7]||(a[7]=e=>D.value=e),width:"650","show-close":!1,"destroy-on-close":""},{header:u((()=>[n("div",U,[n("div",null,y(E.id?"编辑内容":"新增内容"),1),n("div",{style:{cursor:"pointer"},onClick:a[4]||(a[4]=e=>D.value=!1)},[c(v,null,{default:u((()=>[c(Q,{name:"close"})])),_:1})])])])),default:u((()=>[n("div",B,[c(X,{model:E},{default:u((()=>[c(W,{label:"名称",rules:S.dictName},{default:u((()=>[c(t,{modelValue:E.dictName,"onUpdate:modelValue":a[5]||(a[5]=e=>E.dictName=e),size:"large",placeholder:"请输入名称"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["model"])]),n("div",M,[c(l,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[6]||(a[6]=e=>D.value=!1)},{default:u((()=>[p(" 取消 ")])),_:1}),c(l,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:J},{default:u((()=>[p(" 确定 ")])),_:1})])])),_:1},8,["modelValue"])])}}});"function"==typeof F&&F(Y);const D=w(Y,[["__scopeId","data-v-fd6dfaa0"]]);export{D as default};
