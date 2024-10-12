
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,C as r,G as o,x as t,j as s,V as i,o as d,c as u,b as n,f as p,g as c,h as m,w as g,J as f,t as b,e as v,$ as y,P as _,y as h,p as x,k as w,_ as V}from"../main-2d3d97e8.js";import{A as F}from"./package.73c23856.js";import{u as k}from"../utcformatTime/utcformatTime.f6db2c52.js";const z={class:"search_add_card"},P={style:{display:"flex","align-items":"center"}},C=(e=>(x("data-v-1fe6f18e"),e=e(),w(),e))((()=>n("div",{class:"condition_name"},"套餐状态",-1))),U={style:{"margin-left":"10px"}},j={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},q={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},A={class:"form_item_div"},M={class:"form_item_div"},B={class:"form_item_div"},Y={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},D=V(e({__name:"integralCombo",setup(e){const x=l(),w=a(0),V=a([]),D=a(!1),E=a(!1),I=a(),R=a(0),S=r((()=>R.value?"更新套餐":"新增套餐")),T=r((()=>R.value?"确认更新":"确认新增")),G=o({page:1,seze:15,type:1,status:""}),J=o({id:0,name:"",type:1,order:10,originPrice:0,price:0,days:0,score:1,des:"",scope:"",status:0}),O=o({name:[{required:!0,message:"请输入套餐名称",trigger:"blur"}],order:[{required:!0,message:"请输入套餐排序",trigger:"blur"}],originPrice:[{required:!0,message:"请输入套餐原价",trigger:"blur"}],price:[{required:!0,message:"请输入套餐折扣价",trigger:"blur"}],score:[{required:!0,message:"请输入赠送积分的额度",trigger:"blur"}],des:[{required:!0,message:"请输入套餐描述",trigger:"blur"}],scope:[{required:!0,message:"请输入权益描述",trigger:"blur"}],status:[{required:!0,message:"",trigger:"blur"}]});async function $(){try{D.value=!0;const e=await F.queryAllPackage(G);D.value=!1;const{rows:l,count:a}=e.data;w.value=a,V.value=l}catch(e){D.value=!1}}function H(){G.type=1,G.page=1,G.seze=15,G.status="",$()}function K(){R.value=0,J.id=0,J.name="",J.type=1,J.order=10,J.originPrice=0,J.price=0,J.days=0,J.score=1,J.des="",J.scope="",J.status=0,E.value=!0}function L(){I.value.validate((async e=>{if(e){if(0==x.isUserModifyPermissions())return _.error("非超级管理员无权限操作！");if(0==R.value){delete J.id;if(200!=(await F.createPackage(J)).code)return void _({type:"warning",message:res.data});_({type:"success",message:"套餐新增成功！"}),E.value=!1,$()}else{J.id=R.value;const e=await F.updatePackage(J);if(200!=e.code)return void _({type:"warning",message:e.data});_({type:"success",message:"套餐修改成功！"}),E.value=!1,$()}}}))}return t((()=>{$()})),(e,l)=>{const a=s("el-alert"),r=s("el-option"),o=s("el-select"),t=s("el-button"),N=s("RefreshRight"),Q=s("el-icon"),W=s("el-table-column"),X=s("el-tag"),Z=s("el-popconfirm"),ee=s("el-table"),le=s("el-pagination"),ae=s("el-row"),re=h,oe=s("el-input"),te=s("el-form-item"),se=s("el-switch"),ie=s("el-form"),de=s("el-dialog"),ue=i("loading");return d(),u("div",null,[n("div",null,[n("div",null,[p(a,{closable:!1,"show-icon":"",title:"说明",description:"积分套餐是不限制使用时间，用完为止，可叠加充值",type:"warning"})]),n("div",z,[n("div",P,[n("div",null,[C,p(o,{clearable:"",modelValue:G.status,"onUpdate:modelValue":l[0]||(l[0]=e=>G.status=e),placeholder:"请选择套餐状态",style:{width:"150px"}},{default:c((()=>[p(r,{label:"启用",value:1}),p(r,{label:"禁用",value:0})])),_:1},8,["modelValue"])]),n("div",U,[p(t,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",height:"32px",background:"#EFF6FF",color:"#60A5FA","border-radius":"8px","margin-top":"25px"},onClick:$},{default:c((()=>[m(" 查询 ")])),_:1})]),n("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:H},[p(Q,{color:"#3B82F6",size:"20"},{default:c((()=>[p(N)])),_:1})])]),n("div",null,[p(t,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:K},{default:c((()=>[m(" 新增积分套餐 ")])),_:1})])]),n("div",null,[g((d(),f(ee,{border:"","highlight-current-row":"",data:V.value,style:{width:"100%"},"max-height":"70vh"},{default:c((()=>[p(W,{prop:"order",label:"排序ID"}),p(W,{prop:"name",label:"套餐名称"}),p(W,{prop:"originPrice",label:"套餐原价"}),p(W,{prop:"price",label:"套餐折扣价"}),p(W,{prop:"score",label:"积分额度"}),p(W,{prop:"status",label:"套餐状态"},{default:c((e=>[n("div",null,[1==e.row.status?(d(),f(X,{key:0,type:"primary"},{default:c((()=>[m("启用")])),_:1})):(d(),f(X,{key:1,type:"danger"},{default:c((()=>[m("禁用")])),_:1}))])])),_:1}),p(W,{prop:"createdAt",label:"创建时间",width:"190"},{default:c((e=>[n("div",null,b(v(k)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),p(W,{fixed:"right",label:"操作",width:"160"},{default:c((e=>[p(t,{style:{border:"none",color:"#3B82F6","font-size":"13px","background-color":"transparent"},onClick:l=>function(e){R.value=e.id;const{id:l,name:a,type:r,order:o,originPrice:t,price:s,score:i,des:d,scope:u,status:n}=e;y((()=>{Object.assign(J,{id:l,name:a,type:r,order:o,originPrice:t,price:s,score:i,des:d,scope:u,status:n})})),E.value=!0}(e.row)},{default:c((()=>[m("编辑 ")])),_:2},1032,["onClick"]),p(Z,{title:"确认删除此套餐么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){if(0==x.isUserModifyPermissions())return _.error("非超级管理员无权限操作！");const l=await F.delPackage({ids:[e.id]});200==l.code?(_({type:"success",message:"套餐删除成功！"}),$()):_({type:"warning",message:l.data})}(e.row)},{reference:c((()=>[p(t,{style:{border:"none",color:"#FF3B30","font-size":"13px","background-color":"transparent"}},{default:c((()=>[m("删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[ue,D.value]])]),p(ae,{class:"flex justify-end mt-3"},{default:c((()=>[p(le,{"current-page":G.page,"onUpdate:currentPage":l[1]||(l[1]=e=>G.page=e),"page-size":G.size,"onUpdate:pageSize":l[2]||(l[2]=e=>G.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:w.value,onSizeChange:$,onCurrentChange:$},null,8,["current-page","page-size","total"])])),_:1})]),p(de,{modelValue:E.value,"onUpdate:modelValue":l[13]||(l[13]=e=>E.value=e),width:"750","show-close":!1,"destroy-on-close":""},{header:c((({close:e,titleId:a,titleClass:r})=>[n("div",j,[n("div",null,b(S.value),1),n("div",{onClick:l[3]||(l[3]=e=>E.value=!1),style:{cursor:"pointer"}},[p(Q,null,{default:c((()=>[p(re,{name:"close"})])),_:1})])])])),default:c((()=>[n("div",q,[p(ie,{"label-width":"110px",model:J,rules:O,ref_key:"formRef",ref:I},{default:c((()=>[n("div",A,[p(te,{label:"套餐名称",prop:"name"},{default:c((()=>[p(oe,{modelValue:J.name,"onUpdate:modelValue":l[4]||(l[4]=e=>J.name=e),class:"form_input",size:"large",placeholder:"请输入套餐名称"},null,8,["modelValue"])])),_:1}),p(te,{label:"套餐排序",prop:"order"},{default:c((()=>[p(oe,{modelValue:J.order,"onUpdate:modelValue":l[5]||(l[5]=e=>J.order=e),modelModifiers:{number:!0},class:"form_input",size:"large",placeholder:"请输入套餐排序"},null,8,["modelValue"])])),_:1})]),n("div",M,[p(te,{label:"套餐原价",prop:"originPrice"},{default:c((()=>[p(oe,{modelValue:J.originPrice,"onUpdate:modelValue":l[6]||(l[6]=e=>J.originPrice=e),modelModifiers:{number:!0},class:"form_input",size:"large",placeholder:"请输入套餐原价"},null,8,["modelValue"])])),_:1}),p(te,{label:"套餐折扣价",prop:"price"},{default:c((()=>[p(oe,{modelValue:J.price,"onUpdate:modelValue":l[7]||(l[7]=e=>J.price=e),modelModifiers:{number:!0},class:"form_input",size:"large",placeholder:"请输入套餐折扣价"},null,8,["modelValue"])])),_:1})]),n("div",B,[p(te,{label:"赠送积分额度",prop:"score"},{default:c((()=>[p(oe,{modelValue:J.score,"onUpdate:modelValue":l[8]||(l[8]=e=>J.score=e),modelModifiers:{number:!0},class:"form_input",size:"large",placeholder:"请输入所赠送积分额度"},null,8,["modelValue"])])),_:1})]),p(te,{label:"套餐描述",prop:"des"},{default:c((()=>[p(oe,{modelValue:J.des,"onUpdate:modelValue":l[9]||(l[9]=e=>J.des=e),size:"large",placeholder:"请输入套餐描述"},null,8,["modelValue"])])),_:1}),p(te,{label:"权益描述",prop:"scope"},{default:c((()=>[p(oe,{modelValue:J.scope,"onUpdate:modelValue":l[10]||(l[10]=e=>J.scope=e),size:"large",placeholder:"请输入权益描述"},null,8,["modelValue"])])),_:1}),p(te,{label:"套餐状态",prop:"status"},{default:c((()=>[p(se,{modelValue:J.status,"onUpdate:modelValue":l[11]||(l[11]=e=>J.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])]),n("div",Y,[p(t,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[12]||(l[12]=e=>E.value=!1)},{default:c((()=>[m("取消 ")])),_:1}),p(t,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:L},{default:c((()=>[m(b(T.value),1)])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-1fe6f18e"]]);export{D as default};
