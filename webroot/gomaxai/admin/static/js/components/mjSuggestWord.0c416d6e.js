
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as l,E as s,j as r,o,I as t,g as d,b as i,t as n,e as u,f as g,c as p,h as c,N as m,O as f,s as b,_ as y}from"../main-31e47da4.js";import{A as h}from"../mj/mj.47c597de.js";import{a as x}from"../system/system.d6afe6aa.js";const v={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},_={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},w=["src"],j={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},F=y(e({__name:"mjSuggestWord",emits:["fresh"],setup(e,{expose:y,emit:F}){const C=a(),V=l(!1),k=l(""),E=l(0),U=l();l(!1);const q=s({image:"",suggestCn:"",suggestEn:"",order:100}),O=F,A=s({image:[{required:!0,message:"推荐关键词图片",trigger:"change"}],suggestCn:[{required:!0,message:"推荐关键词中文不能为空",trigger:"change"}],suggestEn:[{required:!0,message:"推荐关键词英文不能为空",trigger:"change"}],order:[{required:!0,message:"排序越大越靠前",trigger:"change"}]});const I=async e=>{await(null==e?void 0:e.validate((async e=>{if(e){if(0==C.isUserModifyPermissions())return f.error("非超级管理员无权限操作！");E.value?await M({id:E.value,...q}):await M(q),O("fresh",!0),V.value=!1,Object.assign(q,{image:"",suggestCn:"",suggestEn:"",order:100})}})))},M=async e=>(await h.addMjSuggestWord(e),f.success("保存推荐关键词成功！"),!0),z=e=>"image/jpeg"!==e.type&&"image/png"!==e.type?(f.error("只支持jpg和png格式"),!1):!(e.size/1024/1024>2)||(f.error("图片不能大于2M!"),!1);return y({open:function(e){null==e?(E.value=0,k.value="添加关键词",Object.assign(q,{image:"",suggestCn:"",suggestEn:"",order:100}),V.value=!0):(E.value=e.id,k.value="编辑关键词",Object.assign(q,e),V.value=!0)}}),(e,a)=>{const l=b,s=r("el-icon"),f=r("el-input"),y=r("el-form-item"),h=r("Plus"),F=r("el-upload"),C=r("el-form"),E=r("el-button"),O=r("el-dialog");return o(),t(O,{modelValue:u(V),"onUpdate:modelValue":a[7]||(a[7]=e=>m(V)?V.value=e:null),width:"500","show-close":!1,"destroy-on-close":""},{header:d((({close:e,titleId:r,titleClass:o})=>[i("div",v,[i("div",null,n(u(k)),1),i("div",{onClick:a[0]||(a[0]=e=>V.value=!1),style:{cursor:"pointer"}},[g(s,null,{default:d((()=>[g(l,{name:"close"})])),_:1})])])])),default:d((()=>[i("div",_,[g(C,{model:q,"label-position":"right",ref_key:"formRef",ref:U,rules:A,inline:!1,"label-width":"120px"},{default:d((()=>[g(y,{label:"关键词中文",prop:"suggestCn"},{default:d((()=>[g(f,{modelValue:q.suggestCn,"onUpdate:modelValue":a[1]||(a[1]=e=>q.suggestCn=e),placeholder:"输入推荐关键词中文",clearable:""},null,8,["modelValue"])])),_:1}),g(y,{label:"关键词英文",prop:"suggestEn"},{default:d((()=>[g(f,{modelValue:q.suggestEn,"onUpdate:modelValue":a[2]||(a[2]=e=>q.suggestEn=e),placeholder:"输入推荐关键词英文",clearable:""},null,8,["modelValue"])])),_:1}),g(y,{label:"排序",prop:"classifyName"},{default:d((()=>[g(f,{modelValue:q.order,"onUpdate:modelValue":a[3]||(a[3]=e=>q.order=e),type:"number",placeholder:"输入排序(越大越靠前)",clearable:"",maxlength:"6"},null,8,["modelValue"])])),_:1}),g(y,{label:"图标",prop:"image"},{default:d((()=>[g(F,{class:"logo-uploader",action:"","auto-upload":!1,"show-file-list":!1,onChange:a[4]||(a[4]=e=>(e=>{const a=e.name.split(".")[1],l=new FormData;l.append("filename",e.raw.uid+"."+a),l.append("file",e.raw),l.append("dir","gpts-logo"),x.uploadFile(l).then((e=>{q.image=e.data}))})(e)),"before-upload":z},{default:d((()=>[q.image?(o(),p("img",{key:0,src:q.image,class:"avatar",style:{border:"1px dashed #cccccc","border-radius":"12px"}},null,8,w)):(o(),t(s,{key:1,class:"logo-uploader-icon",style:{border:"1px dashed #cccccc","border-radius":"12px"}},{default:d((()=>[g(h)])),_:1}))])),_:1})])),_:1})])),_:1},8,["model","rules"])]),i("div",j,[g(E,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[5]||(a[5]=e=>V.value=!1)},{default:d((()=>a[8]||(a[8]=[c("取消 ")]))),_:1}),g(E,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:a[6]||(a[6]=e=>I(u(U)))},{default:d((()=>a[9]||(a[9]=[c(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-3dc7d6c8"]]);export{F as default};
