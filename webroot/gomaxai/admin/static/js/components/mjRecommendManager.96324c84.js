
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.03303a0e.js";import{d as a,r as l,E as o,j as s,o as t,I as d,g as n,f as i,h as r,e as u,b as m,N as c,O as p,_ as f}from"../main-c47e4581.js";const h={style:{height:"auto","overflow-y":"auto","overflow-x":"hidden"}},g=f(a({__name:"mjRecommendManager",emits:["fresh"],setup(a,{expose:f,emit:g}){const y=l(!1),w=l(""),_=l(0),k=l();l(!1);const b=o({icon:"",keywordChinese:"",keywordEnglish:""}),v=g,j=o({keywordChinese:[{required:!0,message:"中文关键词不能为空",trigger:"change"},{max:50,message:"最大长度50"}],keywordEnglish:[{required:!0,message:"中文关键词英文翻译不能为空",trigger:"change"},{max:50,message:"最大长度50"}]});const x=async e=>{await(null==e?void 0:e.validate((async e=>{e&&(_.value?await E({id:_.value,...b}):await V(b),v("fresh",!0),y.value=!1,Object.assign(b,{}))})))},V=async a=>(await e.addMjParam(a),p.success("添加预设关键词成功！"),!0),C=async a=>await e.getMjParamById(a).then((e=>e.data)),E=async a=>{await e.modifyMjParam(a),p.success("更新预设关键词成功！")};return f({open:function(e){y.value=!0,_.value=e||0,w.value=e?"编辑预设关键词":"添加预设关键词",e&&e>0?C({id:e}).then((e=>{Object.assign(b,e)})):Object.assign(b,{icon:"",keywordChinese:"",keywordEnglish:""})}}),(e,a)=>{const l=s("el-input"),o=s("el-col"),p=s("el-button"),f=s("el-row"),g=s("el-form-item"),_=s("el-upload"),v=s("el-form"),V=s("el-dialog");return t(),d(V,{modelValue:u(y),"onUpdate:modelValue":a[4]||(a[4]=e=>c(y)?y.value=e:null),"append-to-body":!0,"close-on-click-modal":!1,title:u(w),top:"80px",fullscreen:!1,width:"600px","z-index":2e3},{footer:n((()=>[i(p,{onClick:a[2]||(a[2]=e=>y.value=!1)},{default:n((()=>a[6]||(a[6]=[r(" 取消 ")]))),_:1}),i(p,{type:"primary",onClick:a[3]||(a[3]=e=>x(u(k)))},{default:n((()=>a[7]||(a[7]=[r(" 确认 ")]))),_:1})])),default:n((()=>[m("div",h,[i(v,{model:b,"label-position":"right",ref_key:"formRef",ref:k,rules:j,inline:!1,"label-width":"120px"},{default:n((()=>[i(g,{label:"中文关键词",prop:"keywordChinese"},{default:n((()=>[i(f,{gutter:4},{default:n((()=>[i(o,{span:23},{default:n((()=>[i(l,{modelValue:b.keywordChinese,"onUpdate:modelValue":a[0]||(a[0]=e=>b.keywordChinese=e),style:{width:"100%"},placeholder:"输入中文关键词",clearable:"",maxlength:"50"},null,8,["modelValue"])])),_:1}),i(o,{span:1},{default:n((()=>[i(p,null,{default:n((()=>a[5]||(a[5]=[r("翻译")]))),_:1})])),_:1})])),_:1})])),_:1}),i(g,{label:"中文关键词翻译",prop:"mjId"},{default:n((()=>[i(l,{modelValue:b.keywordEnglish,"onUpdate:modelValue":a[1]||(a[1]=e=>b.keywordEnglish=e),placeholder:"输入中文关键词翻译",clearable:"",maxlength:"50"},null,8,["modelValue"])])),_:1}),i(g,{label:"图标",prop:"icon"},{default:n((()=>[i(_,{type:"card"})])),_:1})])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-4cdb13dc"]]);export{g as default};
