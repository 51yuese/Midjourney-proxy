
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import e from"../components/mjIncantation.8128d874.js";import a from"../components/mjDetail.ec923632.js";import{A as t}from"../mj/mj.47c597de.js";import{u as l}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as n,u as o,r as i,E as r,q as s,j as p,V as d,o as u,c,f as m,b as f,g as y,Y as g,X as v,h as b,w as x,I as h,t as w,e as _,O as j,_ as k,n as z}from"../main-31e47da4.js";import"../system/system.d6afe6aa.js";const F={class:"search_add_card"},C={style:{display:"flex","align-items":"center"}},A={style:{"margin-left":"10px"}},V={style:{"margin-top":"22px","margin-left":"12px"}},I={key:1},M=n({__name:"incantation",setup(n){const k=o(),z=i(),M=i(),U=i(!1),E=i([]),R=i(0),q=r({page:1,size:20,keyword:"",pid:""});i();const B=async()=>{try{U.value=!0;const e=await t.queryMjIncantation(q),{rows:a,count:l}=e.data;U.value=!1,R.value=l,E.value=a.map((e=>{const a=P.get(e.pid);return e.type="text"===a.type?"普通":"style"===a.type?"风格":"",e.category=a.classifyName,e}))}catch(e){U.value=!1}},D=async()=>{M.value.open()},N=e=>{Object.assign(q,{keyword:"",pid:"",page:1,size:20}),B()},O=i([]),P=new Map;return s((async()=>{await(async()=>{const e=await t.queryAllMjIncantClassify({level:2}).then((e=>e.data));O.value=e,e.length&&e.forEach((e=>{P.set(e.id,e)}))})(),B()})),(n,o)=>{const i=p("el-input"),r=p("el-option"),s=p("el-select"),P=p("el-button"),S=p("RefreshRight"),T=p("el-icon"),X=p("el-image"),Y=p("el-table-column"),G=p("el-popconfirm"),H=p("el-table"),J=p("el-pagination"),K=p("el-row"),L=d("loading");return u(),c("div",null,[m(e,{ref_key:"mjManagerRef",ref:M,list:O.value,onFresh:B},null,8,["list"]),m(a,{ref_key:"mjDetailRef",ref:z},null,512),f("div",F,[f("div",C,[f("div",null,[o[4]||(o[4]=f("div",{class:"condition_name"},"关键字",-1)),m(i,{modelValue:q.keyword,"onUpdate:modelValue":o[0]||(o[0]=e=>q.keyword=e),style:{width:"192px"},placeholder:"分类关键字[模糊搜索]",clearable:""},null,8,["modelValue"])]),f("div",A,[o[5]||(o[5]=f("div",{class:"condition_name"},"所属分类",-1)),m(s,{modelValue:q.pid,"onUpdate:modelValue":o[1]||(o[1]=e=>q.pid=e)},{default:y((()=>[(u(!0),c(g,null,v(O.value,(e=>(u(),h(r,{key:e.id,value:e.id,label:e.classifyName},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])]),f("div",V,[m(P,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:B},{default:y((()=>o[6]||(o[6]=[b("查询 ")]))),_:1})]),f("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:N},[m(T,{color:"#3B82F6",size:"20"},{default:y((()=>[m(S)])),_:1})])]),f("div",null,[m(P,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:D},{default:y((()=>o[7]||(o[7]=[b(" 添加字典 ")]))),_:1})])]),f("div",null,[x((u(),h(H,{border:"",data:E.value,height:"64vh",width:"100%"},{default:y((()=>[m(Y,{prop:"img",label:"图片"},{default:y((e=>[e.row.img?(u(),h(X,{key:0,style:{width:"60px",height:"60px","border-radius":"8px"},src:e.row.img,fit:"fill"},null,8,["src"])):(u(),c("span",I,"--"))])),_:1}),m(Y,{prop:"incantationCn",label:"名称"}),m(Y,{prop:"incantationEn",label:"英文翻译"}),m(Y,{prop:"type",label:"类型"}),m(Y,{prop:"category",label:"分类"}),m(Y,{prop:"createdAt",label:"创建时间"},{default:y((e=>[f("p",null,w(_(l)(e.row.createdAt)),1)])),_:1}),m(Y,{prop:"updatedAt",label:"更新时间"},{default:y((e=>[f("p",null,w(_(l)(e.row.updatedAt)),1)])),_:1}),m(Y,{fixed:"right",label:"操作",width:"280",align:"center"},{default:y((e=>[m(P,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{M.value.open(e.id)})(e.row)},{default:y((()=>o[8]||(o[8]=[b(" 编辑 ")]))),_:2},1032,["onClick"]),m(G,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{if(0==k.isUserModifyPermissions())return j.error("非超级管理员无权限操作！");await t.removeMjIncantation({id:e.id}),j.success("删除字典成功！"),await B()})(e.row)},{reference:y((()=>[m(P,{link:"",type:"danger",size:"small"},{default:y((()=>o[9]||(o[9]=[b(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[L,U.value]]),m(K,{class:"flex justify-end mt-5 pb-5"},{default:y((()=>[m(J,{"current-page":q.page,"onUpdate:currentPage":o[2]||(o[2]=e=>q.page=e),"page-size":q.size,"onUpdate:pageSize":o[3]||(o[3]=e=>q.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:R.value,onSizeChange:B,onCurrentChange:B},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof z&&z(M);const U=k(M,[["__scopeId","data-v-486cabe3"]]);export{U as default};
