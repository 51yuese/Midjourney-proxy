
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ac as e,d as a,u as t,G as l,r as o,C as s,x as r,j as d,U as i,o as n,c as u,b as p,f as c,m,n as g,g as f,V as y,W as v,e as b,h as x,w,J as h,t as _,O as F,P as k,Z as V,y as z,p as C,k as U,_ as j,q as A}from"../main-5b9099dc.js";import{u as Y}from"../utcformatTime/utcformatTime.f6db2c52.js";import{Q as M,d as q}from"../index/index.7e2cb35b.js";const R=a=>e.get("autoreply/query",{params:a}),B=a=>e.post("autoreply/del",a),D=a=>e.post("autoreply/add",a),P=a=>e.post("autoreply/update",a),E=e=>(C("data-v-de7b7d20"),e=e(),U(),e),I={style:{"margin-top":"38px"}},K={class:"search_condition"},O={style:{display:"flex","align-items":"center"}},S=E((()=>p("div",{class:"search_title"},"自定义问题",-1))),T={style:{"margin-left":"12px"}},G=E((()=>p("div",{class:"search_title"},"启用状态",-1))),J={style:{"margin-top":"22px","margin-left":"12px"}},Q={style:{"margin-top":"22px"}},W={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},Z={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},$={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},H=a({__name:"autpReply",setup(e){const a=t(),C=l({prompt:"",status:void 0,page:1,size:10}),U=o(!1),j=o(!1),A=o(0),E=o(0);o();const H=o(),L=l({status:0,prompt:"",answer:""}),N=l({status:[{required:!0,message:"请选择套餐类型",trigger:"change"}],prompt:[{required:!0,message:"请填写预设问题",trigger:"blur"}],answer:[{required:!0,message:"请填写回复答案",trigger:"blur"}]}),X=o([]);async function ee(){try{j.value=!0;const e=await R(C),{rows:a,count:t}=e.data;j.value=!1,E.value=t,X.value=a}catch(e){j.value=!1}}function ae(){C.prompt="",C.status="",C.page=1,C.size=10,ee()}function te(){A.value=0,L.status=0,L.prompt="",L.answer="",U.value=!0}const le=s((()=>0!==A.value));return r((()=>{ee()})),(e,t)=>{const l=d("el-alert"),o=d("el-input"),s=d("el-option"),r=d("el-select"),R=d("el-button"),oe=d("RefreshRight"),se=d("el-icon"),re=d("el-table-column"),de=d("el-tag"),ie=d("el-popconfirm"),ne=d("el-table"),ue=d("el-pagination"),pe=d("el-row"),ce=z,me=d("el-switch"),ge=d("el-form-item"),fe=d("el-form"),ye=d("el-dialog"),ve=i("loading");return n(),u("div",null,[p("div",null,[p("div",I,[c(l,{closable:!1,"show-icon":"",title:"自定义回复说明",description:"当前可设置自定义回复、且可以多种关键词触发回复相同内容、可以开启精准匹配或模糊匹配用户设置自定义回复程度。",type:"warning"})]),p("div",K,[p("div",O,[p("div",null,[S,p("div",null,[c(o,{modelValue:C.prompt,"onUpdate:modelValue":t[0]||(t[0]=e=>C.prompt=e),placeholder:"自定义问题[模糊搜索]",onKeydown:m(g(ee,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])]),p("div",T,[G,p("div",null,[c(r,{modelValue:C.status,"onUpdate:modelValue":t[1]||(t[1]=e=>C.status=e),placeholder:"请选择启用状态",clearable:"",style:{width:"120px"}},{default:f((()=>[(n(!0),u(y,null,v(b(M),(e=>(n(),h(s,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),p("div",J,[c(R,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:ee},{default:f((()=>[x("查询 ")])),_:1})]),p("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:ae},[c(se,{color:"#3B82F6",size:"20"},{default:f((()=>[c(oe)])),_:1})])]),p("div",Q,[c(R,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:te},{default:f((()=>[x("添加自动回复 ")])),_:1})])])]),p("div",null,[w((n(),h(ne,{border:"",data:b(X),height:"55vh",style:{width:"100%"},size:"large"},{default:f((()=>[c(re,{prop:"prompt",label:"提问关键词"}),c(re,{prop:"answer",label:"回复答案"}),c(re,{prop:"status",label:"问题状态",width:"120"},{default:f((e=>[c(de,{type:1===e.row.status?"success":"daner"},{default:f((()=>[x(_(b(q)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),c(re,{prop:"createdAt",label:"创建时间",width:"200"},{default:f((e=>[x(_(b(Y)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),c(re,{prop:"updatedAt",label:"更新时间",width:"200"},{default:f((e=>[x(_(b(Y)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),c(re,{fixed:"right",label:"操作",width:"200"},{default:f((e=>[c(R,{link:"",type:"primary",size:"small",onClick:a=>function(e){A.value=e.id;const{status:a,prompt:t,answer:l}=e;U.value=!0,V((()=>{Object.assign(L,{status:a,prompt:t,answer:l})}))}(e.row)},{default:f((()=>[x(" 编辑 ")])),_:2},1032,["onClick"]),c(ie,{"confirm-button-text":"确认删除","cancel-button-text":"放弃",type:"danger",width:"230px","icon-color":"red",title:"确定删除本条自动回复问题么？",onConfirm:t=>async function(e){if(0==a.isUserModifyPermissions())return k.error("非超级管理员无权限操作！");await B({id:e}),k.success("删除自定义问题成功"),await ee()}(e.row.id)},{reference:f((()=>[c(R,{link:"",type:"danger",size:"small"},{default:f((()=>[x(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[ve,b(j)]]),c(pe,{class:"flex justify-end mt-5"},{default:f((()=>[c(ue,{"current-page":C.page,"onUpdate:currentPage":t[2]||(t[2]=e=>C.page=e),"page-size":C.size,"onUpdate:pageSize":t[3]||(t[3]=e=>C.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:b(E),onSizeChange:ee,onCurrentChange:ee},null,8,["current-page","page-size","total"])])),_:1}),c(ye,{modelValue:b(U),"onUpdate:modelValue":t[10]||(t[10]=e=>F(U)?U.value=e:null),width:"400","show-close":!1,"destroy-on-close":""},{header:f((({close:e,titleId:a,titleClass:l})=>[p("div",W,[p("div",null,_(b(le)?"编辑":"添加")+"自动回复 ",1),p("div",{onClick:t[4]||(t[4]=e=>U.value=!1),style:{cursor:"pointer"}},[c(se,null,{default:f((()=>[c(ce,{name:"close"})])),_:1})])])])),default:f((()=>[p("div",Z,[c(fe,{ref_key:"formAutoReplyRef",ref:H,"label-position":"right","label-width":"80px",model:L,rules:N},{default:f((()=>[c(ge,{label:"开启状态",prop:"status"},{default:f((()=>[c(me,{modelValue:L.status,"onUpdate:modelValue":t[5]||(t[5]=e=>L.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1}),c(ge,{label:"提问问题",prop:"prompt"},{default:f((()=>[c(o,{modelValue:L.prompt,"onUpdate:modelValue":t[6]||(t[6]=e=>L.prompt=e),type:"textarea",rows:5,placeholder:"请填写预设提问问题"},null,8,["modelValue"])])),_:1}),c(ge,{label:"回复问题",prop:"answer"},{default:f((()=>[c(o,{modelValue:L.answer,"onUpdate:modelValue":t[7]||(t[7]=e=>L.answer=e),type:"textarea",rows:5,placeholder:"请填写预设回复答案"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])]),p("div",$,[c(R,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:t[8]||(t[8]=e=>U.value=!1)},{default:f((()=>[x("取消 ")])),_:1}),c(R,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:t[9]||(t[9]=e=>async function(e){null==e||e.validate((async e=>e?0==a.isUserModifyPermissions()?k.error("非超级管理员无权限操作！"):(0===A.value?(await D(L),k.success("添加自定义问题成功")):(await P({id:A.value,...L}),k.success("更新自定义问题成功")),U.value=!1,void ee()):k.warning("请按规则填写所有信息！")))}(b(H)))},{default:f((()=>[x(_((b(le)?"更新":"新增")+"回复 "),1)])),_:1})])])),_:1},8,["modelValue"])])])}}});"function"==typeof A&&A(H);const L=j(H,[["__scopeId","data-v-de7b7d20"]]);export{L as default};