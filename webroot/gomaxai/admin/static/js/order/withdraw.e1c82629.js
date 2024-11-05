
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as l,j as a,o as t,c as i,Y as s,X as r,w as n,v as o,f as d,g as p,b as u,H as c,e as m,J as g,I as f,O as h,s as y,G as x,_ as b,F as v,u as w,E as k,q as _,V,N as C,h as F,W as z,t as S}from"../main-31e47da4.js";import{o as $}from"./order.5d08eb2b.js";const j={class:"upload-container"},I={class:"mask"},U={class:"actions"},T=["onClick"],Y=["onClick"],A=["onClick"],M=["onClick"],D={key:0,class:"el-upload__tip"},N={style:{display:"inline-block"}},R=e({name:"ImagesUpload"}),B=b(e({...R,props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","onSuccess"],setup(e,{emit:b}){const v=e,w=b,k=l({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function _(){k.value.imageViewerVisible=!1}function V(e,l){const a=v.url;"left"===l&&0!==e&&(a[e]=a.splice(e-1,1,a[e])[0]),"right"===l&&e!==a.length-1&&(a[e]=a.splice(e+1,1,a[e])[0]),w("update:url",a)}const C=e=>{const l=e.name.split(".").at(-1),a=v.ext.includes(l),t=e.size/1024/1024<v.size;return a||h.error(`上传图片只支持 ${v.ext.join(" / ")} 格式！`),t||h.error(`上传图片大小不能超过 ${v.size}MB！`),a&&t&&(k.value.progress.preview=URL.createObjectURL(e)),a&&t},F=e=>{k.value.progress.percent=~~e.percent},z=e=>{k.value.progress.preview="",k.value.progress.percent=0,w("onSuccess",e)};return(l,h)=>{const b=a("el-image"),S=y,$=a("el-icon"),R=a("el-progress"),B=a("el-upload"),H=a("el-alert"),O=a("el-image-viewer");return t(),i("div",j,[(t(!0),i(s,null,r(e.url,((l,a)=>(t(),i("div",{key:a,class:"images"},[a<e.max?(t(),f(b,{key:0,src:l,style:c(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):g("",!0),u("div",I,[u("div",U,[u("span",{title:"预览",onClick:e=>function(e){k.value.dialogImageIndex=e,k.value.imageViewerVisible=!0}(a)},[d($,null,{default:p((()=>[d(S,{name:"ep:zoom-in"})])),_:1})],8,T),u("span",{title:"移除",onClick:e=>function(e){const l=v.url;l.splice(e,1),w("update:url",l)}(a)},[d($,null,{default:p((()=>[d(S,{name:"ep:delete"})])),_:1})],8,Y),n(u("span",{title:"左移",class:x({disabled:0===a}),onClick:e=>V(a,"left")},[d($,null,{default:p((()=>[d(S,{name:"ep:back"})])),_:1})],10,A),[[o,e.url.length>1]]),n(u("span",{title:"右移",class:x({disabled:a===e.url.length-1}),onClick:e=>V(a,"right")},[d($,null,{default:p((()=>[d(S,{name:"ep:right"})])),_:1})],10,M),[[o,e.url.length>1]])])])])))),128)),n(d(B,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":C,"on-progress":F,"on-success":z,drag:"",class:"images-upload"},{default:p((()=>[u("div",{class:"image-slot",style:c(`width:${e.width}px;height:${e.height}px;`)},[d($,null,{default:p((()=>[d(S,{name:"ep:plus"})])),_:1})],4),n(u("div",{class:"progress",style:c(`width:${e.width}px;height:${e.height}px;`)},[d(b,{src:m(k).progress.preview,style:c(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),d(R,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:m(k).progress.percent},null,8,["width","percentage"])],4),[[o,m(k).progress.percent]])])),_:1},8,["headers","action","data","name"]),[[o,e.url.length<e.max]]),e.notip?g("",!0):(t(),i("div",D,[u("div",N,[d(H,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，单张图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}，且图片数量不超过 ${e.max} 张`,type:"success","show-icon":"",closable:!1},null,8,["title"])])])),m(k).imageViewerVisible?(t(),f(O,{key:1,"url-list":e.url,"initial-index":m(k).dialogImageIndex,teleported:"",onClose:_},null,8,["url-list","initial-index"])):g("",!0)])}}}),[["__scopeId","data-v-8831ea14"]]),H={class:"search_add_card"},O={style:{display:"flex","align-items":"center"}},E={style:{"margin-right":"20px"}},q={style:{"margin-right":"20px"}},L={style:{"margin-left":"10px"}},P={style:{"margin-top":"12px"}},G={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},J={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)","overflow-y":"scroll","overflow-x":"hidden"}},W={class:"flex",style:{gap:"10px","flex-wrap":"wrap"}},X={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},K=b(e({__name:"withdraw",setup(e){const o=v(!1),c=v(0),x=l([]),b=w(),j=k({page:1,size:20,settleStatus:null,timeType:0,startTime:"",endTime:""}),I=l([]),U={0:"未结算",1:"等待打款",2:"打款完成",3:"打款失败"};function T(e){j.startTime=e[0],j.endTime=e[1]}function Y(){j.startTime="",j.endTime="",I.value=[]}function A(){j.page=1,j.settleStatus=null,Y(),M()}async function M(){const{data:e}=await $.withdrawPage(j);x.value=e.rows,c.value=e.count}_((()=>{M()}));const D={1:"等待打款",2:"打款完成",3:"打款失败"},N=l(),R=v(!1),K=k({ids:[],payRemark:"",status:null,appendix:[]});function Q(e){R.value=!0,K.ids=[e.id],K.payRemark="",K.appendix=[],N.value=e}function Z(e){K.appendix.push(e.data)}return(e,l)=>{const v=a("el-option"),w=a("el-select"),k=a("el-date-picker"),_=a("el-button"),ee=a("el-icon"),le=a("el-table-column"),ae=a("el-link"),te=a("el-table"),ie=a("el-pagination"),se=a("el-row"),re=y,ne=a("el-form-item"),oe=a("el-input"),de=a("el-image"),pe=B,ue=a("el-form"),ce=a("el-dialog"),me=V("loading");return t(),i("div",null,[u("div",H,[u("div",O,[u("div",E,[l[11]||(l[11]=u("div",{class:"condition_name"}," 是否结算 ",-1)),d(w,{modelValue:m(j).settleStatus,"onUpdate:modelValue":l[0]||(l[0]=e=>m(j).settleStatus=e),placeholder:"是否结算",clearable:"",style:{width:"100px"}},{default:p((()=>[(t(),i(s,null,r(U,((e,l)=>d(v,{key:l,label:e,value:l},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])]),u("div",q,[l[12]||(l[12]=u("div",{class:"condition_name"}," 时间类型 ",-1)),d(w,{modelValue:m(j).timeType,"onUpdate:modelValue":l[1]||(l[1]=e=>m(j).timeType=e),placeholder:"是否结算",clearable:"",style:{width:"100px"}},{default:p((()=>[d(v,{label:"创建时间",value:0}),d(v,{label:"打款时间",value:1})])),_:1},8,["modelValue"])]),u("div",null,[l[13]||(l[13]=u("div",{class:"condition_name"}," 创建时间 ",-1)),d(k,{modelValue:m(I),"onUpdate:modelValue":l[2]||(l[2]=e=>C(I)?I.value=e:null),type:"datetimerange","start-placeholder":"账单开始时间","end-placeholder":"账单开始时间",format:"YYYY-MM-DD HH:mm:ss","value-format":"YYYY-MM-DD HH:mm:ss","default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)],onChange:T,onClear:Y},null,8,["modelValue","default-time"])]),u("div",L,[d(_,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",height:"32px",background:"#EFF6FF",color:"#60A5FA","border-radius":"8px","margin-top":"25px"},onClick:M},{default:p((()=>l[14]||(l[14]=[F(" 查询 ")]))),_:1})]),u("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:A},[d(ee,{color:"#3B82F6",size:"20"},{default:p((()=>[d(m(z))])),_:1})])]),u("button",{onClick:Q}," da ")]),u("div",P,[n((t(),f(te,{border:"",data:m(x),height:"66vh",width:"100%","show-overflow-tooltip":""},{default:p((()=>[d(le,{prop:"applyId",label:"申请人ID"}),d(le,{prop:"applyUserName",label:"申请人用户名"}),d(le,{prop:"cardBank",label:"提现银行"}),d(le,{prop:"cardNum",label:"提现卡号"}),d(le,{prop:"cardHolder",label:"提现持卡人"}),d(le,{prop:"remark",label:"提现备注"}),d(le,{prop:"totalMondy",label:"提现金额"}),d(le,{prop:"settleStatus",label:"结算状态"},{default:p((({row:e})=>[F(S(U[e.settleStatus]),1)])),_:1}),m(b).isSuperAdmin?(t(),f(le,{key:0,label:"操作"},{default:p((({row:e})=>[d(ae,{type:"primary",underline:!1,onClick:l=>Q(e)},{default:p((()=>l[15]||(l[15]=[F(" 打款 ")]))),_:2},1032,["onClick"])])),_:1})):g("",!0)])),_:1},8,["data"])),[[me,m(o)]]),d(se,{class:"flex justify-end mt-5 pb-5"},{default:p((()=>[d(ie,{"current-page":m(j).page,"onUpdate:currentPage":l[3]||(l[3]=e=>m(j).page=e),"page-size":m(j).size,"onUpdate:pageSize":l[4]||(l[4]=e=>m(j).size=e),class:"mr-5","page-sizes":[20,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:m(c),onSizeChange:M,onCurrentChange:M},null,8,["current-page","page-size","total"])])),_:1})]),d(ce,{modelValue:m(R),"onUpdate:modelValue":l[10]||(l[10]=e=>C(R)?R.value=e:null),"show-close":!1,width:"500px"},{header:p((()=>[u("div",G,[l[16]||(l[16]=u("div",null," 处理申请 ",-1)),u("div",{style:{cursor:"pointer"},onClick:l[5]||(l[5]=e=>R.value=!1)},[d(ee,null,{default:p((()=>[d(re,{name:"close"})])),_:1})])])])),default:p((()=>[u("div",J,[d(ue,{model:m(K),"label-width":"120px"},{default:p((()=>[d(ne,{label:"用户申请备注："},{default:p((()=>[F(S(m(N).remark||"无"),1)])),_:1}),d(ne,{label:"提现状态：",prop:"status",rules:[{required:!0,message:"请选择提现状态",trigger:"blur"}]},{default:p((()=>[d(w,{modelValue:m(K).status,"onUpdate:modelValue":l[6]||(l[6]=e=>m(K).status=e)},{default:p((()=>[(t(),i(s,null,r(D,((e,l)=>d(v,{key:l,label:e,value:l},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),d(ne,{label:"备注："},{default:p((()=>[d(oe,{modelValue:m(K).payRemark,"onUpdate:modelValue":l[7]||(l[7]=e=>m(K).payRemark=e),type:"textarea",placeholder:"备注"},null,8,["modelValue"])])),_:1}),d(ne,{label:"打款凭证：",prop:"appendix"},{default:p((()=>[u("div",W,[(t(!0),i(s,null,r(m(K).appendix,((e,l)=>(t(),f(de,{key:l,style:{width:"150px",height:"150px"},src:e,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":m(K).appendix,"initial-index":l,fit:"cover"},null,8,["src","preview-src-list","initial-index"])))),128)),d(pe,{action:"/api/file/upload",notip:!0,onOnSuccess:Z})])])),_:1})])),_:1},8,["model"])]),u("div",X,[d(_,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[8]||(l[8]=e=>R.value=!1)},{default:p((()=>l[17]||(l[17]=[F(" 取消 ")]))),_:1}),d(_,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:l[9]||(l[9]=l=>async function(e){await(null==e?void 0:e.validate((async e=>{e&&(await $.withdrawApproval(K),h.success("操作成功"))})))}(e.formRef))},{default:p((()=>l[18]||(l[18]=[F(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-ebbaf514"]]);export{K as default};
