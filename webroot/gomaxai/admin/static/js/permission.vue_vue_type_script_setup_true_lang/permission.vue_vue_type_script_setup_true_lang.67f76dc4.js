
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,z as l,k as a,r as n,A as u,B as t,q as s,j as i,o,I as d,g as c,b as v,t as r,e as m,f as p,h,N as g,c as f,X as b,Y as x,s as y}from"../main-c47e4581.js";import{a as k}from"../access/access.ae69f1ea.js";const V={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},j={style:{padding:"0 20px 20px"}},_={style:{display:"flex","justify-content":"space-between"}},C={style:{"padding-left":"40px"}},w=e({__name:"permission",setup(e,{expose:w}){const F=l(),M=a(),U=n(!1),I=n({}),z=n([]),A=n([]),O=n(!1),R=u((()=>A.value.length>0&&A.value.length<z.value.length));function S(){O.value?A.value=z.value:A.value=[]}function q(e){var l;["UserManage","FundManage","OperateManagement","SystemSettings"].includes(e.name)||z.value.push(e.name),null==(l=null==e?void 0:e.children)||l.map((e=>q(e)))}function B(e){var l,a;const n=null==(l=null==e?void 0:e.children)?void 0:l.filter((e=>A.value.includes(e.name))).length;return n>0&&n!==(null==(a=null==e?void 0:e.children)?void 0:a.length)}async function E(){const e=M.getRoutes().filter((e=>A.value.includes(null==e?void 0:e.name))).map((e=>e.path));await k.saveRole(Object.assign(I.value,{access:A.value.join(","),accessLabel:e.join(",")})),U.value=!1}return t((()=>A.value.length),(e=>{O.value=e===z.value.length})),s((()=>{F.allMenus[0].children.map((e=>{q(e)}))})),w({open:function(e){U.value=!0,I.value=e,A.value=I.value.access?I.value.access.split(","):[]}}),(e,l)=>{const a=y,n=i("el-icon"),u=i("el-checkbox"),t=i("el-button"),s=i("el-checkbox-group"),k=i("el-dialog");return o(),d(k,{modelValue:m(U),"onUpdate:modelValue":l[3]||(l[3]=e=>g(U)?U.value=e:null),width:"1200","show-close":!1,"destroy-on-close":""},{header:c((()=>[v("div",V,[v("div",null,r(m(I).name)+"权限管理 ",1),v("div",{style:{cursor:"pointer"},onClick:l[0]||(l[0]=e=>U.value=!1)},[p(n,null,{default:c((()=>[p(a,{name:"close"})])),_:1})])])])),default:c((()=>[v("div",j,[v("div",_,[p(u,{modelValue:m(O),"onUpdate:modelValue":l[1]||(l[1]=e=>g(O)?O.value=e:null),indeterminate:m(R),onChange:S},{default:c((()=>l[4]||(l[4]=[h(" 全选 ")]))),_:1},8,["modelValue","indeterminate"]),p(t,{bg:"",text:"",type:"danger",onClick:E},{default:c((()=>l[5]||(l[5]=[h(" 更新权限 ")]))),_:1})]),(o(!0),f(x,null,b(m(F).allMenus[0].children,(e=>(o(),f("div",{key:e.name},[(o(!0),f(x,null,b(e.children,(e=>(o(),d(s,{key:e.name,modelValue:m(A),"onUpdate:modelValue":l[2]||(l[2]=e=>g(A)?A.value=e:null)},{default:c((()=>{var l;return[p(u,{indeterminate:B(e),label:null==(l=e.meta)?void 0:l.title,value:e.name,onChange:l=>function(e,l){var a,n;e?null==(a=null==l?void 0:l.children)||a.map((e=>A.value.push(e.name))):null==(n=null==l?void 0:l.children)||n.map((e=>{const l=A.value.findIndex((l=>l===e.name));A.value.splice(l,1)}))}(l,e)},null,8,["indeterminate","label","value","onChange"]),v("div",C,[(o(!0),f(x,null,b(e.children,(l=>{var a;return o(),d(u,{key:l.name,label:null==(a=l.meta)?void 0:a.title,value:l.name,onChange:l=>function(e,l){var a;const n=A.value.includes(l.name),u=null==(a=null==l?void 0:l.children)?void 0:a.filter((e=>A.value.includes(e.name))).length;if(e&&!n)A.value.push(l.name);else if(0===u){const e=A.value.findIndex((e=>e===l.name));A.value.splice(e,1)}}(l,e)},null,8,["label","value","onChange"])})),128))])]})),_:2},1032,["modelValue"])))),128))])))),128))])])),_:1},8,["modelValue"])}}});export{w as _};
