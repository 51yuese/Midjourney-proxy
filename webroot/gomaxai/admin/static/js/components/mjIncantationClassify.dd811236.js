
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,E as t,j as s,o as i,I as d,g as o,b as n,t as r,f as u,c as p,X as c,Y as m,J as f,h as y,O as v,s as b,_ as g}from"../main-c47e4581.js";import{A as h}from"../mj/mj.03303a0e.js";const x={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},w={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},_={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},j=g(e({__name:"mjIncantationClassify",props:{list:{type:Array,required:!0,default:()=>[]}},emits:["fresh"],setup(e,{expose:g,emit:j}){const V=l(),F=a(!1),C=a(""),k=a(0),I=a(),N=a([]);a(!1);const U=t({classifyName:"",level:2,type:"text",pid:void 0}),q=j,M=t({name:[{required:!0,message:"咒语分类名称不能为空",trigger:"change"},{max:10,message:"最大长度10"}],level:[{required:!0,message:"咒语分类级别",trigger:"change"}],pid:[{required:!0,message:"父级必选",trigger:"change"}]});const A=e=>{const l=N.value.find((l=>l.id===e));U.type=l?l.type:null},O=async e=>{await(null==e?void 0:e.validate((async e=>{if(e){if(0==V.isUserModifyPermissions())return v.error("非超级管理员无权限操作！");k.value?await Y({id:k.value,...U}):await E(U),setTimeout((()=>q("fresh",!0)),50),F.value=!1,Object.assign(U,{})}})))},E=async e=>(await h.addMjIncantClassify(e),v.success("添加咒语分类成功！"),!0),T=async e=>await h.getMjIncantClassify(e).then((e=>e.data)),Y=async e=>{await h.modifyMjIncantClassify(e),v.success("更新咒语分类成功！")};return g({open:function(e){F.value=!0,k.value=e||0,C.value=e?"编辑咒语分类":"添加咒语分类",(async()=>{const e=await h.queryTopMjIncantationClassify();N.value=e.data})(),e&&e>0?T({id:e}).then((e=>{const{classifyName:l,level:a,pid:t}=e;Object.assign(U,{classifyName:l,level:a,pid:t})})):Object.assign(U,{classifyName:"",level:2,pid:void 0})}}),(e,l)=>{const a=b,t=s("el-icon"),v=s("el-option"),g=s("el-select"),h=s("el-form-item"),j=s("el-input"),V=s("el-form"),k=s("el-button"),q=s("el-dialog");return i(),d(q,{modelValue:F.value,"onUpdate:modelValue":l[7]||(l[7]=e=>F.value=e),width:"400","show-close":!1,"destroy-on-close":""},{header:o((({close:e,titleId:s,titleClass:i})=>[n("div",x,[n("div",null,r(C.value),1),n("div",{onClick:l[0]||(l[0]=e=>F.value=!1),style:{cursor:"pointer"}},[u(t,null,{default:o((()=>[u(a,{name:"close"})])),_:1})])])])),default:o((()=>[n("div",w,[u(V,{model:U,"label-position":"right",ref_key:"formRef",ref:I,rules:M,inline:!1,"label-width":"80px"},{default:o((()=>[u(h,{label:"分类级别",prop:"level"},{default:o((()=>[u(g,{modelValue:U.level,"onUpdate:modelValue":l[1]||(l[1]=e=>U.level=e),placeholder:"选择分类级别","fit-input-width":"",style:{width:"100%"}},{default:o((()=>[u(v,{value:1,label:"一级"}),u(v,{value:2,label:"二级"})])),_:1},8,["modelValue"])])),_:1}),2===U.level?(i(),d(h,{key:0,label:"父级",prop:"pid"},{default:o((()=>[u(g,{modelValue:U.pid,"onUpdate:modelValue":l[2]||(l[2]=e=>U.pid=e),placeholder:"选择分类级别","fit-input-width":"",style:{width:"100%"},onChange:A},{default:o((()=>[(i(!0),p(m,null,c(N.value,(e=>(i(),d(v,{value:e.id,label:e.classifyName},null,8,["value","label"])))),256))])),_:1},8,["modelValue"])])),_:1})):f("",!0),u(h,{label:"分类类型",prop:"type"},{default:o((()=>[u(g,{modelValue:U.type,"onUpdate:modelValue":l[3]||(l[3]=e=>U.type=e),disabled:2===U.level,placeholder:"选择分类类型","fit-input-width":"",style:{width:"100%"}},{default:o((()=>[u(v,{value:"text",label:"普通"}),u(v,{value:"style",label:"风格"})])),_:1},8,["modelValue","disabled"])])),_:1}),u(h,{label:"分类名称",prop:"classifyName"},{default:o((()=>[u(j,{modelValue:U.classifyName,"onUpdate:modelValue":l[4]||(l[4]=e=>U.classifyName=e),placeholder:"输入分类名称",clearable:"",maxlength:"50"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])]),n("div",_,[u(k,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[5]||(l[5]=e=>F.value=!1)},{default:o((()=>l[8]||(l[8]=[y("取消 ")]))),_:1}),u(k,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:l[6]||(l[6]=e=>O(I.value))},{default:o((()=>l[9]||(l[9]=[y(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-6509b4c0"]]);export{j as default};
