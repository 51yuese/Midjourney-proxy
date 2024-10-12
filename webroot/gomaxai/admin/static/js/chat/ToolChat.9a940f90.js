
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as a,E as o,q as t,j as l,V as r,o as n,c as s,b as i,f as p,l as d,m as u,g as c,h as m,w,e as f,I as g,t as h,_ as y,n as v}from"../main-c47e4581.js";import{m as _}from"../marked.esm/marked.esm.3c8fbedb.js";import{A as b}from"./chat.f0997e25.js";import{u as k}from"../utcformatTime/utcformatTime.f6db2c52.js";const x={class:"search_condition"},z={style:{display:"flex","align-items":"center"}},T={style:{"margin-left":"12px"}},A={style:{"margin-top":"22px","margin-left":"12px"}},j={style:{"margin-left":"12px","margin-top":"22px"}},C={style:{"margin-top":"12px"}},F={class:"answer"},V=["innerHTML"],K=e({__name:"ToolChat",setup(e){const y=new _.Renderer;_.setOptions({renderer:y,gfm:!0,pedantic:!1,sanitize:!1});const v=a(!1);a();const K=a(0),M=o({keyword:"",prompt:"",modelType:"other",page:1,size:15}),U=a([]);async function Y(){v.value=!0;try{const e=await b.queryChatAll(M);v.value=!1;const{rows:a,count:o}=e.data;K.value=o,U.value=a}catch(e){v.value=!1}}function I(){M.keyword="",M.prompt="",Y()}return t((()=>{Y()})),(e,a)=>{const o=l("el-input"),t=l("el-button"),y=l("el-table-column"),b=l("el-tag"),q=l("el-popover"),D=l("el-table"),E=l("el-pagination"),H=l("el-row"),L=r("loading");return n(),s("div",null,[i("div",x,[i("div",z,[i("div",null,[a[4]||(a[4]=i("div",{class:"search_title"},"关键字",-1)),i("div",null,[p(o,{modelValue:M.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>M.keyword=e),placeholder:"用户名/昵称/手机号/邮箱",onKeydown:d(u(Y,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])]),i("div",T,[a[5]||(a[5]=i("div",{class:"search_title"},"用户询问的问题",-1)),i("div",null,[p(o,{modelValue:M.prompt,"onUpdate:modelValue":a[1]||(a[1]=e=>M.prompt=e),placeholder:"提问问题[模糊搜索]",onKeydown:d(u(Y,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])]),i("div",A,[p(t,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:Y},{default:c((()=>a[6]||(a[6]=[m("查询 ")]))),_:1})]),i("div",j,[p(t,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","border-radius":"8px",border:"1px solid #3B82F6","background-color":"transparent"},onClick:I},{default:c((()=>a[7]||(a[7]=[m("重置 ")]))),_:1})])])]),i("div",C,[w((n(),g(D,{height:"66vh",border:"",data:f(U),style:{width:"100%"},size:"large","tooltip-options":{}},{default:c((()=>[p(y,{fixed:"",prop:"username",label:"用户名",width:"120"},{default:c((e=>[m(h(null==e.row.username?"--":e.row.username),1)])),_:1}),p(y,{fixed:"",prop:"nickname",label:"用户昵称",width:"120"},{default:c((e=>[m(h(null==e.row.nickname?"--":e.row.nickname),1)])),_:1}),p(y,{fixed:"",prop:"phone",label:"手机号",width:"120"},{default:c((e=>[m(h(null==e.row.phone?"--":e.row.phone),1)])),_:1}),p(y,{prop:"email",label:"用户邮箱",width:"200"},{default:c((e=>[m(h(null==e.row.email?"--":e.row.email),1)])),_:1}),p(y,{prop:"createdAt",label:"角色",width:"80"},{default:c((e=>["user"===e.row.role?(n(),g(b,{key:0,type:"primary"},{default:c((()=>a[8]||(a[8]=[m("用户")]))),_:1})):(n(),g(b,{key:1,type:"success"},{default:c((()=>a[9]||(a[9]=[m("电脑")]))),_:1}))])),_:1}),p(y,{prop:"answer",label:"用户询问/AI回复"},{default:c((e=>[p(q,{placement:"top",width:400,trigger:"click"},{reference:c((()=>[i("div",F,h("user"===e.row.role?e.row.prompt:e.row.answer),1)])),default:c((()=>[i("div",{class:"answer_container",innerHTML:f(_)("user"===e.row.role?e.row.prompt:e.row.answer||"")},null,8,V)])),_:2},1024)])),_:1}),p(y,{prop:"completionTokens",label:"提问/回答Token",width:"140",align:"center"},{default:c((e=>[m(h("user"===e.row.role?e.row.promptTokens:e.row.completionTokens),1)])),_:1}),p(y,{prop:"totalTokens",label:"总计Toekn",width:"110",align:"center"}),p(y,{prop:"model",label:"模型",width:"200"},{default:c((e=>[m(h(""==e.row.model?"--":e.row.model),1)])),_:1}),p(y,{prop:"createdAt",label:"提问/回复时间",width:"200"},{default:c((e=>[m(h(f(k)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])),[[L,f(v)]]),p(H,{class:"flex justify-end mt-5"},{default:c((()=>[p(E,{"current-page":M.page,"onUpdate:currentPage":a[2]||(a[2]=e=>M.page=e),"page-size":M.size,"onUpdate:pageSize":a[3]||(a[3]=e=>M.size=e),class:"mr-5","page-sizes":[15,30,45,60],layout:"total, sizes, prev, pager, next, jumper",total:f(K),onSizeChange:Y,onCurrentChange:Y},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof v&&v(K);const M=y(K,[["__scopeId","data-v-a4386e51"]]);export{M as default};
