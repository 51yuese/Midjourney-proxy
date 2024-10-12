
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.94f3c65d.js";import{A as l}from"./chat.1b595c44.js";import{d as a,r as t,G as s,x as r,j as u,V as o,o as n,c as d,f as i,g as c,W as m,X as p,e as f,h as v,w as _,J as y,b as g,U as w,t as b,K as h,P as x,q as k}from"../main-7fe883cc.js";import{R as z,D as V}from"../index/index.21f4f4e7.js";const j={class:"flex draw_container"},C={class:"draw_head"},U={class:"draw_footer flex mt-3 justify-between items-center"},I=a({__name:"draw",setup(a){const k=t(!1),I=t(),A=t(0),D=t([]),P=s({userId:"",rec:"",model:"DALL-E2",page:1,size:14}),L=t([]);async function q(){k.value=!0;try{const e=await l.queryDrawAll(P),{rows:a,count:t}=e.data;k.value=!1,A.value=t,L.value=a}catch(e){k.value=!1}}async function E(e){const l=await w.queryAllUser({size:30,username:e});D.value=l.data.rows}return r((()=>{q()})),(a,t)=>{const s=u("el-alert"),r=e,w=u("el-option"),R=u("el-select"),S=u("el-form-item"),F=u("el-button"),G=u("el-form"),J=u("el-image"),K=u("el-tag"),M=u("Plus"),W=u("el-icon"),X=u("Minus"),Y=u("el-pagination"),B=u("el-row"),H=o("loading");return n(),d("div",null,[i(r,{bottomPadding:"20px"},{default:c((()=>[i(s,{closable:!1,"show-icon":"",title:"DALL-E2绘画说明",description:"此处的midjourney模型选择是老版本的历史数据、新版迁移至新菜单分开！",type:"success"})])),_:1}),i(r,null,{default:c((()=>[i(G,{ref_key:"formRef",ref:I,inline:!0,model:P},{default:c((()=>[i(S,{label:"用户名称",prop:"userId"},{default:c((()=>[i(R,{modelValue:P.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>P.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":E},{default:c((()=>[(n(!0),d(m,null,p(D.value,(e=>(n(),y(w,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(S,{label:"图片状态",prop:"rec"},{default:c((()=>[i(R,{modelValue:P.rec,"onUpdate:modelValue":t[1]||(t[1]=e=>P.rec=e),placeholder:"请选择图片状态",clearable:""},{default:c((()=>[(n(!0),d(m,null,p(f(z),(e=>(n(),y(w,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(S,{label:"绘画模型",prop:"model"},{default:c((()=>[i(R,{modelValue:P.model,"onUpdate:modelValue":t[2]||(t[2]=e=>P.model=e),placeholder:"请选择绘画模型",clearable:""},{default:c((()=>[(n(!0),d(m,null,p(f(V),(e=>(n(),y(w,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(S,null,{default:c((()=>[i(F,{type:"primary",onClick:q},{default:c((()=>[v(" 查询 ")])),_:1}),i(F,{onClick:t[3]||(t[3]=e=>{return null==(l=I.value)||l.resetFields(),void q();var l})},{default:c((()=>[v(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),_((n(),y(r,{style:{width:"100%"},bottomPadding:"20px"},{default:c((()=>[g("div",j,[(n(!0),d(m,null,p(L.value,(e=>(n(),d("div",{key:e.id,style:{height:"280px"},class:"draw_img_container flex border"},[g("div",C,[i(J,{fit:"contain","preview-src-list":[e.answer],src:e.thumbImg,lazy:"",class:"draw_img","hide-on-click-modal":""},null,8,["preview-src-list","src"])]),g("div",U,[i(K,{class:"ml-2",type:e.rec?"success":"info"},{default:c((()=>[v(b(e.rec?"已推荐":"未推荐"),1)])),_:2},1032,["type"]),i(F,{type:"warning",plain:"",size:"small",onClick:a=>async function(e){const a=await l.recDrawImg({id:e});x.success(a.data),q()}(e.id)},{default:c((()=>[v(b(e.rec?"取消推荐":"加入推荐")+" ",1),e.rec?h("",!0):(n(),y(W,{key:0},{default:c((()=>[i(M)])),_:1})),e.rec?(n(),y(W,{key:1},{default:c((()=>[i(X)])),_:1})):h("",!0)])),_:2},1032,["onClick"])])])))),128))]),i(B,{class:"flex justify-end mt-5"},{default:c((()=>[i(Y,{"current-page":P.page,"onUpdate:currentPage":t[4]||(t[4]=e=>P.page=e),"page-size":P.size,"onUpdate:pageSize":t[5]||(t[5]=e=>P.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:A.value,onSizeChange:q,onCurrentChange:q},null,8,["current-page","page-size","total"])])),_:1})])),_:1})),[[H,k.value]])])}}});"function"==typeof k&&k(I);export{I as default};
