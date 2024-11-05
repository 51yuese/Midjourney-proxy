
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as l,E as s,j as t,o as d,I as o,g as n,b as r,t as c,e as i,f as u,N as m,h as p,c as h,X as g,Y as f,O as b,s as v,_ as x}from"../main-31e47da4.js";import{a as y,M as w}from"../index/index.6a62fca0.js";import{a as _}from"../access/access.7995b835.js";const k={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},V={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)",height:"60vh","overflow-y":"scroll","overflow-x":"hidden"}},A={class:"access-list"},F={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},j=x(e({__name:"manager",emits:["fresh"],setup(e,{expose:x,emit:j}){const C=a(),U=l(!1),I=l(""),O=l(""),N=l(),E=l(y);l(w);const J=l(!1),S=s({username:"",password:"",role:"manager",access:""}),q=j,M=s({username:[{required:!0,message:"请填写登录账号",trigger:"blur"},{min:4,message:"最小长度4"},{max:30,message:"最大长度30"}],password:[{required:!0,message:"请填写登录密码",trigger:"blur"},{min:6,message:"最小长度6"}]});const z=async e=>{const a=E.value;await(null==e?void 0:e.validate((async e=>{if(e){if(0==C.isUserModifyPermissions())return b.error("非超级管理员无权限操作！");O.value?await R({id:O.value,...S,access:JSON.stringify(a)}):await B({...S,access:JSON.stringify(a)}),q("fresh",!0),U.value=!1,Object.assign(S,{})}})))},B=async e=>(await _.addAccess(e),b.success("添加管理员成功！"),!0),P=async e=>await _.getAccess(e).then((e=>e.data)),R=async e=>{await _.updateAccess(e),b.success("编辑管理员成功！")},X=()=>{J.value=E.value.every((e=>e.checkAll))},Y=e=>{D(e)},D=e=>{E.value.forEach((a=>{a.checkAll=e,a.checked=e?a.children.map((e=>e.value)):[],a.isIndeterminate=a.checked.length>0&&a.checked.length<a.children.length}))};return x({open:function(e){U.value=!0,O.value=e||"",I.value=e?"编辑管理员":"添加管理员",e?P({id:e}).then((e=>{Object.assign(S,e),E.value=e.access&&JSON.parse(e.access)})):(Object.assign(S,{username:"",password:"",role:"manager",access:""}),E.value=y)}}),(e,a)=>{const l=v,s=t("el-icon"),b=t("el-input"),x=t("el-form-item"),y=t("el-col"),w=t("el-checkbox"),_=t("el-checkbox-group"),j=t("el-row"),C=t("el-form"),q=t("el-button"),B=t("el-dialog");return d(),o(B,{modelValue:i(U),"onUpdate:modelValue":a[6]||(a[6]=e=>m(U)?U.value=e:null),width:"1200","show-close":!1,"destroy-on-close":""},{header:n((({close:e,titleId:t,titleClass:d})=>[r("div",k,[r("div",null,c(i(I)),1),r("div",{onClick:a[0]||(a[0]=e=>U.value=!1),style:{cursor:"pointer"}},[u(s,null,{default:n((()=>[u(l,{name:"close"})])),_:1})])])])),default:n((()=>[r("div",V,[u(C,{model:S,"label-position":"right",ref_key:"formRef",ref:N,rules:M,inline:!1,"label-width":"80px"},{default:n((()=>[u(j,{gutter:16},{default:n((()=>[u(y,{span:6},{default:n((()=>[u(x,{label:"登录账号",prop:"username"},{default:n((()=>[u(b,{modelValue:S.username,"onUpdate:modelValue":a[1]||(a[1]=e=>S.username=e),disabled:""!==i(O),placeholder:"输入管理员登录账号",clearable:"",maxlength:"50"},null,8,["modelValue","disabled"])])),_:1})])),_:1}),u(y,{span:6},{default:n((()=>[u(x,{label:"登录密码",prop:"password"},{default:n((()=>[u(b,{modelValue:S.password,"onUpdate:modelValue":a[2]||(a[2]=e=>S.password=e),disabled:""!==i(O),placeholder:"输入管理员登录密码",clearable:"",maxlength:"50"},null,8,["modelValue","disabled"])])),_:1})])),_:1}),u(y,{span:24},{default:n((()=>[u(x,{label:"权限设置",style:{"margin-bottom":"0"}},{default:n((()=>[u(w,{modelValue:i(J),"onUpdate:modelValue":a[3]||(a[3]=e=>m(J)?J.value=e:null),onChange:Y},{default:n((()=>a[7]||(a[7]=[p("全部选择")]))),_:1},8,["modelValue"])])),_:1}),u(x,{"label-width":"30px"},{default:n((()=>[r("ul",A,[(d(!0),h(f,null,g(i(E),(e=>(d(),h("li",null,[u(w,{modelValue:e.checkAll,"onUpdate:modelValue":a=>e.checkAll=a,indeterminate:e.isIndeterminate,onChange:a=>((e,a)=>{e.checked=a?e.children.map((e=>e.value)):[],e.isIndeterminate=!1,X()})(e,e.checkAll)},{default:n((()=>[p(c(e.name),1)])),_:2},1032,["modelValue","onUpdate:modelValue","indeterminate","onChange"]),u(_,{modelValue:e.checked,"onUpdate:modelValue":a=>e.checked=a,onChange:a=>((e,a)=>{const l=e.length;a.checkAll=l===a.children.length,a.isIndeterminate=l>0&&l<a.children.length,X()})(a,e)},{default:n((()=>[(d(!0),h(f,null,g(e.children,(e=>(d(),o(w,{style:{"margin-left":"30px"},value:e.value},{default:n((()=>[p(c(e.label),1)])),_:2},1032,["value"])))),256))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])))),256))])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])]),r("div",F,[u(q,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[4]||(a[4]=e=>U.value=!1)},{default:n((()=>a[8]||(a[8]=[p("取消 ")]))),_:1}),u(q,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:a[5]||(a[5]=e=>z(i(N)))},{default:n((()=>a[9]||(a[9]=[p(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-1b32c7f0"]]);export{j as default};