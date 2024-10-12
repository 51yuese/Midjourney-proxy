
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{m as e}from"../marked.esm/marked.esm.b7e5160c.js";import{A as a}from"../chat/chat.1b595c44.js";import{d as t,u as r,r as o,G as l,x as s,j as n,V as i,o as d,c as u,b as p,f as c,g as m,W as f,X as w,e as g,h,w as v,J as y,t as _,U as b,P as x,p as k,k as z,_ as F,q as j}from"../main-7fe883cc.js";import{u as A}from"../utcformatTime/utcformatTime.f6db2c52.js";import{A as C}from"../aiMusic/aiMusic.1a33d471.js";const M={class:"search_condition"},U=(e=>(k("data-v-6c445e14"),e=e(),z(),e))((()=>p("div",{class:"search_title"},"搜索关键字",-1))),T={style:{"margin-top":"22px","margin-left":"12px"}},I={style:{"padding-top":"12px"}},L={key:0},V={class:"answer"},Y=["innerHTML"],q=t({__name:"videoLog",setup(t){const k=r(),z=new e.Renderer;e.setOptions({renderer:z,gfm:!0,pedantic:!1,sanitize:!1});const F=o(!1),j=o([]);o();const q=o(0),P=l({userId:"",prompt:"",page:1,size:10,modelType:"video"}),R=o([]);async function D(){F.value=!0;try{const e=await a.queryChatAll(P);F.value=!1;const{rows:t,count:r}=e.data;q.value=r,R.value=t}catch(e){F.value=!1}}async function E(e){const a=await b.queryAllUser({size:30,username:e});j.value=a.data.rows}function H(e){null==e||e.resetFields(),D()}return s((()=>{D()})),(a,t)=>{const r=n("el-option"),o=n("el-select"),l=n("el-button"),s=n("RefreshRight"),b=n("el-icon"),z=n("el-table-column"),S=n("el-popover"),B=n("el-popconfirm"),G=n("el-table"),J=n("el-pagination"),O=n("el-row"),W=i("loading");return d(),u("div",null,[p("div",M,[p("div",null,[U,p("div",null,[c(o,{modelValue:P.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>P.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户名/昵称/手机号/邮箱","remote-show-suffix":"","remote-method":E,style:{width:"192px"}},{default:m((()=>[(d(!0),u(f,null,w(g(j),(e=>(d(),y(r,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),p("div",T,[c(l,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:D},{default:m((()=>[h("查询 ")])),_:1})]),p("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:H},[c(b,{color:"#3B82F6",size:"20"},{default:m((()=>[c(s)])),_:1})])]),p("div",I,[v((d(),y(G,{height:"66vh",border:"",data:g(R),style:{width:"100%"},size:"large","tooltip-options":{}},{default:m((()=>[c(z,{fixed:"",prop:"username",label:"用户名",width:"150"},{default:m((e=>[h(_(null==e.row.username?"--":e.row.username),1)])),_:1}),c(z,{fixed:"",prop:"nickname",label:"昵称",width:"150"},{default:m((e=>[h(_(null==e.row.nickname?"--":e.row.nickname),1)])),_:1}),c(z,{fixed:"",prop:"phone",label:"手机号",width:"150"},{default:m((e=>[h(_(null==e.row.phone?"--":e.row.phone),1)])),_:1}),c(z,{prop:"email",label:"用户邮箱",width:"200"},{default:m((e=>[h(_(null==e.row.email?"--":e.row.email),1)])),_:1}),c(z,{prop:"answer",label:"内容"},{default:m((a=>[null==a.row.answer?(d(),u("div",L,"--")):(d(),y(S,{key:1,placement:"top",width:400,trigger:"click"},{reference:m((()=>[p("div",V,_("user"===a.row.role?a.row.prompt:a.row.answer),1)])),default:m((()=>[p("div",{class:"answer_container",innerHTML:g(e)("user"===a.row.role?a.row.prompt:a.row.answer||"")},null,8,Y)])),_:2},1024))])),_:1}),c(z,{prop:"createdAt",label:"创建时间",width:"200"},{default:m((e=>[h(_(g(A)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),c(z,{label:"操作",width:"100"},{default:m((e=>[c(B,{title:"确认删除?","confirm-button-text":"确认删除",onConfirm:a=>async function(e){if(0==k.isUserModifyPermissions())return x.error("非超级管理员无权限操作！");(await C.deleteLog({ids:[e.id]})).data&&x({type:"success",message:"操作成功！"}),D()}(e.row)},{reference:m((()=>[c(l,{link:"",type:"danger",style:{"font-size":"13px"}},{default:m((()=>[h(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[W,g(F)]]),c(O,{class:"flex justify-end mt-5"},{default:m((()=>[c(J,{"current-page":P.page,"onUpdate:currentPage":t[1]||(t[1]=e=>P.page=e),"page-size":P.size,"onUpdate:pageSize":t[2]||(t[2]=e=>P.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:g(q),onSizeChange:D,onCurrentChange:D},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof j&&j(q);const P=F(q,[["__scopeId","data-v-6c445e14"]]);export{P as default};
