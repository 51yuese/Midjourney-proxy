
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{o as e}from"./order.7aa2b1e0.js";import{d as a,u as l,r as o,E as r,q as t,j as s,V as n,o as i,c as d,b as u,f as p,g as c,Y as f,X as m,e as g,h as y,t as v,w as h,I as w,O as x,au as b,_,n as k}from"../main-c47e4581.js";import{P as I,k as z,l as F,m as V}from"../index/index.6a62fca0.js";import{u as C}from"../utcformatTime/utcformatTime.f6db2c52.js";const j={class:"recharge_record_box"},B={class:"search_order_card"},U={style:{display:"flex","align-items":"center"}},P={style:{"margin-left":"10px"}},A={style:{"margin-left":"10px"}},Y={style:{"margin-left":"10px"}},M={style:{display:"flex","align-items":"center"}},D={style:{"margin-right":"24px"}},E={style:{"margin-top":"12px"}},O={key:0},T={key:1},q={key:0},R={key:1},S={key:0},N={key:1},X={key:0},G={key:1},H=a({__name:"index",setup(a){const _=l(),k=o(!1),H=o(!1);o([]),o();const J=o(0),K=o(0),L=r({keyword:"",platform:"",status:"",page:1,size:15}),Q=o([]);async function W(){k.value=!0;try{const a=await e.queryAllOrder(L);k.value=!1;const{rows:l,count:o,total_price:r}=a.data;J.value=o,Q.value=l,K.value=r}catch(a){k.value=!1}}function Z(){L.keyword="",L.platform="",L.status="",L.page=1,L.size=15,W()}async function $(){b.alert("确认删除所有未支付订单么? 数据删除后不可恢复","删除",{confirmButtonText:"确认",showCancelButton:!0,type:"warning",callback:a=>{if("confirm"==a){if(0==_.isUserModifyPermissions())return x.error("非超级管理员无权限操作！");H.value=!0;try{e.deleteNotPay(),x.success("删除未支付订单完成!"),W(),H.value=!1}catch(l){x.error("删除未支付订单失败!"),H.value=!1}}}})}return t((()=>{W()})),(a,l)=>{const o=s("el-input"),r=s("el-option"),t=s("el-select"),b=s("el-button"),ee=s("RefreshRight"),ae=s("el-icon"),le=s("el-table-column"),oe=s("el-tag"),re=s("el-popconfirm"),te=s("el-table"),se=s("el-pagination"),ne=s("el-row"),ie=n("loading");return i(),d("div",j,[u("div",B,[u("div",U,[u("div",null,[l[5]||(l[5]=u("div",{class:"condition_name"},"搜索关键字",-1)),p(o,{modelValue:L.keyword,"onUpdate:modelValue":l[0]||(l[0]=e=>L.keyword=e),placeholder:"用户名/呢称/手机号/邮箱",style:{width:"200px"}},null,8,["modelValue"])]),u("div",P,[l[6]||(l[6]=u("div",{class:"condition_name"},"支付平台",-1)),p(t,{clearable:"",modelValue:L.platform,"onUpdate:modelValue":l[1]||(l[1]=e=>L.platform=e),placeholder:"请选择支付平台",style:{width:"150px"}},{default:c((()=>[(i(!0),d(f,null,m(g(I),(e=>(i(),w(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),u("div",A,[l[7]||(l[7]=u("div",{class:"condition_name"},"是否支付",-1)),p(t,{clearable:"",modelValue:L.status,"onUpdate:modelValue":l[2]||(l[2]=e=>L.status=e),placeholder:"请选择支付状态",style:{width:"150px"}},{default:c((()=>[(i(!0),d(f,null,m(g(z),(e=>(i(),w(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),u("div",Y,[p(b,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",height:"32px",background:"#EFF6FF",color:"#60A5FA","border-radius":"8px","margin-top":"25px"},onClick:W},{default:c((()=>l[8]||(l[8]=[y(" 查询 ")]))),_:1})]),u("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:Z},[p(ae,{color:"#3B82F6",size:"20"},{default:c((()=>[p(ee)])),_:1})])]),u("div",M,[u("div",D,[p(b,{style:{"border-radius":"8px",border:"1px solid #FF3B30",color:"#FF3B30","font-size":"15px",height:"32px","margin-top":"25px"},onClick:$},{default:c((()=>l[9]||(l[9]=[y(" 删除所有未支付订单 ")]))),_:1})]),u("div",null,[p(b,{style:{"border-radius":"8px",border:"0px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"}},{default:c((()=>[y(" 已支付总金额："+v(K.value),1)])),_:1})])])]),u("div",E,[h((i(),w(te,{border:"",data:Q.value,height:"67vh",style:{width:"100%"},"tooltip-options":{}},{default:c((()=>[p(le,{prop:"orderId",label:"订单ID",width:"300"}),p(le,{prop:"userInfo.username",label:"用户名",width:"180"},{default:c((e=>[null==e.row.userInfo?(i(),d("div",O," -- ")):(i(),d("div",T,v(null==e.row.userInfo.username?"--":e.row.userInfo.username),1))])),_:1}),p(le,{prop:"userInfo.nickname",label:"用户昵称",width:"180"},{default:c((e=>[null==e.row.userInfo?(i(),d("div",q," -- ")):(i(),d("div",R,v(null==e.row.userInfo.nickname?"--":e.row.userInfo.nickname),1))])),_:1}),p(le,{prop:"userInfo.phone",label:"手机号",width:"180"},{default:c((e=>[null==e.row.userInfo?(i(),d("div",S," -- ")):(i(),d("div",N,v(null==e.row.userInfo.phone?"--":e.row.userInfo.phone),1))])),_:1}),p(le,{prop:"userInfo.email",label:"邮箱",width:"200"},{default:c((e=>[null==e.row.userInfo?(i(),d("div",X," -- ")):(i(),d("div",G,v(null==e.row.userInfo.email?"--":e.row.userInfo.email),1))])),_:1}),p(le,{prop:"goodsInfo.name",label:"套餐名称",width:"140"}),p(le,{prop:"price",label:"价格",width:"110"}),p(le,{prop:"total",label:"支付平台",width:"90",align:"center"},{default:c((e=>[y(v(g(F)[e.row.payPlatform]),1)])),_:1}),p(le,{prop:"status",label:"支付状态",width:"90",align:"center"},{default:c((e=>[p(oe,{type:1===e.row.status?"success":"warning"},{default:c((()=>[y(v(g(V)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),p(le,{prop:"createdAt",label:"支付时间",width:"200",align:"center"},{default:c((e=>[y(v(g(C)(e.row.updatedAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),p(le,{fixed:"right",label:"操作"},{default:c((a=>[p(re,{title:"确认删除此订单么、删除订单不可恢复?",width:"400","icon-color":"red",onConfirm:l=>async function(a){if(0==_.isUserModifyPermissions())return x.error("非超级管理员无权限操作！");const{orderId:l}=a;await e.deleteOrder({orderId:l}),x.success("删除订单完成!"),W()}(a.row)},{reference:c((()=>[p(b,{link:"",type:"danger",size:"small",loading:H.value},{default:c((()=>l[10]||(l[10]=[y(" 删除订单 ")]))),_:1},8,["loading"])])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[ie,k.value]]),p(ne,{class:"flex justify-end mt-5"},{default:c((()=>[p(se,{"current-page":L.page,"onUpdate:currentPage":l[3]||(l[3]=e=>L.page=e),"page-size":L.size,"onUpdate:pageSize":l[4]||(l[4]=e=>L.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:J.value,onSizeChange:W,onCurrentChange:W},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof k&&k(H);const J=_(H,[["__scopeId","data-v-dbc108dc"]]);export{J as default};