
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{x as e,d as s,i as a,k as o,u as l,a as t,y as d,z as r,A as i,B as n,q as u,C as p,D as m,r as g,E as c,F as w,j as b,o as f,c as v,b as x,f as y,G as h,e as P,H as k,I as j,J as _,g as M,T as C,w as F,v as V,K as S,L as z,M as D,h as N,N as I,O as A,s as L,P as q,_ as B}from"../main-31e47da4.js";import{_ as H}from"../index/index.5576e1b5.js";import T from"../views/link.68d3715d.js";import U from"../Header/index.aa2e0394.js";import $ from"../MainSidebar/index.45d984e3.js";import E from"../SubSidebar/index.a7adffd0.js";import R from"../Topbar/index.64d7e4c1.js";import G from"../Search/index.d043d361.js";import J from"../HotkeysIntro/index.fcc71624.js";import K from"../AppSetting/index.0c09db7b.js";import{u as O}from"../useMenu/useMenu.af3dc465.js";import"../index/index.74198fad.js";import"../Logo/index.17b9992e.js";import"../Tools/index.537bd416.js";import"../index/index.506e3685.js";import"../access/access.7995b835.js";import"../SidebarItem/index.560ccfa0.js";const Q={class:"layout"},W={id:"app-main"},X={class:"wrapper"},Y={key:1,class:"main"},Z={key:0},ee={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},se={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},ae={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},oe=s({name:"Layout"}),le=B(s({...oe,setup(s){const B=a(),oe=o(),le=l(),te=t(),de=d(),re=r(),ie=i((()=>le.getModifyPasswordDialog())),ne=i((()=>!!B.meta.link));n((()=>te.settings.menu.subMenuCollapse),(e=>{"mobile"===te.mode&&(e?document.body.classList.remove("overflow-hidden"):document.body.classList.add("overflow-hidden"))})),n((()=>B.path),(()=>{"mobile"===te.mode&&te.$patch((e=>{e.settings.menu.subMenuCollapse=!0}))})),u((()=>{p("f5",(s=>{te.settings.toolbar.enablePageReload&&(s.preventDefault(),e.push({name:"reload"}))})),p("alt+`",(e=>{te.settings.menu.enableHotkeys&&(e.preventDefault(),O().switchTo(re.actived+1<re.allMenus.length?re.actived+1:0))}))})),m((()=>{p.unbind("f5"),p.unbind("alt+`")}));const ue=g(),pe=g({oldPassword:"",newPassword:"",repeatNewPassword:""}),me=c({oldPassword:[{required:!0,message:"原密码不能为空",trigger:"blur"},{min:6,message:"长度不能少于6位",trigger:"blur"}],newPassword:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,message:"长度不能少于6位",trigger:"blur"}],repeatNewPassword:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,message:"长度不能少于6位",trigger:"blur"}]});function ge(){ue.value.validate((async e=>{var s,a,o,l;if(!e)return;if((null==(s=pe.value)?void 0:s.newPassword)!=(null==(a=pe.value)?void 0:a.repeatNewPassword))return void A.error("两次输入的密码不一致");const t=await le.editPassword({password:null==(o=pe.value)?void 0:o.newPassword,oldPassword:null==(l=pe.value)?void 0:l.oldPassword});200==t.code?(A.success(t.data),le.updateModifyPasswordDialog(!1),le.logout().then((()=>{oe.push({name:"login"})}))):A.error(t.data)}))}const ce=w(!0);return n((()=>te.saasId),(()=>{ce.value=!1,q((()=>{ce.value=!0}))})),(e,s)=>{const a=b("router-view"),o=H,l=b("el-backtop"),t=L,d=b("el-icon"),r=b("el-input"),i=b("el-form-item"),n=b("el-form"),u=b("el-button"),p=b("el-dialog");return f(),v("div",Q,[x("div",W,[y(U),x("div",X,[x("div",{class:h(["sidebar-container",{show:"mobile"===P(te).mode&&!P(te).settings.menu.subMenuCollapse}])},[y($),y(E)],2),x("div",{class:h(["sidebar-mask",{show:"mobile"===P(te).mode&&!P(te).settings.menu.subMenuCollapse}]),onClick:s[0]||(s[0]=e=>P(te).toggleSidebarCollapse())},null,2),x("div",{class:"main-container",style:k({"padding-bottom":e.$route.meta.paddingBottom})},["head"!==P(te).settings.menu.menuMode||P(te).settings.menu.enableSubMenuCollapseButton||P(te).settings.breadcrumb.enable?(f(),j(R,{key:0})):_("",!0),P(ce)?(f(),v("div",Y,[y(a,null,{default:M((({Component:e,route:s})=>[y(C,{name:"main",mode:"out-in",appear:""},{default:M((()=>[(f(),j(z,{include:P(de).list},[F((f(),j(S(e),{key:s.fullPath})),[[V,!P(ne)]])],1032,["include"]))])),_:2},1024)])),_:1}),P(ne)?(f(),j(T,{key:0})):_("",!0)])):_("",!0),y(o)],4)]),y(l,{right:20,bottom:20,title:"回到顶部"})]),y(G),y(J),P(te).settings.app.enableAppSetting?(f(),v("div",Z,[y(d,{class:"app-setting",onClick:s[1]||(s[1]=e=>P(D).emit("global-app-setting-toggle"))},{default:M((()=>[y(t,{name:"ep:setting"})])),_:1}),y(K)])):_("",!0),y(p,{modelValue:P(ie),"onUpdate:modelValue":s[7]||(s[7]=e=>I(ie)?ie.value=e:null),width:"400","show-close":!1,"destroy-on-close":""},{header:M((({close:e,titleId:a,titleClass:o})=>[x("div",ee,[s[8]||(s[8]=x("div",null," 修改密码 ",-1)),x("div",{onClick:s[2]||(s[2]=e=>P(le).updateModifyPasswordDialog(!1)),style:{cursor:"pointer"}},[y(d,null,{default:M((()=>[y(t,{name:"close"})])),_:1})])])])),default:M((()=>[x("div",se,[y(n,{ref_key:"modifyPasswordFormRef",ref:ue,rules:P(me),model:P(pe),"label-width":"auto",style:{"max-width":"400px"}},{default:M((()=>[y(i,{label:"原密码",prop:"oldPassword",size:"large"},{default:M((()=>[y(r,{size:"large",placeholder:"请输入原密码",modelValue:P(pe).oldPassword,"onUpdate:modelValue":s[3]||(s[3]=e=>P(pe).oldPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1}),y(i,{label:"新密码",prop:"newPassword",size:"large"},{default:M((()=>[y(r,{size:"large",placeholder:"请输入新密码",modelValue:P(pe).newPassword,"onUpdate:modelValue":s[4]||(s[4]=e=>P(pe).newPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1}),y(i,{label:"重复新密码",prop:"repeatNewPassword",size:"large"},{default:M((()=>[y(r,{size:"large",placeholder:"请重复输入新密码",modelValue:P(pe).repeatNewPassword,"onUpdate:modelValue":s[5]||(s[5]=e=>P(pe).repeatNewPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])]),x("div",ae,[y(u,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:s[6]||(s[6]=e=>P(le).updateModifyPasswordDialog(!1))},{default:M((()=>s[9]||(s[9]=[N("取消 ")]))),_:1}),y(u,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:ge},{default:M((()=>s[10]||(s[10]=[N(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-75af11bb"]]);export{le as default};
