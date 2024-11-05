
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as t,E as l,q as i,j as o,V as d,o as s,c as r,b as n,f as c,g as u,h as p,e as m,w as g,I as f,t as y,O as x,s as b,_ as v,n as h}from"../main-31e47da4.js";import{u as w}from"../utcformatTime/utcformatTime.f6db2c52.js";import{T as F,A as _}from"../aiMusic/aiMusic.87e33ace.js";const k={class:"search_condition"},z={style:{display:"flex","align-items":"center"}},C={style:{"margin-top":"22px","margin-left":"12px"}},V={style:{"margin-top":"22px"}},N={style:{"margin-top":"12px"}},j={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},A={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},T={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},U=e({__name:"dict",props:{type:{default:""}},emits:["success"],setup(e,{emit:v}){const h=e,U=v;a(),t();const B=t(0);t(!1);const E=t(!1),M=t(!1),Y=l({id:0,ids:[],dictType:h.type,dictName:""}),D=l({dictType:h.type,dictName:"",page:1,size:15}),I=t([]);async function q(){try{E.value=!0;const e=await _.page(D),{rows:a,count:t}=e.data;B.value=t,E.value=!1,I.value=a}catch(e){E.value=!1}}function R(e){D.dictName="",q()}const S=l({dictName:[{required:!0,message:"名称不能为空",trigger:"blur"}]});function O(e){M.value=!0,Y.id=e.id,Y.ids=[],Y.dictName=e.dictName,Y.dictValue=e.dictValue}async function P(){(await _.save(Y)).data&&x({type:"success",message:"操作成功！"}),M.value=!1,q(),U("success")}return i((()=>q())),(e,a)=>{const t=o("el-input"),l=o("el-button"),i=o("RefreshRight"),v=o("el-icon"),h=o("el-table-column"),G=o("el-popconfirm"),H=o("el-table"),J=o("el-pagination"),K=o("el-row"),L=b,Q=o("el-form-item"),W=o("el-form"),X=o("el-dialog"),Z=d("loading");return s(),r("div",null,[n("div",k,[n("div",z,[n("div",null,[a[8]||(a[8]=n("div",{class:"search_title"}," 搜索关键字 ",-1)),n("div",null,[c(t,{modelValue:D.dictName,"onUpdate:modelValue":a[0]||(a[0]=e=>D.dictName=e),placeholder:"请输入字典关键字",clearable:"",style:{width:"192px"}},null,8,["modelValue"])])]),n("div",C,[c(l,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:q},{default:u((()=>a[9]||(a[9]=[p(" 查询 ")]))),_:1})]),n("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:R},[c(v,{color:"#3B82F6",size:"20"},{default:u((()=>[c(i)])),_:1})])]),n("div",V,[c(l,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:a[1]||(a[1]=e=>O(new(m(F))))},{default:u((()=>a[10]||(a[10]=[p(" 添加内容 ")]))),_:1})])]),n("div",N,[g((s(),f(H,{border:"",height:"66vh",data:I.value,style:{width:"100%"},size:"large"},{default:u((()=>[c(h,{fixed:"",prop:"id",label:"ID",width:"80"}),c(h,{prop:"dictName",label:"名称",width:"150"}),c(h,{prop:"dictValue",label:"内容",align:"center"}),c(h,{prop:"createdAt",label:"创建时间",width:"200",align:"center"},{default:u((e=>[p(y(m(w)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),c(h,{fixed:"right",label:"操作",width:"250",align:"center"},{default:u((e=>[c(l,{link:"",type:"primary",size:"small",onClick:a=>O(e.row)},{default:u((()=>a[11]||(a[11]=[p(" 编辑 ")]))),_:2},1032,["onClick"]),c(G,{title:"确认删除?","confirm-button-text":"确认删除",onConfirm:a=>async function(e){Y.ids.push(e.id),(await _.delete(Y)).data&&x({type:"success",message:"操作成功！"}),q(),U("success")}(e.row)},{reference:u((()=>[c(l,{link:"",type:"danger"},{default:u((()=>a[12]||(a[12]=[p(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Z,E.value]]),c(K,{class:"flex justify-end mt-5"},{default:u((()=>[c(J,{"page-size":D.size,"onUpdate:pageSize":a[2]||(a[2]=e=>D.size=e),"current-page":D.page,"onUpdate:currentPage":a[3]||(a[3]=e=>D.page=e),class:"mr-5",total:B.value,"page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",onSizeChange:q,onCurrentChange:q},null,8,["page-size","current-page","total"])])),_:1})]),c(X,{modelValue:M.value,"onUpdate:modelValue":a[7]||(a[7]=e=>M.value=e),width:"650","show-close":!1,"destroy-on-close":""},{header:u((()=>[n("div",j,[n("div",null,y(Y.id?"编辑内容":"新增内容"),1),n("div",{style:{cursor:"pointer"},onClick:a[4]||(a[4]=e=>M.value=!1)},[c(v,null,{default:u((()=>[c(L,{name:"close"})])),_:1})])])])),default:u((()=>[n("div",A,[c(W,{model:Y},{default:u((()=>[c(Q,{label:"名称",rules:S.dictName},{default:u((()=>[c(t,{modelValue:Y.dictName,"onUpdate:modelValue":a[5]||(a[5]=e=>Y.dictName=e),size:"large",placeholder:"请输入名称"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["model"])]),n("div",T,[c(l,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[6]||(a[6]=e=>M.value=!1)},{default:u((()=>a[13]||(a[13]=[p(" 取消 ")]))),_:1}),c(l,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:P},{default:u((()=>a[14]||(a[14]=[p(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])])}}});"function"==typeof h&&h(U);const B=v(U,[["__scopeId","data-v-fa15f891"]]);export{B as default};
