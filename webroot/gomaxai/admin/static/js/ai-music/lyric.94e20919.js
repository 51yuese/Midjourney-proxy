
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as l,G as t,x as i,j as o,U as r,o as d,c as s,b as n,f as c,g as u,h as p,e as m,w as g,J as f,t as y,P as b,y as x,p as v,k as h,_ as w,q as _}from"../main-5b9099dc.js";import{u as F}from"../utcformatTime/utcformatTime.f6db2c52.js";import{T as k,A as V}from"../aiMusic/aiMusic.7858773e.js";const z={class:"search_condition"},C={style:{display:"flex","align-items":"center"}},N=(e=>(v("data-v-7e23e629"),e=e(),h(),e))((()=>n("div",{class:"search_title"},"搜索关键字",-1))),U={style:{"margin-top":"22px","margin-left":"12px"}},j={style:{"margin-top":"22px"}},T={style:{"margin-top":"12px"}},A={key:0},M={key:1},B={key:2},P={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},Y={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},q={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},D=e({__name:"lyric",setup(e){const v=a();l();const h=l(0);l(!1);const w=l(!1),_=l(!1),D=t({id:0,ids:[],dictType:"music-lyrics",dictName:"",dictValue:""}),E=t({dictType:"music-lyrics",dictName:"",page:1,size:15}),I=l([]);async function R(){try{w.value=!0;const e=await V.page(E),{rows:a,count:l}=e.data;h.value=l,w.value=!1,I.value=a}catch(e){w.value=!1}}function S(e){E.dictName="",R()}const G=t({dictName:[{required:!0,message:"名称不能为空",trigger:"blur"}],dictValue:[{required:!0,message:"内容不能为空",trigger:"blur"}]});function J(e){_.value=!0,D.id=e.id,D.dictName=e.dictName,D.dictValue=e.dictValue}async function H(){if(0==v.isUserModifyPermissions())return b.error("非超级管理员无权限操作！");(await V.save(D)).data&&b({type:"success",message:"操作成功！"}),_.value=!1,R()}return i((()=>R())),(e,a)=>{const l=o("el-input"),t=o("el-button"),i=o("RefreshRight"),K=o("el-icon"),L=o("el-table-column"),O=o("el-popconfirm"),Q=o("el-table"),W=o("el-pagination"),X=o("el-row"),Z=x,$=o("el-form-item"),ee=o("el-form"),ae=o("el-dialog"),le=r("loading");return d(),s("div",null,[n("div",z,[n("div",C,[n("div",null,[N,n("div",null,[c(l,{modelValue:E.dictName,"onUpdate:modelValue":a[0]||(a[0]=e=>E.dictName=e),placeholder:"请输入字典关键字",clearable:"",style:{width:"192px"}},null,8,["modelValue"])])]),n("div",U,[c(t,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:R},{default:u((()=>[p("查询 ")])),_:1})]),n("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:S},[c(K,{color:"#3B82F6",size:"20"},{default:u((()=>[c(i)])),_:1})])]),n("div",j,[c(t,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:a[1]||(a[1]=e=>J(new(m(k))))},{default:u((()=>[p("添加内容 ")])),_:1})])]),n("div",T,[g((d(),f(Q,{border:"",height:"66vh",data:I.value,style:{width:"100%"},size:"large"},{default:u((()=>[c(L,{fixed:"",prop:"id",label:"ID",width:"80"}),c(L,{prop:"dictType",label:"类型",width:"150"},{default:u((e=>["music-style"===e.row.dictType?(d(),s("span",A,"音乐风格")):"music-lyrics"===e.row.dictType?(d(),s("span",M,"音乐歌词")):(d(),s("span",B,"--"))])),_:1}),c(L,{prop:"dictName",label:"名称",width:"150"}),c(L,{prop:"dictValue",label:"内容",align:"center"}),c(L,{prop:"createdAt",label:"创建时间",width:"200",align:"center"},{default:u((e=>[p(y(m(F)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),c(L,{fixed:"right",label:"操作",width:"250",align:"center"},{default:u((e=>[c(t,{link:"",type:"primary",size:"small",onClick:a=>J(e.row)},{default:u((()=>[p(" 编辑 ")])),_:2},1032,["onClick"]),c(O,{title:"确认删除?","confirm-button-text":"确认删除",onConfirm:a=>async function(e){if(0==v.isUserModifyPermissions())return b.error("非超级管理员无权限操作！");D.ids.push(e.id),(await V.delete(D)).data&&b({type:"success",message:"操作成功！"}),R()}(e.row)},{reference:u((()=>[c(t,{link:"",type:"danger"},{default:u((()=>[p(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[le,w.value]]),c(X,{class:"flex justify-end mt-5"},{default:u((()=>[c(W,{class:"mr-5",total:h.value,onSizeChange:R,"page-sizes":[15,30,50,100],onCurrentChange:R,"page-size":E.size,"onUpdate:pageSize":a[2]||(a[2]=e=>E.size=e),"current-page":E.page,"onUpdate:currentPage":a[3]||(a[3]=e=>E.page=e),layout:"total, sizes, prev, pager, next, jumper"},null,8,["total","page-size","current-page"])])),_:1})]),c(ae,{modelValue:_.value,"onUpdate:modelValue":a[8]||(a[8]=e=>_.value=e),width:"650","show-close":!1,"destroy-on-close":""},{header:u((({close:e,titleId:l,titleClass:t})=>[n("div",P,[n("div",null,y(D.id?"编辑内容":"新增内容"),1),n("div",{onClick:a[4]||(a[4]=e=>_.value=!1),style:{cursor:"pointer"}},[c(K,null,{default:u((()=>[c(Z,{name:"close"})])),_:1})])])])),default:u((()=>[n("div",Y,[c(ee,{model:D},{default:u((()=>[c($,{label:"名称",rules:G.dictName},{default:u((()=>[c(l,{size:"large",modelValue:D.dictName,"onUpdate:modelValue":a[5]||(a[5]=e=>D.dictName=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1},8,["rules"]),c($,{label:"内容",rules:G.dictValue},{default:u((()=>[c(l,{size:"large",modelValue:D.dictValue,"onUpdate:modelValue":a[6]||(a[6]=e=>D.dictValue=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["model"])]),n("div",q,[c(t,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[7]||(a[7]=e=>_.value=!1)},{default:u((()=>[p("取消 ")])),_:1}),c(t,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:H},{default:u((()=>[p(" 确定 ")])),_:1})])])),_:1},8,["modelValue"])])}}});"function"==typeof _&&_(D);const E=w(D,[["__scopeId","data-v-7e23e629"]]);export{E as default};
