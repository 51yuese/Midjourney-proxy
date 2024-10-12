
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,E as o,q as r,j as t,V as d,o as s,c as i,b as n,f as u,g as p,h as c,w as g,I as f,O as m,s as v,_ as x}from"../main-c47e4581.js";import{A as b}from"../badWords/badWords.506a1e47.js";const y={style:{"margin-top":"38px"}},w={class:"search_condition"},h={style:{display:"flex","align-items":"center"}},F={style:{"margin-top":"22px","margin-left":"12px"}},_={style:{"margin-top":"22px"}},z={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},k={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},C={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},V=x(e({__name:"customSensitive",setup(e){const x=l(),V=a([]),j=a(!1),B=a(0),U=a(!1),A=o({word:""}),W=o({word:"",page:1,size:10}),E=a(),S=o({word:[{required:!0,message:"请输入您要添加的敏感词",trigger:"blur"}]});async function q(){j.value=!0;try{const e=await b.queryBadWords(W);j.value=!1;const{rows:l,count:a}=e.data;B.value=a,V.value=l}catch(e){j.value=!1}}function I(){W.word="",W.page=1,W.size=10,q()}function P(){A.word="",U.value=!0}function R(){E.value.validate((async e=>{if(!e)return;if(0==x.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");const l=await b.addBadWords(A);200==l.code?(m({type:"success",message:"敏感词添加成功"}),U.value=!1,q()):m({type:"error",message:l.data})}))}return r((()=>{q()})),(e,l)=>{const a=t("el-alert"),o=t("el-input"),r=t("el-button"),M=t("RefreshRight"),O=t("el-icon"),D=t("el-table-column"),G=t("el-popconfirm"),H=t("el-table"),J=t("el-pagination"),K=t("el-row"),L=v,N=t("el-form-item"),Q=t("el-form"),T=t("el-dialog"),X=d("loading");return s(),i("div",null,[n("div",null,[n("div",y,[u(a,{closable:!1,"show-icon":"",title:"敏感词说明",description:"当前为自定义敏感词、触发敏感词将自动拦截、如配置过三方平台、自定义检测将在三方平台通过后最后进行检测！",type:"warning"})]),n("div",w,[n("div",h,[n("div",null,[l[7]||(l[7]=n("div",{class:"search_title"},"敏感词",-1)),n("div",null,[u(o,{modelValue:W.word,"onUpdate:modelValue":l[0]||(l[0]=e=>W.word=e),placeholder:"敏感词[模糊搜索]"},null,8,["modelValue"])])]),n("div",F,[u(r,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:q},{default:p((()=>l[8]||(l[8]=[c("查询 ")]))),_:1})]),n("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:I},[u(O,{color:"#3B82F6",size:"20"},{default:p((()=>[u(M)])),_:1})])]),n("div",_,[u(r,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:P},{default:p((()=>l[9]||(l[9]=[c("添加敏感词 ")]))),_:1})])])]),n("div",null,[g((s(),f(H,{border:"",data:V.value,height:"55vh",style:{width:"100%"},"tooltip-options":{}},{default:p((()=>[u(D,{fixed:"",prop:"word",label:"敏感词"}),u(D,{fixed:"",label:"操作",width:"150"},{default:p((e=>[u(G,{title:"确认删除此敏感词么?","icon-color":"red",onConfirm:l=>async function(e){if(0==x.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");(await b.delBadWords({id:e.id})).success&&m({type:"success",message:"删除敏感词成功成功！"}),visible.value=!1,q()}(e.row)},{reference:p((()=>[u(r,{link:"",type:"danger",size:"small"},{default:p((()=>l[10]||(l[10]=[c(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[X,j.value]]),u(K,{class:"flex justify-end mt-5"},{default:p((()=>[u(J,{"current-page":W.page,"onUpdate:currentPage":l[1]||(l[1]=e=>W.page=e),"page-size":W.size,"onUpdate:pageSize":l[2]||(l[2]=e=>W.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:B.value,onSizeChange:q,onCurrentChange:q},null,8,["current-page","page-size","total"])])),_:1})]),u(T,{modelValue:U.value,"onUpdate:modelValue":l[6]||(l[6]=e=>U.value=e),width:"650","show-close":!1,"destroy-on-close":""},{header:p((({close:e,titleId:a,titleClass:o})=>[n("div",z,[l[11]||(l[11]=n("div",null," 添加敏感词 ",-1)),n("div",{onClick:l[3]||(l[3]=e=>U.value=!1),style:{cursor:"pointer"}},[u(O,null,{default:p((()=>[u(L,{name:"close"})])),_:1})])])])),default:p((()=>[n("div",k,[u(Q,{ref_key:"addSensitivelFormRef",ref:E,rules:S,model:A,"label-width":"auto",style:{"max-width":"750px"}},{default:p((()=>[u(N,{label:"敏感词",prop:"word"},{default:p((()=>[u(o,{modelValue:A.word,"onUpdate:modelValue":l[4]||(l[4]=e=>A.word=e),size:"large",placeholder:"请输入添加的敏感词"},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])]),n("div",C,[u(r,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[5]||(l[5]=e=>U.value=!1)},{default:p((()=>l[12]||(l[12]=[c("取消 ")]))),_:1}),u(r,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:R},{default:p((()=>l[13]||(l[13]=[c(" 确认添加 ")]))),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-d6d194e3"]]);export{V as default};
