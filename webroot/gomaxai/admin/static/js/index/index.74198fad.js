
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as t,S as a,r as e,j as s,o,c as i,R as l,Y as n,h as d,t as p,J as r,e as c,f as g,g as m,G as u,H as f,s as y,_ as h}from"../main-31e47da4.js";const v={key:0,class:"title-container"},k=t({name:"PageMain"}),S=h(t({...k,props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""},bottomPadding:{type:String,default:"0px"},bottomMargin:{type:String,default:"20px"}},setup(t){const h=t,k=!!a().title,S=e(h.collaspe);function _(){S.value=!1}return(a,e)=>{const h=y,b=s("el-icon");return o(),i("div",{class:u(["page-main",{"is-collaspe":c(S)}]),style:f({height:c(S)?t.height:"",paddingBottom:t.bottomPadding||"",marginBottom:t.bottomMargin||""})},[k||t.title?(o(),i("div",v,[k?l(a.$slots,"title",{key:0},void 0,!0):(o(),i(n,{key:1},[d(p(t.title),1)],64))])):r("",!0),l(a.$slots,"default",{},void 0,!0),c(S)?(o(),i("div",{key:1,class:"collaspe",title:"展开",onClick:_},[g(b,null,{default:m((()=>[g(h,{name:"ep:arrow-down"})])),_:1})])):r("",!0)],6)}}}),[["__scopeId","data-v-02915703"]]);export{S as _};
