
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.ba4efddb.js";import{d as a,r as l,G as t,C as s,x as u,j as o,V as r,o as n,c as i,f as d,g as c,h as p,w as m,J as f,e as v,t as g,b as y,W as b,X as h,K as w,m as _,n as k,U as V,$ as z,P as U,q as x}from"../main-043c96ab.js";import{A as C}from"../chatgpt/chatgpt.a6231630.js";import{E as j,d as I}from"../index/index.21f4f4e7.js";import{u as q}from"../utcformatTime/utcformatTime.f6db2c52.js";const Y={class:"flex justify-end mr-5"},A=a({__name:"whiteList",setup(a){const x=l(),A=l(0),P=l(!1),W=l(!1),K=l([]),M=l(0),T=t({page:1,size:10}),D=s((()=>A.value?"更新用户":"新增用户")),E=s((()=>A.value?"确认更新":"确认新增")),G=l([]),L=t({userId:"",status:1,count:10}),S=t({userId:[{required:!0,message:"请选择白名单用户",trigger:"change"}],status:[{required:!0,message:"请选择当前用户状态",trigger:"change"}],count:[{required:!0,message:"请填写限制使用次数",trigger:"blur"}]});async function $(e){const a=await V.queryAllUser({size:30,username:e});G.value=a.data.rows}async function F(){try{P.value=!0;const e=await C.queryWhiteUserList(T);P.value=!1;const{rows:a,count:l}=e.data;K.value=a,M.value=l}catch(e){P.value=!1}}function J(e){null==e||e.validate((async e=>{e&&(A.value?(await C.updateWhiteUser({id:A.value,...L}),U.success("修改白名单用户成功")):(await C.addWhiteUser(L),U.success("添加白名单用户成功")),W.value=!1,F())}))}return u((()=>{F()})),(a,l)=>{const t=o("el-alert"),s=o("el-button"),u=e,V=o("el-table-column"),U=o("el-tag"),C=o("el-table"),O=o("el-pagination"),R=o("el-row"),X=o("el-option"),B=o("el-select"),H=o("el-form-item"),N=o("el-input"),Q=o("el-switch"),Z=o("el-form"),ee=o("el-dialog"),ae=r("loading");return n(),i("div",null,[d(u,null,{default:c((()=>[d(t,{closable:!1,"show-icon":"",title:"KEY池说明",description:"所有key会按key绑定的模型自动划分为卡池3模型与卡池4模型、key余额耗尽将会自动锁定、每张key支持单独绑定模型与代理、已经上下文长度设置、如果不设置默认以全局配置为准！",type:"success"}),d(s,{class:"mt-5",type:"primary",onClick:l[0]||(l[0]=e=>W.value=!0)},{default:c((()=>[p(" 添加白名单用户[添加用户可以使用GPT4模型] ")])),_:1})])),_:1}),d(u,null,{default:c((()=>[m((n(),f(C,{border:"",data:K.value,style:{width:"100%"},size:"large"},{default:c((()=>[d(V,{prop:"username",label:"用户昵称"}),d(V,{prop:"email",label:"用户邮箱"}),d(V,{prop:"useCount",label:"调用次数"}),d(V,{prop:"count",label:"剩余额度"}),d(V,{prop:"status",align:"center",label:"启用状态"},{default:c((e=>[d(U,{type:v(j)[e.row.status]},{default:c((()=>[p(g(v(I)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),d(V,{prop:"createdAt",align:"center",label:"添加时间"},{default:c((e=>[p(g(v(q)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),d(V,{label:"操作"},{default:c((e=>[d(s,{link:"",type:"primary",size:"small",onClick:a=>function(e){A.value=e.id;const{userId:a,count:l,status:t}=e;z((()=>{Object.assign(L,{userId:a,count:l,status:t})})),W.value=!0}(e.row)},{default:c((()=>[p(" 变更 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ae,P.value]]),d(R,{class:"flex justify-end mt-5"},{default:c((()=>[d(O,{"current-page":v(T).page,"onUpdate:currentPage":l[1]||(l[1]=e=>v(T).page=e),"page-size":v(T).size,"onUpdate:pageSize":l[2]||(l[2]=e=>v(T).size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:M.value,onSizeChange:F,onCurrentChange:F},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),d(ee,{modelValue:W.value,"onUpdate:modelValue":l[9]||(l[9]=e=>W.value=e),"close-on-click-modal":!1,title:v(D),width:"400",onClose:l[10]||(l[10]=e=>{return a=x.value,A.value=0,void(null==a||a.resetFields());var a})},{footer:c((()=>[y("span",Y,[d(s,{onClick:l[7]||(l[7]=e=>W.value=!1)},{default:c((()=>[p("取消")])),_:1}),d(s,{type:"primary",onClick:l[8]||(l[8]=e=>J(x.value))},{default:c((()=>[p(g(v(E)),1)])),_:1})])])),default:c((()=>[d(Z,{ref_key:"formPackageRef",ref:x,"label-position":"right","label-width":"100px",model:v(L),rules:v(S)},{default:c((()=>[A.value?w("",!0):(n(),f(H,{key:0,label:"用户昵称",prop:"userId"},{default:c((()=>[d(B,{modelValue:v(L).userId,"onUpdate:modelValue":l[3]||(l[3]=e=>v(L).userId=e),filterable:"",clearable:"",style:{width:"100%"},remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":$},{default:c((()=>[(n(!0),i(b,null,h(G.value,(e=>(n(),f(X,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})),d(H,{label:"限制次数",prop:"count"},{default:c((()=>[d(N,{modelValue:v(L).count,"onUpdate:modelValue":l[4]||(l[4]=e=>v(L).count=e),modelModifiers:{number:!0},placeholder:"请填写限制用户的访问次数！",onKeydown:l[5]||(l[5]=_(k((e=>J(x.value)),["prevent"]),["enter"]))},null,8,["modelValue"])])),_:1}),d(H,{label:"启用状态",prop:"status"},{default:c((()=>[d(Q,{modelValue:v(L).status,"onUpdate:modelValue":l[6]||(l[6]=e=>v(L).status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof x&&x(A);export{A as default};
