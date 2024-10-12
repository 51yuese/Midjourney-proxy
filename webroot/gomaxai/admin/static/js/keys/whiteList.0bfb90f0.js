
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.7b018e8d.js";import{d as a,r as l,G as t,C as s,x as u,j as o,U as r,o as n,c as i,f as d,g as c,h as p,w as m,J as f,e as v,t as g,b as y,V as b,W as h,K as w,m as _,n as k,S as V,Z as z,P as x,q as C}from"../main-5b9099dc.js";import{A as U}from"../chatgpt/chatgpt.3399f5ae.js";import{E as j,d as I}from"../index/index.7e2cb35b.js";import{u as q}from"../utcformatTime/utcformatTime.f6db2c52.js";const Y={class:"flex justify-end mr-5"},A=a({__name:"whiteList",setup(a){const C=l(),A=l(0),P=l(!1),W=l(!1),K=l([]),M=l(0),S=t({page:1,size:10}),T=s((()=>A.value?"更新用户":"新增用户")),D=s((()=>A.value?"确认更新":"确认新增")),E=l([]),G=t({userId:"",status:1,count:10}),L=t({userId:[{required:!0,message:"请选择白名单用户",trigger:"change"}],status:[{required:!0,message:"请选择当前用户状态",trigger:"change"}],count:[{required:!0,message:"请填写限制使用次数",trigger:"blur"}]});async function R(e){const a=await V.queryAllUser({size:30,username:e});E.value=a.data.rows}async function Z(){try{P.value=!0;const e=await U.queryWhiteUserList(S);P.value=!1;const{rows:a,count:l}=e.data;K.value=a,M.value=l}catch(e){P.value=!1}}function F(e){null==e||e.validate((async e=>{e&&(A.value?(await U.updateWhiteUser({id:A.value,...G}),x.success("修改白名单用户成功")):(await U.addWhiteUser(G),x.success("添加白名单用户成功")),W.value=!1,Z())}))}return u((()=>{Z()})),(a,l)=>{const t=o("el-alert"),s=o("el-button"),u=e,V=o("el-table-column"),x=o("el-tag"),U=o("el-table"),J=o("el-pagination"),O=o("el-row"),$=o("el-option"),B=o("el-select"),H=o("el-form-item"),N=o("el-input"),Q=o("el-switch"),X=o("el-form"),ee=o("el-dialog"),ae=r("loading");return n(),i("div",null,[d(u,null,{default:c((()=>[d(t,{closable:!1,"show-icon":"",title:"KEY池说明",description:"所有key会按key绑定的模型自动划分为卡池3模型与卡池4模型、key余额耗尽将会自动锁定、每张key支持单独绑定模型与代理、已经上下文长度设置、如果不设置默认以全局配置为准！",type:"success"}),d(s,{class:"mt-5",type:"primary",onClick:l[0]||(l[0]=e=>W.value=!0)},{default:c((()=>[p(" 添加白名单用户[添加用户可以使用GPT4模型] ")])),_:1})])),_:1}),d(u,null,{default:c((()=>[m((n(),f(U,{border:"",data:K.value,style:{width:"100%"},size:"large"},{default:c((()=>[d(V,{prop:"username",label:"用户昵称"}),d(V,{prop:"email",label:"用户邮箱"}),d(V,{prop:"useCount",label:"调用次数"}),d(V,{prop:"count",label:"剩余额度"}),d(V,{prop:"status",align:"center",label:"启用状态"},{default:c((e=>[d(x,{type:v(j)[e.row.status]},{default:c((()=>[p(g(v(I)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),d(V,{prop:"createdAt",align:"center",label:"添加时间"},{default:c((e=>[p(g(v(q)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),d(V,{label:"操作"},{default:c((e=>[d(s,{link:"",type:"primary",size:"small",onClick:a=>function(e){A.value=e.id;const{userId:a,count:l,status:t}=e;z((()=>{Object.assign(G,{userId:a,count:l,status:t})})),W.value=!0}(e.row)},{default:c((()=>[p(" 变更 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ae,P.value]]),d(O,{class:"flex justify-end mt-5"},{default:c((()=>[d(J,{"current-page":v(S).page,"onUpdate:currentPage":l[1]||(l[1]=e=>v(S).page=e),"page-size":v(S).size,"onUpdate:pageSize":l[2]||(l[2]=e=>v(S).size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:M.value,onSizeChange:Z,onCurrentChange:Z},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),d(ee,{modelValue:W.value,"onUpdate:modelValue":l[9]||(l[9]=e=>W.value=e),"close-on-click-modal":!1,title:v(T),width:"400",onClose:l[10]||(l[10]=e=>{return a=C.value,A.value=0,void(null==a||a.resetFields());var a})},{footer:c((()=>[y("span",Y,[d(s,{onClick:l[7]||(l[7]=e=>W.value=!1)},{default:c((()=>[p("取消")])),_:1}),d(s,{type:"primary",onClick:l[8]||(l[8]=e=>F(C.value))},{default:c((()=>[p(g(v(D)),1)])),_:1})])])),default:c((()=>[d(X,{ref_key:"formPackageRef",ref:C,"label-position":"right","label-width":"100px",model:v(G),rules:v(L)},{default:c((()=>[A.value?w("",!0):(n(),f(H,{key:0,label:"用户昵称",prop:"userId"},{default:c((()=>[d(B,{modelValue:v(G).userId,"onUpdate:modelValue":l[3]||(l[3]=e=>v(G).userId=e),filterable:"",clearable:"",style:{width:"100%"},remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":R},{default:c((()=>[(n(!0),i(b,null,h(E.value,(e=>(n(),f($,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})),d(H,{label:"限制次数",prop:"count"},{default:c((()=>[d(N,{modelValue:v(G).count,"onUpdate:modelValue":l[4]||(l[4]=e=>v(G).count=e),modelModifiers:{number:!0},placeholder:"请填写限制用户的访问次数！",onKeydown:l[5]||(l[5]=_(k((e=>F(C.value)),["prevent"]),["enter"]))},null,8,["modelValue"])])),_:1}),d(H,{label:"启用状态",prop:"status"},{default:c((()=>[d(Q,{modelValue:v(G).status,"onUpdate:modelValue":l[6]||(l[6]=e=>v(G).status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof C&&C(A);export{A as default};
