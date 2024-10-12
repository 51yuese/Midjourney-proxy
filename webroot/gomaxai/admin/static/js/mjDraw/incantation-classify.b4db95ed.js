
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import e from"../components/mjIncantationClassify.dd811236.js";import a from"../components/mjDetail.7caa0af3.js";import{A as l}from"../mj/mj.03303a0e.js";import{u as t}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as o,u as r,r as n,E as s,q as i,j as d,V as p,o as u,c,f as m,b as f,g as y,h as g,w as v,I as b,t as x,e as _,O as w,_ as h,n as j}from"../main-c47e4581.js";const k={class:"search_add_card"},z={style:{display:"flex","align-items":"center"}},C={style:{"margin-left":"10px"}},F={style:{"margin-top":"22px","margin-left":"12px"}},A=o({__name:"incantation-classify",setup(o){const h=r(),j=n(),A=n(),V=n(!1),U=n([]),I=n(0),M=s({level:0,page:1,size:20,type:"",keyword:""});n();const R=async()=>{try{V.value=!0;const e=await l.queryMjIncantClassify(M),{rows:a,count:t}=e.data;V.value=!1,I.value=t,U.value=a}catch(e){V.value=!1}},B=async()=>{A.value.open()},E=e=>{Object.assign(M,{level:2,page:1,size:20,type:"",keyword:""}),R()};return i((()=>{R()})),(o,r)=>{const n=d("el-input"),s=d("el-option"),i=d("el-select"),q=d("el-button"),D=d("RefreshRight"),O=d("el-icon"),P=d("el-table-column"),S=d("el-popconfirm"),T=d("el-table"),N=d("el-pagination"),W=d("el-row"),Y=p("loading");return u(),c("div",null,[m(e,{ref_key:"mjManagerRef",ref:A,onFresh:R},null,512),m(a,{ref_key:"mjDetailRef",ref:j},null,512),f("div",k,[f("div",z,[f("div",null,[r[4]||(r[4]=f("div",{class:"condition_name"},"关键字",-1)),m(n,{modelValue:M.keyword,"onUpdate:modelValue":r[0]||(r[0]=e=>M.keyword=e),style:{width:"192px"},placeholder:"分类关键字[模糊搜索]",clearable:""},null,8,["modelValue"])]),f("div",C,[r[5]||(r[5]=f("div",{class:"condition_name"},"所属类型",-1)),m(i,{modelValue:M.type,"onUpdate:modelValue":r[1]||(r[1]=e=>M.type=e)},{default:y((()=>[m(s,{value:"text",label:"普通"}),m(s,{value:"style",label:"风格"})])),_:1},8,["modelValue"])]),f("div",F,[m(q,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:R},{default:y((()=>r[6]||(r[6]=[g("查询 ")]))),_:1})]),f("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:E},[m(O,{color:"#3B82F6",size:"20"},{default:y((()=>[m(D)])),_:1})])]),f("div",null,[m(q,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:B},{default:y((()=>r[7]||(r[7]=[g(" 添加字典分类 ")]))),_:1})])]),f("div",null,[v((u(),b(T,{border:"",data:U.value,height:"64vh",width:"100%"},{default:y((()=>[m(P,{prop:"classifyName",label:"分类名称"}),m(P,{prop:"level",label:"级别"},{default:y((e=>[f("p",null,x(1===e.row.level?"一级":2===e.row.level?"二级":"未知"),1)])),_:1}),m(P,{prop:"type",label:"类型"},{default:y((e=>[f("p",null,x("text"===e.row.type?"普通":"style"===e.row.type?"风格":"未知"),1)])),_:1}),m(P,{prop:"createdAt",label:"创建时间"},{default:y((e=>[f("p",null,x(_(t)(e.row.createdAt)),1)])),_:1}),m(P,{prop:"updatedAt",label:"更新时间"},{default:y((e=>[f("p",null,x(_(t)(e.row.updatedAt)),1)])),_:1}),m(P,{fixed:"right",label:"操作",width:"280",align:"center"},{default:y((e=>[m(q,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{A.value.open(e.id)})(e.row)},{default:y((()=>r[8]||(r[8]=[g(" 编辑 ")]))),_:2},1032,["onClick"]),m(S,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{if(0==h.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");await l.removeMjIncantClassify({id:e.id}),w.success("删除咒语分类成功！"),await R()})(e.row)},{reference:y((()=>[m(q,{link:"",type:"danger",disabled:1===e.row.inner,size:"small"},{default:y((()=>r[9]||(r[9]=[g(" 删除 ")]))),_:2},1032,["disabled"])])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Y,V.value]]),m(W,{class:"flex justify-end mt-5 pb-5"},{default:y((()=>[m(N,{"current-page":M.page,"onUpdate:currentPage":r[2]||(r[2]=e=>M.page=e),"page-size":M.size,"onUpdate:pageSize":r[3]||(r[3]=e=>M.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:I.value,onSizeChange:R,onCurrentChange:R},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof j&&j(A);const V=h(A,[["__scopeId","data-v-be3d66aa"]]);export{V as default};
