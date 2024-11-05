
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import e from"../components/mjSuggestWord.0c416d6e.js";import{A as a}from"../mj/mj.47c597de.js";import{u as t}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as s,u as r,r as l,E as o,q as i,j as n,V as p,o as u,c as d,f as g,b as c,g as m,h as f,w as h,I as y,t as b,e as w,O as v,_ as x,n as _}from"../main-31e47da4.js";import"../system/system.d6afe6aa.js";const j={style:{"margin-bottom":"32px"}},z={style:{"text-align":"right","margin-bottom":"12px"}},C=["src"],k=s({__name:"suggest-words",setup(s){const x=r(),_=l(),k=l(!1),A=l([]),S=l(0),M=o({page:1,size:20});l();const F=async()=>{try{k.value=!0;const e=await a.queryMjSuggestWord(M),{rows:t,count:s}=e.data;k.value=!1,S.value=s,A.value=t}catch(e){k.value=!1}},U=async()=>{_.value.open()};return i((()=>{F()})),(s,r)=>{const l=n("el-alert"),o=n("el-button"),i=n("el-table-column"),W=n("el-popconfirm"),q=n("el-table"),B=n("el-pagination"),E=n("el-row"),I=p("loading");return u(),d("div",null,[g(e,{ref_key:"mjManagerRef",ref:_,onFresh:F},null,512),c("div",j,[g(l,{"show-icon":"",title:"推荐关键词说明",closable:!1,description:"此处的推荐关键词是给用户可以选择的默认绘画关键词！",type:"warning"})]),c("div",z,[c("div",null,[g(o,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:U},{default:m((()=>r[2]||(r[2]=[f(" 添加关键词 ")]))),_:1})])]),c("div",null,[h((u(),y(q,{border:"",data:A.value,height:"64vh",width:"100%"},{default:m((()=>[g(i,{prop:"image",label:"图标",width:"100px"},{default:m((e=>[c("img",{src:e.row.image,style:{width:"50px",height:"50px","border-radius":"8px"},alt:""},null,8,C)])),_:1}),g(i,{prop:"suggestCn",label:"关键词中文"}),g(i,{prop:"suggestEn",label:"关键词英文"}),g(i,{prop:"order",label:"排序权重",width:"120px"}),g(i,{prop:"createdAt",label:"创建时间"},{default:m((e=>[c("p",null,b(w(t)(e.row.createdAt)),1)])),_:1}),g(i,{prop:"updatedAt",label:"更新时间"},{default:m((e=>[c("p",null,b(w(t)(e.row.updatedAt)),1)])),_:1}),g(i,{fixed:"right",label:"操作",width:"120",align:"center"},{default:m((e=>[g(o,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{_.value.open(e)})(e.row)},{default:m((()=>r[3]||(r[3]=[f(" 编辑 ")]))),_:2},1032,["onClick"]),g(W,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:t=>(async e=>{if(0==x.isUserModifyPermissions())return v.error("非超级管理员无权限操作！");await a.removeMjSuggestWord({id:e.id}),v.success("删除推荐关键词成功！"),await F()})(e.row)},{reference:m((()=>[g(o,{link:"",type:"danger",size:"small"},{default:m((()=>r[4]||(r[4]=[f(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[I,k.value]]),g(E,{class:"flex justify-end mt-5 pb-5"},{default:m((()=>[g(B,{"current-page":M.page,"onUpdate:currentPage":r[0]||(r[0]=e=>M.page=e),"page-size":M.size,"onUpdate:pageSize":r[1]||(r[1]=e=>M.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:S.value,onSizeChange:F,onCurrentChange:F},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof _&&_(k);const A=x(k,[["__scopeId","data-v-3f375c36"]]);export{A as default};