
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as a,G as t,x as o,j as l,V as r,o as n,c as s,b as p,f as d,m as i,n as u,g as c,h as m,w,e as f,J as g,t as h,p as y,k as v,_,q as k}from"../main-2d3d97e8.js";import{m as b}from"../marked.esm/marked.esm.b7e5160c.js";import{A as x}from"../chat/chat.d9154397.js";import{u as z}from"../utcformatTime/utcformatTime.f6db2c52.js";const T=e=>(y("data-v-ed5e8811"),e=e(),v(),e),A={class:"search_condition"},j={style:{display:"flex","align-items":"center"}},C=T((()=>p("div",{class:"search_title"},"关键字",-1))),F={style:{"margin-left":"12px"}},V=T((()=>p("div",{class:"search_title"},"用户询问的问题",-1))),K={style:{"margin-top":"22px","margin-left":"12px"}},M={style:{"margin-left":"12px","margin-top":"22px"}},U={style:{"margin-top":"12px"}},Y={class:"answer"},H=["innerHTML"],q=e({__name:"appChatHistory",setup(e){const y=new b.Renderer;b.setOptions({renderer:y,gfm:!0,pedantic:!1,sanitize:!1});const v=a(!1);a();const _=a(0),k=t({keyword:"",prompt:"",modelType:"app",page:1,size:15}),T=a([]);async function q(){v.value=!0;try{const e=await x.queryChatAll(k);v.value=!1;const{rows:a,count:t}=e.data;_.value=t,T.value=a}catch(e){v.value=!1}}function D(){k.keyword="",k.prompt="",q()}return o((()=>{q()})),(e,a)=>{const t=l("el-input"),o=l("el-button"),y=l("el-table-column"),x=l("el-tag"),I=l("el-popover"),L=l("el-table"),S=l("el-pagination"),B=l("el-row"),E=r("loading");return n(),s("div",null,[p("div",A,[p("div",j,[p("div",null,[C,p("div",null,[d(t,{modelValue:k.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>k.keyword=e),placeholder:"用户名/昵称/手机号/邮箱",onKeydown:i(u(q,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])]),p("div",F,[V,p("div",null,[d(t,{modelValue:k.prompt,"onUpdate:modelValue":a[1]||(a[1]=e=>k.prompt=e),placeholder:"提问问题[模糊搜索]",onKeydown:i(u(q,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])]),p("div",K,[d(o,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:q},{default:c((()=>[m("查询 ")])),_:1})]),p("div",M,[d(o,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","border-radius":"8px",border:"1px solid #3B82F6","background-color":"transparent"},onClick:D},{default:c((()=>[m("重置 ")])),_:1})])])]),p("div",U,[w((n(),g(L,{height:"66vh",border:"",data:f(T),style:{width:"100%"},size:"large","tooltip-options":{}},{default:c((()=>[d(y,{fixed:"",prop:"username",label:"用户名",width:"120"},{default:c((e=>[m(h(null==e.row.username?"--":e.row.username),1)])),_:1}),d(y,{fixed:"",prop:"nickname",label:"用户昵称",width:"120"},{default:c((e=>[m(h(null==e.row.nickname?"--":e.row.nickname),1)])),_:1}),d(y,{fixed:"",prop:"phone",label:"手机号",width:"120"},{default:c((e=>[m(h(null==e.row.phone?"--":e.row.phone),1)])),_:1}),d(y,{prop:"email",label:"用户邮箱",width:"200"},{default:c((e=>[m(h(""==e.row.email||null==e.row.email?"--":e.row.email),1)])),_:1}),d(y,{prop:"createdAt",label:"角色",width:"80"},{default:c((e=>["user"===e.row.role?(n(),g(x,{key:0,type:"primary"},{default:c((()=>[m("用户")])),_:1})):(n(),g(x,{key:1,type:"success"},{default:c((()=>[m("电脑")])),_:1}))])),_:1}),d(y,{prop:"answer",label:"用户询问/AI回复"},{default:c((e=>[d(I,{placement:"top",width:400,trigger:"click"},{reference:c((()=>[p("div",Y,h("user"===e.row.role?e.row.prompt:e.row.answer),1)])),default:c((()=>[p("div",{class:"answer_container",innerHTML:f(b)("user"===e.row.role?e.row.prompt:e.row.answer||"")},null,8,H)])),_:2},1024)])),_:1}),d(y,{prop:"completionTokens",label:"提问/回答Token",width:"140",align:"center"},{default:c((e=>[m(h("user"===e.row.role?e.row.promptTokens:e.row.completionTokens),1)])),_:1}),d(y,{prop:"totalTokens",label:"总计Toekn",width:"110",align:"center"}),d(y,{prop:"model",label:"模型",width:"200"},{default:c((e=>[m(h(""==e.row.model?"--":e.row.model),1)])),_:1}),d(y,{prop:"createdAt",label:"提问/回复时间",width:"200"},{default:c((e=>[m(h(f(z)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])),[[E,f(v)]]),d(B,{class:"flex justify-end mt-5"},{default:c((()=>[d(S,{"current-page":k.page,"onUpdate:currentPage":a[2]||(a[2]=e=>k.page=e),"page-size":k.size,"onUpdate:pageSize":a[3]||(a[3]=e=>k.size=e),class:"mr-5","page-sizes":[15,30,45,60],layout:"total, sizes, prev, pager, next, jumper",total:f(_),onSizeChange:q,onCurrentChange:q},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof k&&k(q);const D=_(q,[["__scopeId","data-v-ed5e8811"]]);export{D as default};
