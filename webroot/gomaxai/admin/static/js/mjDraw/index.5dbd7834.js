
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{aq as e,ar as a,as as l,d as t,r as n,at as o,E as i,q as s,j as r,V as d,o as p,c,f as u,b as m,g as f,Y as _,X as g,e as y,h as b,w as h,I as v,t as Y,O as w,s as x,_ as M,n as z}from"../main-31e47da4.js";import j from"../components/mjManger.0ea2dad7.js";import k from"../components/mjDetail.ec923632.js";import{A as D,U as C,g as L}from"../index/index.6a62fca0.js";import{A as F}from"../mj/mj.47c597de.js";!function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(e),t={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,a){return"W"===a?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,a){var l=100*e+a;return l<600?"凌晨":l<900?"早上":l<1100?"上午":l<1300?"中午":l<1800?"下午":"晚上"}};l.default.locale(t,null,!0)}(e),l.locale("zh-cn");const I=e=>l(e).format("YYYY-MM-DD HH:mm:ss"),H={class:"search_condition"},V={style:{display:"flex","align-items":"center"}},A={style:{"margin-left":"12px"}},S={style:{"margin-left":"12px"}},P={style:{"margin-top":"22px","margin-left":"12px"}},U={style:{display:"flex","align-items":"center","justify-content":"space-between"}},R=t({__name:"index",setup(e){const a=n(),l=n(),t=n(!1),M=n([]),z=n(0),R=o(L),B=o(D),E=i({account:"",channelId:"",enable:0,page:1,size:20});n();const T=async()=>{try{t.value=!0;const e=await F.queryMjParamByPage(E),{rows:a,count:l}=e.data;t.value=!1,z.value=l,M.value=a.map((e=>({infoLoading:!1,...e})))}catch(e){t.value=!1}},q=async()=>{l.value.open()},J=e=>{Object.assign(E,{account:"",channelId:"",enable:0,page:1,size:20}),T()};return s((()=>{T()})),(e,n)=>{const o=r("el-input"),i=r("el-option"),s=r("el-select"),L=r("el-button"),O=r("RefreshRight"),W=r("el-icon"),X=r("el-table-column"),$=r("el-tag"),G=r("el-popconfirm"),K=x,N=r("el-popover"),Q=r("el-table"),Z=r("el-pagination"),ee=r("el-row"),ae=d("loading");return p(),c(_,null,[u(j,{ref_key:"mjManagerRef",ref:l,onFresh:T},null,512),u(k,{ref_key:"mjDetailRef",ref:a},null,512),m("div",null,[m("div",H,[m("div",V,[m("div",null,[n[5]||(n[5]=m("div",{class:"search_title"},"账户名",-1)),m("div",null,[u(o,{modelValue:E.account,"onUpdate:modelValue":n[0]||(n[0]=e=>E.account=e),width:"100%",placeholder:"账号名[模糊搜索]",clearable:""},null,8,["modelValue"])])]),m("div",A,[n[6]||(n[6]=m("div",{class:"search_title"},"通道ID(channelId)",-1)),m("div",null,[u(o,{modelValue:E.channelId,"onUpdate:modelValue":n[1]||(n[1]=e=>E.channelId=e),placeholder:"频道ID[模糊搜索]",clearable:""},null,8,["modelValue"])])]),m("div",S,[n[7]||(n[7]=m("div",{class:"search_title"},"状态",-1)),m("div",null,[u(s,{modelValue:E.enable,"onUpdate:modelValue":n[2]||(n[2]=e=>E.enable=e),style:{width:"100px"}},{default:f((()=>[(p(!0),c(_,null,g(y(D),(e=>(p(),v(i,{label:e.label,value:e.value},null,8,["label","value"])))),256))])),_:1},8,["modelValue"])])]),m("div",P,[u(L,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:T},{default:f((()=>n[8]||(n[8]=[b("查询 ")]))),_:1})]),m("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:J},[u(W,{color:"#3B82F6",size:"20"},{default:f((()=>[u(O)])),_:1})])]),m("div",null,[u(L,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:q},{default:f((()=>n[9]||(n[9]=[b(" 添加账号 ")]))),_:1})])]),m("div",null,[h((p(),v(Q,{border:"",data:M.value,height:"30vh",width:"100%",size:"large"},{default:f((()=>[u(X,{prop:"guildId",label:"服务器ID"}),u(X,{prop:"channelId",label:"频道ID"}),u(X,{prop:"account",label:"账户"}),u(X,{prop:"mode",label:"出图模式"},{default:f((({row:e})=>[u($,{type:y(C)[e.mode]},{default:f((()=>[b(Y(y(R)[e.mode]),1)])),_:2},1032,["type"])])),_:1}),u(X,{prop:"fastRemainTime",label:"快速时间剩余"}),u(X,{prop:"orderPlan",label:"订阅计划",width:"100"},{default:f((e=>{return[b(Y((a=e.row.orderPlan,1===a?"基本":2===a?"标准":3===a?"专业":"强大")),1)];var a})),_:1}),u(X,{prop:"enable",label:"状态",width:"100"},{default:f((({row:e})=>[u($,{type:y(C)[e.enable]},{default:f((()=>[b(Y(y(B)[e.enable]),1)])),_:2},1032,["type"])])),_:1}),u(X,{prop:"createdAt",label:"创建时间"},{default:f((({row:e})=>[m("p",null,Y(y(I)(e.createdAt)),1)])),_:1}),u(X,{fixed:"right",label:"操作",width:"150",align:"center",style:{position:"relative"}},{default:f((e=>[m("div",U,[u(L,{link:"",type:"primary",size:"small",onClick:l=>(e=>{const{id:l}=e;a.value.open(l)})(e.row)},{default:f((()=>n[10]||(n[10]=[b(" 详情 ")]))),_:2},1032,["onClick"]),u(G,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{await F.removeMjParam({id:e.id}),w.success("删除MJ账号成功！"),await T()})(e.row)},{reference:f((()=>[u(L,{link:"",type:"danger",size:"small"},{default:f((()=>n[11]||(n[11]=[b(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"]),u(N,{placement:"bottom",trigger:"click",content:"this is content, this is content, this is content","popper-class":"el-popover-self"},{reference:f((()=>[m("div",null,[u(W,{size:24,style:{"margin-left":"10px"}},{default:f((()=>[u(K,{name:"more"})])),_:1})])])),default:f((()=>[m("div",null,[m("div",null,[u(G,{width:"300px",title:"为了避免封号，不能频繁更新，确认要更新吗？","confirm-button-text":"确认",onConfirm:a=>(async e=>{l.value.open(e.id)})(e.row)},{reference:f((()=>[u(L,{link:"",type:"primary",size:"small"},{default:f((()=>n[12]||(n[12]=[b(" 更新 ")]))),_:1})])),_:2},1032,["onConfirm"])]),m("div",null,[u(G,{width:"300px",title:"为了避免封号，程序每天同步一次，确认手动同步？","confirm-button-text":"确认",onConfirm:a=>(async e=>{e.infoLoading=!0,await F.updateMjSync({id:e.id}),w.success("同步MJ账号成功！"),e.infoLoading=!1,await T()})(e.row)},{reference:f((()=>[u(L,{link:"",type:"danger",loading:e.row.infoLoading,size:"small"},{default:f((()=>n[13]||(n[13]=[b(" 同步 ")]))),_:2},1032,["loading"])])),_:2},1032,["onConfirm"])]),m("div",null,[u(L,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{const a={id:e.id,enable:1===e.enable?2:1};(await F.setMjParamEnable(a)).success&&w({type:"success",message:`账户${1===e.enable?"停用":"启用"}成功！`}),await T()})(e.row)},{default:f((()=>[b(Y(1===e.row.enable?"停用":"启用"),1)])),_:2},1032,["onClick"])])])])),_:2},1024)])])),_:1})])),_:1},8,["data"])),[[ae,t.value]]),u(ee,{class:"flex justify-end mt-5 pb-5"},{default:f((()=>[u(Z,{"current-page":E.page,"onUpdate:currentPage":n[3]||(n[3]=e=>E.page=e),"page-size":E.size,"onUpdate:pageSize":n[4]||(n[4]=e=>E.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:z.value,onSizeChange:T,onCurrentChange:T},null,8,["current-page","page-size","total"])])),_:1})])])],64)}}});"function"==typeof z&&z(R);const B=M(R,[["__scopeId","data-v-bb51e6ad"]]);export{B as default};