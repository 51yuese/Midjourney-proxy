
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.47c597de.js";import{d as a,r as n,E as l,j as t,V as s,o as i,I as o,g as u,b as d,f as r,h as c,t as p,w as m,e as g,c as v,Y as f,X as h,J as y,N as I,_}from"../main-31e47da4.js";const b={style:{height:"auto","overflow-y":"auto","overflow-x":"hidden"}},w={class:"setting-content"},j={class:"setting-content-line1"},x={class:"setting-content-line2"},T={style:{"margin-right":"2px"}},k=_(a({__name:"mjDetail",emits:["fresh"],setup(a,{expose:_,emit:k}){const D=n(!1),O=n(!1),V=n(""),z=n(0),A=l({id:0,setting:{},account:"",channelId:"",guildId:"",authorization:"",applicationId:"",version:"",sessionId:"",usedTime:"",totalTime:"",fastRemainTime:"",relaxRemainTime:"",renewDate:"",orderPlan:0,createdAt:"",updatedAt:"",type:1,enable:1,concurrency:3,timeout:5,awaitQueue:10,remark:""});const J=async a=>await e.getMjParamById(a).then((e=>e.data));return _({open:function(e){O.value=!0,z.value=e||0,V.value="查看详情",A.id=e,e&&e>0&&J({id:e}).then((e=>{const a=JSON.parse(e.setting);Object.assign(A,{...e,setting:e.setting?a:{}})}))}}),(a,n)=>{const l=t("el-col"),_=t("el-row"),k=t("el-card"),z=t("el-button"),N=t("el-dialog"),P=s("loading");return i(),o(N,{modelValue:g(O),"onUpdate:modelValue":n[0]||(n[0]=e=>I(O)?O.value=e:null),"append-to-body":!0,"close-on-click-modal":!1,title:g(V),top:"80px",fullscreen:!1,width:"1200px","z-index":2e3},{default:u((()=>[d("div",b,[d("div",null,[r(k,{class:"box-card",shadow:"never"},{header:u((()=>n[1]||(n[1]=[d("div",{class:"card-header"},[d("span",null,"账号信息")],-1)]))),default:u((()=>[r(_,{gutter:20},{default:u((()=>[r(l,{span:12},{default:u((()=>[d("p",null,[n[2]||(n[2]=c("账户名: ")),d("span",null,p(A.account),1)]),d("p",null,[n[3]||(n[3]=c("频道ID: ")),d("span",null,p(A.channelId),1)]),d("p",null,[n[4]||(n[4]=c("服务器ID: ")),d("span",null,p(A.guildId),1)]),d("p",null,[n[5]||(n[5]=c("授权令牌: ")),d("span",null,p(A.authorization),1)])])),_:1}),r(l,{span:12},{default:u((()=>[d("p",null,[n[6]||(n[6]=c("状态: ")),d("span",null,p(1===A.enable?"启用":"停用"),1)]),d("p",null,[n[7]||(n[7]=c("出图模式: ")),d("span",null,p(1===A.type?"快速":2===A.type?"休闲":3===A.type?"Turbo":""),1)]),d("p",null,[n[8]||(n[8]=c("快速时间剩余: ")),d("span",null,p(A.fastRemainTime),1)]),d("p",null,[n[9]||(n[9]=c("订阅计划: ")),d("span",null,p(1===A.orderPlan?"标准":"其他"),1)]),d("p",null,[n[10]||(n[10]=c("续订时间: ")),d("span",null,p(A.renewDate),1)])])),_:1})])),_:1})])),_:1}),"{}"!==A.setting?(i(),o(k,{key:0,class:"box-card",shadow:"never"},{header:u((()=>n[11]||(n[11]=[d("div",{class:"card-header"},[d("span",null,"设置")],-1)]))),default:u((()=>{var a;return[m((i(),v("div",w,[(i(!0),v(f,null,h(null==(a=A.setting)?void 0:a.components,(a=>(i(),v("div",j,[(i(!0),v(f,null,h(a.components,(a=>{return i(),v("div",x,[r(z,{style:{margin:"4px"},type:(n=a.style,1===n?"primary":3===n?"success":4===n?"danger":"info"),onClick:n=>{var l,t;return(async a=>{D.value=!0;const n=A.id;await e.updateMjSetting({...a,mode:A.type,accountId:n}).then((e=>{J({id:n}).then((e=>{const a=JSON.parse(e.setting);Object.assign(A,{...e,setting:e.setting?a:{}})}))})),D.value=!1})({messageId:null==(l=null==A?void 0:A.setting)?void 0:l.id,customId:null==a?void 0:a.custom_id,flags:null==(t=null==A?void 0:A.setting)?void 0:t.flags})}},{default:u((()=>{var e;return[d("span",T,p(null==(e=a.emoji)?void 0:e.name),1),c(p(a.label),1)]})),_:2},1032,["type","onClick"])]);var n})),256))])))),256))])),[[P,g(D)]])]})),_:1})):y("",!0)])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-3e2b2f75"]]);export{k as default};
