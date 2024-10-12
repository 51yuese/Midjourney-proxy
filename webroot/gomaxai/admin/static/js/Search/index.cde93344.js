
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,k as a,a as l,ab as t,z as n,r as s,ac as u,A as i,B as o,q as r,M as c,C as d,ad as v,j as p,o as f,c as h,b as m,m as g,f as b,g as y,e as _,N as k,l as z,h as w,t as S,J as T,Y as C,X as E,G as j,s as H,I as R,_ as x}from"../main-c47e4581.js";const I={class:"container"},L={key:0,class:"tips"},M={class:"tip"},V={class:"tip"},A={class:"tip"},B={class:"tip"},D=["onClick","onMouseover"],K={class:"info"},U={class:"title"},q={class:"breadcrumb"},G={class:"path"},J=e({name:"Search"}),N=x(e({...J,setup(e){const x=a(),J=l(),N=t(),O=n(),X=s(!1),Y=s(""),F=s([]),P=s(-1),Q=s(),W=s(),Z=s([]);function $(e){return Z.value.push(e)}u((()=>{Z.value=[]}));const ee=i((()=>{let e=[];return e=F.value.filter((e=>{let a=!1;return e.title&&("function"==typeof e.title?e.title().includes(Y.value)&&(a=!0):e.title.includes(Y.value)&&(a=!0)),e.path.includes(Y.value)&&(a=!0),e.breadcrumb.some((e=>{let a=!1;return e&&("function"==typeof e?e().includes(Y.value)&&(a=!0):e.includes(Y.value)&&(a=!0)),a}))&&(a=!0),a})),e}));function ae(e,a,l,t){e.forEach((e=>{var n,s,u,i,o,r,c;if(!1!==(null==(n=e.meta)?void 0:n.sidebar)){const n=v(t)||[];e.children&&function(e){var a;let l=!0;return(null==(a=e.children)?void 0:a.every((e=>{var a;return!1===(null==(a=e.meta)?void 0:a.sidebar)})))&&(l=!1),l}(e)?(n.push(null==(s=e.meta)?void 0:s.title),ae(e.children,a?[a,e.path].join("/"):e.path,(null==(u=e.meta)?void 0:u.icon)??l,n)):(n.push(null==(i=e.meta)?void 0:i.title),F.value.push({path:a?[a,e.path].join("/"):e.path,icon:(null==(o=e.meta)?void 0:o.icon)??l,title:null==(r=e.meta)?void 0:r.title,link:null==(c=e.meta)?void 0:c.link,breadcrumb:n}))}}))}function le(e,a,l){e.forEach((e=>{var t,n,s,u,i;const o=v(l)||[];e.children&&e.children.length>0?(o.push(null==(t=e.meta)?void 0:t.title),le(e.children,(null==(n=e.meta)?void 0:n.icon)??a,o)):(o.push(null==(s=e.meta)?void 0:s.title),F.value.push({icon:(null==(u=e.meta)?void 0:u.icon)??a,title:null==(i=e.meta)?void 0:i.title,path:e.path,breadcrumb:o}))}))}function te(){ee.value.length&&(P.value-=1,P.value<0&&(P.value=ee.value.length-1),ue())}function ne(){ee.value.length&&(P.value+=1,P.value>ee.value.length-1&&(P.value=0),ue())}function se(){-1!==P.value&&Z.value[P.value].click()}function ue(){let e=0;if(-1!==P.value){e=W.value.scrollTop;const a=Z.value[P.value].offsetTop,l=Z.value[P.value].clientHeight,t=W.value.scrollTop,n=W.value.clientHeight;a+l>t+n?e=a+l-n:a<=t&&(e=a)}W.value.scrollTo({top:e})}return o((()=>X.value),(e=>{e?(document.body.classList.add("hidden"),W.value.scrollTop=0,d("up",te),d("down",ne),d("enter",se),setTimeout((()=>{Q.value.focus()}),500)):(document.body.classList.remove("hidden"),d.unbind("up",te),d.unbind("down",ne),d.unbind("enter",se),setTimeout((()=>{Y.value="",P.value=-1}),500))})),o((()=>ee.value),(()=>{P.value=-1,Z.value=[],ue()})),r((()=>{c.on("global-search-toggle",(()=>{X.value=!X.value})),d("alt+s",(e=>{J.settings.navSearch.enable&&J.settings.navSearch.enableHotkeys&&(e.preventDefault(),X.value=!0)})),d("esc",(e=>{J.settings.navSearch.enable&&J.settings.navSearch.enableHotkeys&&(e.preventDefault(),X.value=!1)})),"filesystem"!==J.settings.app.routeBaseOn?N.routes.forEach((e=>{e.children&&ae(e.children)})):O.menus.forEach((e=>{le(e.children)}))})),(e,a)=>{const l=H,t=p("el-icon"),n=p("el-input"),s=p("el-tag");return f(),h("div",{id:"search",class:j({searching:_(X)}),onClick:a[3]||(a[3]=e=>_(X)&&_(c).emit("global-search-toggle"))},[m("div",I,[m("div",{class:"search-box",onClick:a[2]||(a[2]=g((()=>{}),["stop"]))},[b(n,{ref_key:"searchInputRef",ref:Q,modelValue:_(Y),"onUpdate:modelValue":a[0]||(a[0]=e=>k(Y)?Y.value=e:null),placeholder:"搜索页面，支持标题、URL模糊查询",clearable:"",onKeydown:[a[1]||(a[1]=z((e=>_(c).emit("global-search-toggle")),["esc"])),z(g(te,["prevent"]),["up"]),z(g(ne,["prevent"]),["down"]),z(g(se,["prevent"]),["enter"])]},{prefix:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue","onKeydown"]),"pc"===_(J).mode?(f(),h("div",L,[m("div",M,[b(s,{type:"info",size:"large"},{default:y((()=>[w(S("mac"===_(J).os?"⌥":"Alt")+" + S ",1)])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>a[4]||(a[4]=[w(" 唤醒搜索面板 ")]))),_:1})]),m("div",V,[b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-up"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-down"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>a[5]||(a[5]=[w(" 切换搜索结果 ")]))),_:1})]),m("div",A,[b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-enter"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>a[6]||(a[6]=[w(" 访问页面 ")]))),_:1})]),m("div",B,[b(s,{type:"info",size:"large"},{default:y((()=>a[7]||(a[7]=[w(" ESC ")]))),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>a[8]||(a[8]=[w(" 退出 ")]))),_:1})])])):T("",!0)]),m("div",{ref_key:"searchResultRef",ref:W,class:"result"},[(f(!0),h(C,null,E(_(ee),((e,a)=>(f(),h("a",{key:e.path,ref_for:!0,ref:$,class:j(["item",{actived:a===_(P)}]),onClick:a=>{return l=e.path,void((t=e.link)?window.open(t,"_blank"):x.push(l));var l,t},onMouseover:e=>P.value=a},[b(t,{class:"icon"},{default:y((()=>[e.icon?(f(),R(l,{key:0,name:e.icon},null,8,["name"])):T("",!0)])),_:2},1024),m("div",K,[m("div",U,S(e.title??"[ 无标题 ]"),1),m("div",q,[(f(!0),h(C,null,E(e.breadcrumb,((e,a)=>(f(),h("span",{key:a},[w(S(e??"[ 无标题 ]")+" ",1),b(t,null,{default:y((()=>[b(l,{name:"ep:arrow-right"})])),_:1})])))),128))]),m("div",G,S(e.path),1)])],42,D)))),128))],512)])],2)}}}),[["__scopeId","data-v-7119310d"]]);export{N as default};