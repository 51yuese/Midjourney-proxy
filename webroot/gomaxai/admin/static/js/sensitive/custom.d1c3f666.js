
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.1e4219c7.js";import{d as a,a as l,r as s,E as t,A as o,q as u,j as d,V as n,o as r,c as i,f as c,g as f,e as m,av as p,l as y,m as v,Y as w,X as _,h as b,w as h,I as x,N as V,P as g,O as k,t as W,n as j}from"../main-c47e4581.js";import{A as C}from"../badWords/badWords.506a1e47.js";import{o as B}from"../index/index.6a62fca0.js";const z=a({__name:"custom",setup(a){const j=l(),z=s(),K=s(0),P=s(!1),U=t({word:"",status:"",page:1,size:500}),q=o((()=>j.settings.app.colorScheme)),A=s([]);async function I(){try{P.value=!0;const e=await C.queryBadWords(U),{rows:a,count:l}=e.data;P.value=!1,K.value=l,A.value=a}catch(e){P.value=!1}}u((()=>{I()}));const N=s(""),R=s(!1),E=s();function F(){R.value=!0,g((()=>{E.value.input.focus()}))}async function M(){N.value&&(await C.addBadWords({word:N.value}),k.success("添加敏感词成功"),U.status="",await I()),R.value=!1,N.value=""}return(a,l)=>{const s=d("el-alert"),t=e,o=d("el-form-item"),u=d("el-option"),g=d("el-select"),j=d("el-button"),K=d("el-form"),O=d("el-tag"),S=n("loading");return r(),i("div",null,[c(t,{bottomPadding:"20px"},{default:f((()=>[c(s,{closable:!1,"show-icon":"",title:"敏感词说明",description:"当前为自定义敏感词、触发敏感词将自动拦截、如配置过三方平台、自定义检测将在三方平台通过后最后进行检测！",type:"success"})])),_:1}),c(t,null,{default:f((()=>[c(K,{ref_key:"formRef",ref:z,inline:!0,model:U},{default:f((()=>[c(o,{label:"敏感词",prop:"word"},{default:f((()=>[c(m(p),{modelValue:U.word,"onUpdate:modelValue":l[0]||(l[0]=e=>U.word=e),placeholder:"敏感词[模糊搜索]",onKeydown:y(v(I,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),c(o,{label:"敏感词状态",prop:"status"},{default:f((()=>[c(g,{modelValue:U.status,"onUpdate:modelValue":l[1]||(l[1]=e=>U.status=e),placeholder:"请选择敏感词状态",clearable:"",style:{width:"192px"}},{default:f((()=>[(r(!0),i(w,null,_(m(B),(e=>(r(),x(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(o,null,{default:f((()=>[c(j,{type:"primary",onClick:I},{default:f((()=>l[4]||(l[4]=[b(" 查询 ")]))),_:1}),c(j,{onClick:l[2]||(l[2]=e=>{return null==(a=m(z))||a.resetFields(),void I();var a})},{default:f((()=>l[5]||(l[5]=[b(" 重置 ")]))),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),h((r(),x(t,{style:{width:"100%"},bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[(r(!0),i(w,null,_(m(A),(e=>(r(),x(O,{key:e.id,type:"warning",class:"mr-3 mb-3",closable:"",hit:"",effect:m(q),"disable-transitions":!0,onClose:a=>async function(e){await C.delBadWords({id:e}),k.success("删除敏感词成功"),await I()}(e.id)},{default:f((()=>[b(W(e.word),1)])),_:2},1032,["effect","onClose"])))),128)),m(R)?(r(),x(m(p),{key:0,ref_key:"InputRef",ref:E,modelValue:m(N),"onUpdate:modelValue":l[3]||(l[3]=e=>V(N)?N.value=e:null),class:"ml-1",style:{width:"80px"},size:"small",onKeyup:y(M,["enter"]),onBlur:M},null,8,["modelValue"])):(r(),x(j,{key:1,class:"ml-1",size:"small",onClick:F},{default:f((()=>l[6]||(l[6]=[b(" + New Word ")]))),_:1}))])),_:1})),[[S,m(P)]])])}}});"function"==typeof j&&j(z);export{z as default};
