import{_ as e}from"../buy/buy.265b8d04.js";import{u as a,q as l,_ as t,N as n}from"../mjDraw/mjDraw.c9dd881d.js";import{c as i,a as s,i as o,b as r,d as c,e as u,f as d,u as v,g as p,h as m,r as g,t as h,j as f,k as b,p as y,l as _,m as x,n as j,o as w,q as S,s as k,N as I,v as V,w as z,x as C,y as B,z as T,A as W,B as $,C as P,D as F,E as M,F as E,G as D,_ as N,H as U,I as R,J as A,K as J,L as K,M as L,O,P as q,Q as H,R as G,S as Y,T as X,U as Q,V as Z}from"../main-e6771d5b.js";import{m as ee}from"../marked.esm/marked.esm.cb1ff4ec.js";const ae=i("switch","\n height: var(--n-height);\n min-width: var(--n-width);\n vertical-align: middle;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n outline: none;\n justify-content: center;\n align-items: center;\n",[s("children-placeholder","\n height: var(--n-rail-height);\n display: flex;\n flex-direction: column;\n overflow: hidden;\n pointer-events: none;\n visibility: hidden;\n "),s("rail-placeholder","\n display: flex;\n flex-wrap: none;\n "),s("button-placeholder","\n width: calc(1.75 * var(--n-rail-height));\n height: var(--n-rail-height);\n "),i("base-loading","\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n font-size: calc(var(--n-button-width) - 4px);\n color: var(--n-loading-color);\n transition: color .3s var(--n-bezier);\n ",[o({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),s("checked, unchecked","\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n box-sizing: border-box;\n position: absolute;\n white-space: nowrap;\n top: 0;\n bottom: 0;\n display: flex;\n align-items: center;\n line-height: 1;\n "),s("checked","\n right: 0;\n padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),s("unchecked","\n left: 0;\n justify-content: flex-end;\n padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),r("&:focus",[s("rail","\n box-shadow: var(--n-box-shadow-focus);\n ")]),c("round",[s("rail","border-radius: calc(var(--n-rail-height) / 2);",[s("button","border-radius: calc(var(--n-button-height) / 2);")])]),u("disabled",[u("icon",[c("rubber-band",[c("pressed",[s("rail",[s("button","max-width: var(--n-button-width-pressed);")])]),s("rail",[r("&:active",[s("button","max-width: var(--n-button-width-pressed);")])]),c("active",[c("pressed",[s("rail",[s("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),s("rail",[r("&:active",[s("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),c("active",[s("rail",[s("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),s("rail","\n overflow: hidden;\n height: var(--n-rail-height);\n min-width: var(--n-rail-width);\n border-radius: var(--n-rail-border-radius);\n cursor: pointer;\n position: relative;\n transition:\n opacity .3s var(--n-bezier),\n background .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-rail-color);\n ",[s("button-icon","\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n font-size: calc(var(--n-button-height) - 4px);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n justify-content: center;\n align-items: center;\n line-height: 1;\n ",[o()]),s("button",'\n align-items: center; \n top: var(--n-offset);\n left: var(--n-offset);\n height: var(--n-button-height);\n width: var(--n-button-width-pressed);\n max-width: var(--n-button-width);\n border-radius: var(--n-button-border-radius);\n background-color: var(--n-button-color);\n box-shadow: var(--n-button-box-shadow);\n box-sizing: border-box;\n cursor: inherit;\n content: "";\n position: absolute;\n transition:\n background-color .3s var(--n-bezier),\n left .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ')]),c("active",[s("rail","background-color: var(--n-rail-color-active);")]),c("loading",[s("rail","\n cursor: wait;\n ")]),c("disabled",[s("rail","\n cursor: not-allowed;\n opacity: .5;\n ")])]);let le;const te=d({name:"Switch",props:Object.assign(Object.assign({},p.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),setup(e){void 0===le&&(le="undefined"==typeof CSS||void 0!==CSS.supports&&CSS.supports("width","max(1px)"));const{mergedClsPrefixRef:l,inlineThemeDisabled:t}=v(e),n=p("Switch","-switch",ae,k,e,l),i=m(e),{mergedSizeRef:s,mergedDisabledRef:o}=i,r=g(e.defaultValue),c=h(e,"value"),u=a(c,r),d=f((()=>u.value===e.checkedValue)),j=g(!1),w=g(!1),S=f((()=>{const{railStyle:a}=e;if(a)return a({focused:w.value,checked:d.value})}));function I(a){const{"onUpdate:value":l,onChange:t,onUpdateValue:n}=e,{nTriggerFormInput:s,nTriggerFormChange:o}=i;l&&z(l,a),n&&z(n,a),t&&z(t,a),r.value=a,s(),o()}const V=f((()=>{const{value:e}=s,{self:{opacityDisabled:a,railColor:l,railColorActive:t,buttonBoxShadow:i,buttonColor:o,boxShadowFocus:r,loadingColor:c,textColor:u,iconColor:d,[b("buttonHeight",e)]:v,[b("buttonWidth",e)]:p,[b("buttonWidthPressed",e)]:m,[b("railHeight",e)]:g,[b("railWidth",e)]:h,[b("railBorderRadius",e)]:f,[b("buttonBorderRadius",e)]:x},common:{cubicBezierEaseInOut:j}}=n.value;let w,S,k;return le?(w=`calc((${g} - ${v}) / 2)`,S=`max(${g}, ${v})`,k=`max(${h}, calc(${h} + ${v} - ${g}))`):(w=y((_(g)-_(v))/2),S=y(Math.max(_(g),_(v))),k=_(g)>_(v)?h:y(_(h)+_(v)-_(g))),{"--n-bezier":j,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":o,"--n-button-width":p,"--n-button-width-pressed":m,"--n-button-height":v,"--n-height":S,"--n-offset":w,"--n-opacity-disabled":a,"--n-rail-border-radius":f,"--n-rail-color":l,"--n-rail-color-active":t,"--n-rail-height":g,"--n-rail-width":h,"--n-width":k,"--n-box-shadow-focus":r,"--n-loading-color":c,"--n-text-color":u,"--n-icon-color":d}})),C=t?x("switch",f((()=>s.value[0])),V,e):void 0;return{handleClick:function(){e.loading||o.value||(u.value!==e.checkedValue?I(e.checkedValue):I(e.uncheckedValue))},handleBlur:function(){w.value=!1,function(){const{nTriggerFormBlur:e}=i;e()}(),j.value=!1},handleFocus:function(){w.value=!0,function(){const{nTriggerFormFocus:e}=i;e()}()},handleKeyup:function(a){e.loading||o.value||" "===a.key&&(u.value!==e.checkedValue?I(e.checkedValue):I(e.uncheckedValue),j.value=!1)},handleKeydown:function(a){e.loading||o.value||" "===a.key&&(a.preventDefault(),j.value=!0)},mergedRailStyle:S,pressed:j,mergedClsPrefix:l,mergedValue:u,checked:d,mergedDisabled:o,cssVars:t?void 0:V,themeClass:null==C?void 0:C.themeClass,onRender:null==C?void 0:C.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:a,checked:l,mergedRailStyle:t,onRender:n,$slots:i}=this;null==n||n();const{checked:s,unchecked:o,icon:r,"checked-icon":c,"unchecked-icon":u}=i,d=!(j(r)&&j(c)&&j(u));return w("div",{role:"switch","aria-checked":l,class:[`${e}-switch`,this.themeClass,d&&`${e}-switch--icon`,l&&`${e}-switch--active`,a&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},w("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:t},S(s,(a=>S(o,(l=>a||l?w("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},w("div",{class:`${e}-switch__rail-placeholder`},w("div",{class:`${e}-switch__button-placeholder`}),a),w("div",{class:`${e}-switch__rail-placeholder`},w("div",{class:`${e}-switch__button-placeholder`}),l)):null)))),w("div",{class:`${e}-switch__button`},S(r,(a=>S(c,(l=>S(u,(t=>w(I,null,{default:()=>this.loading?w(V,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(l||a)?w("div",{class:`${e}-switch__button-icon`,key:l?"checked-icon":"icon"},l||a):this.checked||!t&&!a?null:w("div",{class:`${e}-switch__button-icon`,key:t?"unchecked-icon":"icon"},t||a)}))))))),S(s,(a=>a&&w("div",{key:"checked",class:`${e}-switch__checked`},a))),S(o,(a=>a&&w("div",{key:"unchecked",class:`${e}-switch__unchecked`},a))))))}}),ne=e=>(E("data-v-fcbf576b"),e=e(),D(),e),ie={class:"popup"},se={class:"item"},oe=ne((()=>P("p",null,"relax模式（每日额度，零点重置）",-1))),re={class:"item1"},ce={style:{display:"flex","justify-content":"space-between","align-items":"center"}},ue=ne((()=>P("p",null,"fast模式剩余额度",-1))),de=[ne((()=>P("p",{style:{"font-size":"12px",color:"#23A559"}},"购买绘画额度",-1))),ne((()=>P("div",{class:"buyBtn"},"购买",-1)))],ve=N(d({__name:"index",props:{updated:Boolean},setup(e){C(e,(e=>{e.updated&&r()}));const a=B(),t=f((()=>a.userInfo)),n=g(),i=g(),s=g(),o=g();async function r(){if(t.value.vipLeavelId){const e=await T({relateType:"mj",vipLeavelId:t.value.vipLeavelId});n.value=e.data.type1,i.value=e.data.type2}else{const e=await W({keys:["fast_vip_free","relax_vip_free"]});n.value=e.data.fast_vip_free,i.value=e.data.relax_vip_free}t.lifetimeVip||t.vipExpire||(n.value=0,i.value=0),l().then((e=>{s.value=e.data.fast,o.value=e.data.relax}))}r();const c=g();function u(){let e=c.value;window.open(e,"target")}return W({keys:["mjTaobao"]}).then((e=>{c.value=e.data.mjTaobao})),(e,a)=>(M(),$("div",ie,[P("div",se,[oe,P("p",null,F(o.value)+"/"+F(i.value),1)]),P("div",re,[P("div",ce,[ue,P("p",null,F(t.value.score||0),1)])]),P("div",{class:"buy",onClick:u},de)]))}}),[["__scopeId","data-v-fcbf576b"]]),pe="/static/svg/yellow-0a39b5b0.svg",me="/static/svg/green-bc7bf4e7.svg",ge="/static/svg/red-56c86a89.svg",he={class:"select_V"},fe={class:"active_V"},be={style:{display:"flex","align-items":"self-start","justify-content":"space-between"}},ye={style:{"font-size":"10px",color:"#5E6065"}},_e={style:{"font-size":"12px",color:"#38393E"}},xe={key:0,class:"poput"},je=["onClick"],we={key:0,src:"/static/svg/isSelect-64022b14.svg",alt:""},Se=N(d({__name:"selectBox",props:{title:String,value:String,array:Array,id:Number},emits:["mj_V","mj_Style","mj_S","mj_W","nj_niji","nj_Style","nj_S","nj_W"],setup(e,{emit:a}){const l=e,n=a,i=g(!1);function s(){i.value=!i.value}const o=g(0),r=g();function c(e){o.value=e.id,r.value=e.name,i.value=!1,n("mj_V",e),n("mj_Style",e),n("mj_S",e),n("mj_W",e),n("nj_niji",e),n("nj_Style",e),n("nj_S",e),n("nj_W",e)}return U((()=>{l.array&&(l.id?(r.value=l.array[l.id].name,o.value=l.id,i.value=!1):c(l.array[0]))})),(e,a)=>(M(),$("div",he,[P("div",fe,[P("div",be,[P("div",null,[P("p",ye,F(l.title),1),P("p",_e,F(r.value),1)]),P("img",{style:{cursor:"pointer"},src:t,class:R(i.value?"open":"close"),alt:"",onClick:s},null,2)]),i.value?(M(),$("div",xe,[(M(!0),$(A,null,J(l.array,(e=>(M(),$("div",{class:"item",key:e.id},[P("div",{class:"selectItem",onClick:a=>c(e)},[P("p",{style:K(o.value==e.id?"color:#23A559":"")},F(e.name),5),o.value==e.id?(M(),$("img",we)):L("",!0)],8,je)])))),128))])):L("",!0)])]))}}),[["__scopeId","data-v-f5721289"]]),ke={class:"inputBox"},Ie=["placeholder"],Ve=N(d({__name:"inputBox",props:{placeholder:String,text:String},emits:["describe","params","nj_describe","nj_params"],setup(e,{emit:a}){const l=e,t=a,n=g();function i(){t("describe",n.value),t("nj_describe",n.value),t("params",n.value),t("nj_params",n.value)}return l.text&&(n.value=l.text),(e,a)=>(M(),$("div",ke,[O(P("input",{type:"text",onInput:i,placeholder:l.placeholder,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e)},null,40,Ie),[[q,n.value]])]))}}),[["__scopeId","data-v-e49df75d"]]),ze=e=>(E("data-v-b630c5d2"),e=e(),D(),e),Ce={class:"settingBox"},Be={class:"onlyRelax"},Te=ze((()=>P("p",null,"只使用Relax模式",-1))),We=ze((()=>P("div",{class:"popover"},[P("p",{style:{"font-size":"12px"}},"小贴士:"),P("div",{style:{display:"flex","align-items":"self-start","margin-top":"8px"}},[P("img",{src:pe,alt:""}),P("p",{style:{"margin-left":"4px","font-size":"12px"}},"工作时间使用人比较多relax等待比较久的建议开启fagt模式享受极速出图")]),P("div",{style:{display:"flex","align-items":"self-start","margin-top":"8px"}},[P("img",{src:me,alt:""}),P("p",{style:{"margin-left":"4px","font-size":"12px"}},"晚上和周末使用的人比较少,relax模式出图也比较快,可以开启这个按钮节省您的fast额度")]),P("div",{style:{display:"flex","align-items":"self-start","margin-top":"8px"}},[P("img",{src:ge,alt:""}),P("p",{style:{"margin-left":"4px","font-size":"12px"}},"注意！！！在以前fa8t额度出的图上操作还是会用fast额度,切换re!ax模式后不会马上生效,只有在用 /imagine 出新图后,以及新图下方各种按钮出图命令,才会使用relax模式")])],-1))),$e={class:"isTranslate"},Pe=ze((()=>P("p",null,"自动翻译为英文",-1))),Fe=ze((()=>P("div",{class:"popover"},[P("p",{style:{"font-size":"12px"}},"小贴士:"),P("div",{style:{display:"flex","align-items":"self-start","margin-top":"8px"}},[P("img",{src:pe,alt:""}),P("p",{style:{"margin-left":"4px","font-size":"12px"}},"Midjourney对中文的克持并不是很好,建设古接使用英文")]),P("div",{style:{display:"flex","align-items":"self-start","margin-top":"8px"}},[P("img",{src:me,alt:""}),P("p",{style:{"margin-left":"4px","font-size":"12px"}},"如果想直接输入中文可开启此功能,开启后会自动把中文的提示词翻译为英文")]),P("div",{style:{display:"flex","align-items":"self-start","margin-top":"8px"}},[P("img",{src:ge,alt:""}),P("p",{style:{"margin-left":"4px","font-size":"12px"}},"目前使用的是收费版的谷歌云的翻译服务")])],-1))),Me={class:"MJBox"},Ee=ze((()=>P("div",{class:"title"},"Midjourney Bot",-1))),De={class:"version"},Ne={class:"style"},Ue={class:"stylize"},Re={class:"weird"},Ae={class:"describe"},Je={class:"parameter"},Ke={class:"NJBox"},Le=ze((()=>P("div",{class:"title"},"Niji Bot",-1))),Oe={class:"version"},qe={class:"style"},He={class:"stylize"},Ge={class:"weird"},Ye={class:"describe"},Xe={class:"parameter"},Qe=N(d({__name:"index",setup(e){const a=g(!1);if(localStorage.getItem("relaxValue")){let e=localStorage.getItem("relaxValue");"0"==e?a.value=!0:"1"==e&&(a.value=!1)}else a.value=!1;function l(e){let l;a.value=e,l=a.value?"2":"1",localStorage.setItem("relaxValue",l)}l(a.value);const t=g(!0);if(localStorage.getItem("isTranslateValue")){let e=localStorage.getItem("isTranslateValue");"0"==e?t.value=!1:"1"==e&&(t.value=!0)}else t.value=!0;function i(e){let a;t.value=e,a=t.value?"1":"0",localStorage.setItem("isTranslateValue",a)}function s(){return a.value?"background:#0041C7":a.value?void 0:"background:#EDEEF0"}i(t.value);const o=()=>t.value?"background:#0041C7":t.value?void 0:"background:#EDEEF0",r=g({mj_V:"",mj_S:"",mj_W:"",mj_Style:""}),c=[{name:"默认",value:"--v 6.0",id:0},{name:"6.0",value:"--v 6.0",id:1},{name:"5.2",value:"--v 5.2",id:2},{name:"5.1",value:"--v 5.1",id:3}];function u(e){r.value.mj_V=e.value,localStorage.setItem("mj_V",e.id),B()}const d=g();if(localStorage.getItem("mj_V")){let e=localStorage.getItem("mj_V");d.value=e,r.value.mj_V=c[e].value}const v=[{name:"默认",value:"--niji 6",id:0},{name:"6",value:"--niji 6",id:1},{name:"5",value:"--niji 5",id:2}],p=[{name:"默认",value:"--s 100",id:0},{name:"low(低，50)",value:"--s 50",id:1},{name:"med(中，100，默认)",value:"--s 100",id:2},{name:"hight(高，250)",value:"--s 250",id:3},{name:"very hight(非常高，750)",value:"--s 750",id:4}];function m(e){localStorage.setItem("mj_S",e.id),r.value.mj_S=e.value,B()}const h=g();if(localStorage.getItem("mj_S")){let e=localStorage.getItem("mj_S");h.value=e,r.value.mj_S=p[e].value}const f=[{name:"默认",value:"--w 0",id:0},{name:"0(默认)",value:"--w 0",id:1},{name:"250",value:"--w 250",id:2},{name:"500",value:"--w 500",id:3},{name:"1000",value:"--w 1000",id:4}],b=[{name:"默认",value:"--w 0",id:0}];function y(e){localStorage.setItem("mj_W",e.id),r.value.mj_W=e.value,B()}const _=g();if(localStorage.getItem("mj_W")){let e=localStorage.getItem("mj_W");_.value=e,r.value.mj_W=f[e].value}const x=[{name:"默认",value:"--style raw",id:0},{name:"raw(原始的)",value:"--style raw",id:1}],j=[{name:"默认",value:"raw",id:0}];function w(e){localStorage.setItem("mj_Style",e.id),r.value.mj_Style=e.value,B()}const S=g();if(localStorage.getItem("mj_Style")){let e=localStorage.getItem("mj_Style");S.value=e,r.value.mj_Style=x[e].value}const k=g();k.value=r.value.mj_V+" "+r.value.mj_S+" "+r.value.mj_W+" ";const I=g();function V(e){I.value=e,localStorage.setItem("describeText",e)}if(localStorage.getItem("describeText")){let e=localStorage.getItem("describeText");I.value=e}const z=g();function C(e){z.value=e,localStorage.setItem("otherParams",e),k.value=r.value.mj_V+" "+r.value.mj_S+" "+r.value.mj_W+" "+e,B()}if(localStorage.getItem("otherParams")){let e=localStorage.getItem("otherParams");z.value=e,k.value=r.value.mj_V+" "+r.value.mj_S+" "+r.value.mj_W+" "+e}function B(){let e=localStorage.getItem("otherParams");null==e&&(e=""),k.value=r.value.mj_V+" "+r.value.mj_S+" "+r.value.mj_W+" "+e,localStorage.setItem("extendStr",k.value)}B();const T=g({nj_niji:"",nj_S:"",nj_W:"",nj_Style:""});function W(e){T.value.nj_niji=e.value,localStorage.setItem("nj_niji",e.id),X()}const F=g();if(localStorage.getItem("nj_niji")){let e=localStorage.getItem("nj_niji");F.value=e,T.value.nj_niji=v[e].value}function E(e){T.value.nj_Style=e.value,localStorage.setItem("nj_Style",e.id),X()}const D=g();if(localStorage.getItem("nj_Style")){let e=localStorage.getItem("nj_Style");D.value=e,T.value.nj_Style=j[e].value}function N(e){T.value.nj_S=e.value,localStorage.setItem("nj_S",e.id),X()}const U=g();if(localStorage.getItem("nj_S")){let e=localStorage.getItem("nj_S");U.value=e,T.value.nj_S=p[e].value}function R(e){T.value.nj_W=e.value,localStorage.setItem("nj_W",e.id),X()}const A=g();if(localStorage.getItem("nj_W")){let e=localStorage.getItem("nj_W");A.value=e,T.value.nj_W=b[e].value}const J=g();function K(e){J.value=e,localStorage.setItem("nj_describeText",e)}if(localStorage.getItem("nj_describeText")){let e=localStorage.getItem("nj_describeText");J.value=e}const L=g();function O(e){L.value=e,localStorage.setItem("nj_otherParams",e),X()}if(localStorage.getItem("nj_otherParams")){let e=localStorage.getItem("nj_otherParams");L.value=e}const q=g();function X(){let e=localStorage.getItem("nj_otherParams");null==e&&(e=""),q.value=T.value.nj_niji+" "+T.value.nj_S+" "+T.value.nj_W+" "+e,localStorage.setItem("nj_extendStr",q.value)}return X(),(e,r)=>(M(),$("div",Ce,[P("div",Be,[Te,H(Y(n),{trigger:"hover",placement:"bottom",style:{background:"rgba(0, 5, 13, 0.62)",color:"#fff","border-radius":"12px",width:"600px"}},{trigger:G((()=>[H(Y(te),{size:"small",value:a.value,"onUpdate:value":[r[0]||(r[0]=e=>a.value=e),l],"rail-style":s},null,8,["value"])])),default:G((()=>[We])),_:1})]),P("div",$e,[Pe,H(Y(n),{trigger:"hover",placement:"bottom",style:{background:"rgba(0, 5, 13, 0.62)",color:"#fff","border-radius":"12px",width:"600px"}},{trigger:G((()=>[H(Y(te),{size:"small",value:t.value,"onUpdate:value":[r[1]||(r[1]=e=>t.value=e),i],"rail-style":o},null,8,["value"])])),default:G((()=>[Fe])),_:1})]),P("div",Me,[Ee,P("div",De,[H(Se,{value:"6",onMj_V:u,id:d.value,title:"Version （版本--v）",array:c},null,8,["id"])]),P("div",Ne,[H(Se,{value:"默认",onMj_Style:w,id:S.value,title:"Style（风格--style）",array:x},null,8,["id"])]),P("div",Ue,[H(Se,{value:"默认",onMj_S:m,id:h.value,title:"Stylize（风格影响强度--s）",array:p},null,8,["id"])]),P("div",Re,[H(Se,{value:"默认",onMj_W:y,id:_.value,title:"Weird （怪异感--w）",array:f},null,8,["id"])]),P("div",Ae,[H(Ve,{placeholder:"自定义描述",text:I.value,onDescribe:V},null,8,["text"])]),P("div",Je,[H(Ve,{placeholder:"自定义参数",text:z.value,onParams:C},null,8,["text"])])]),P("div",Ke,[Le,P("div",Oe,[H(Se,{value:"6",onNj_niji:W,id:F.value,title:"Version （版本--niji）",array:v},null,8,["id"])]),P("div",qe,[H(Se,{value:"默认",onNj_Style:E,id:D.value,title:"Style（风格--style）",array:j},null,8,["id"])]),P("div",He,[H(Se,{value:"默认",onNj_S:N,id:U.value,title:"Stylize（风格影响强度--s）",array:p},null,8,["id"])]),P("div",Ge,[H(Se,{value:"默认",title:"Weird （怪异感--w）",id:A.value,onNj_W:R,array:b},null,8,["id"])]),P("div",Ye,[H(Ve,{placeholder:"自定义描述",onNj_describe:K,text:J.value},null,8,["text"])]),P("div",Xe,[H(Ve,{placeholder:"自定义参数",onNj_params:O,text:L.value},null,8,["text"])])])]))}}),[["__scopeId","data-v-b630c5d2"]]),Ze=e=>(E("data-v-629ec370"),e=e(),D(),e),ea={class:"homePage"},aa={class:"homePageMain"},la=Ze((()=>P("div",{class:"topTitle"},[P("img",{src:"/static/svg/homePageTip-7703bf23.svg",alt:""}),P("p",{class:"title"}," 晚上12点后可能会升级维护, 持续半小时左右. 遇到任何错误或BUG请向客服反馈，9点到24点保证可以用fast模式，0点到9点fast模式不保证，使用人员比较少，relax模式出图也很快 ")],-1))),ta=Ze((()=>P("p",{class:"buyTitle"},"每个人的FAST的模式使用时间是有限的, 如果FAST模式用完, 可以单独购买额度 ",-1))),na=[Ze((()=>P("p",{style:{"margin-right":"3px"}},"购买/续费",-1))),Ze((()=>P("img",{src:e,alt:""},null,-1)))],ia={class:"bottomBox"},sa={class:"bottomLeft"},oa={class:"MidJourney"},ra=[Ze((()=>P("div",{style:{"margin-right":"4px"}},"打开 Mid journey",-1))),Ze((()=>P("img",{src:e,alt:""},null,-1)))],ca={class:"VIPData"},ua=Ze((()=>P("p",null,"有效期至",-1))),da={key:0},va={key:1},pa=Ze((()=>P("p",null,"设置（替代/settings）",-1))),ma=Ze((()=>P("p",null,"额度",-1))),ga={class:"openGallery"},ha=Q('<div class="openMidJourney" data-v-629ec370><div class="openBtn" data-v-629ec370><div style="margin-right:4px;" data-v-629ec370>打开 Mid journey画廊</div><img src="'+e+'" alt="" data-v-629ec370></div></div><p style="font-size:12px;color:#38393e;" data-v-629ec370>官方展示优秀作品</p>',2),fa={class:"VIPData"},ba=Ze((()=>P("p",null,"有效期至",-1))),ya={key:0},_a={key:1},xa={class:"bottomRight"},ja={class:"userInfo"},wa={class:"userName"},Sa=Ze((()=>P("img",{style:{width:"16px",height:"16px"},src:"/static/svg/avator-71253b0c.svg",alt:""},null,-1))),ka={style:{"margin-left":"4px",overflow:"hidden","text-overflow":"ellipsis",width:"80px","text-wrap":"nowrap"}},Ia=Ze((()=>P("div",{class:"title"},"续费地址",-1))),Va=Ze((()=>P("p",null,"MIDJOURNEY",-1))),za=[Ze((()=>P("p",{style:{"margin-right":"3px"}},"MJ续费地址",-1))),Ze((()=>P("img",{src:e,alt:""},null,-1)))],Ca=Ze((()=>P("p",null,"PIKA",-1))),Ba=[Ze((()=>P("p",{style:{"margin-right":"3px"}},"PIKA无限出视频",-1))),Ze((()=>P("img",{src:e,alt:""},null,-1)))],Ta={class:"renewalFee"},Wa=Ze((()=>P("div",{class:"title"},"如遇打开网站转值，加载不出来，没有输入框等问题，请会试使用下列浏览器",-1))),$a={class:"mjUrl"},Pa=Ze((()=>P("p",null,"桌面",-1))),Fa=[Ze((()=>P("p",{style:{"margin-right":"3px"}},"Chrome下载地址",-1))),Ze((()=>P("img",{src:e,alt:""},null,-1)))],Ma={class:"videpUrl"},Ea=Ze((()=>P("p",null,"移动端",-1))),Da=[Ze((()=>P("p",{style:{"margin-right":"3px"}},"Edge下载地址",-1))),Ze((()=>P("img",{src:e,alt:""},null,-1)))],Na=Ze((()=>P("div",{class:"title"},"关于/setting的问题， 为了让大家的/setting不要被别人影响，我们在对话框关闭了这个功能，并集成在了面板的左则您可以在左训设量后出图。",-1))),Ua=Ze((()=>P("div",{class:"title"}," 进入界面后，为了保证每个人账号的私密性，避免你的频道被他人误删，我们左侧频道板块是设置成无法点击的，你进入的界面系统已经自动为你产生了你的私密频道，你可以直接输入命令生成图片",-1))),Ra=Ze((()=>P("div",{class:"title"},"使用我们国内系统，默认已经添加机器人到服务器，直接看第二节课就行。",-1))),Aa=Ze((()=>P("p",null,"教程地址",-1))),Ja=[Ze((()=>P("p",{style:{"margin-right":"3px"}},"MJ教程地址",-1))),Ze((()=>P("img",{src:e,alt:""},null,-1)))],Ka={class:"announcement"},La=["innerHTML"],Oa={class:"codeBox"},qa=["src"],Ha=Ze((()=>P("div",{style:{padding:"12px","font-size":"12px","margin-top":"12px",color:"#38393E"}}," 如果有使用需求可以通过上面微信联系 ",-1))),Ga=N(d({__name:"index",setup(e){const a=B(),l=f((()=>a.isLogin)),n=f((()=>a.userInfo)),i=g(),s=g(),o=g();function r(){a.logOut(),X.push({path:"/login",replace:!0})}ee.setOptions({pedantic:!0,gfm:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!0}),U((()=>{l.value?(W({keys:["noticeInfo"]}).then((e=>{o.value=ee(e.data.noticeInfo)})),p(),null!=n.value.vipExpire&&(i.value=n.value.vipExpire,s.value=Math.floor((new Date(n.value.vipExpire).getTime()-(new Date).getTime())/3600/24/1e3))):X.push({path:"/login",replace:!0})}));const c=g(!1),u=g(!1);function d(){a.getUserInfo(),c.value=!0,u.value=!0,setTimeout((()=>u.value=!1),300),setTimeout((()=>c.value=!1),500)}const v=g(""),p=async()=>{v.value=await(async()=>await Z({keys:["wechatImage"]}).then((e=>e.data)))()};function m(e){if("desktop"==e){let e="https://www.google.cn/chrome/";window.open(e,"_blank")}else if("mobile"==e){let e="https://www.microsoft.com/zh-cn/edge/download?form=MA13FJ";window.open(e,"_blank")}}const h=g(!0);function b(){h.value=!h.value}const y=g(!1);function _(){y.value=!y.value}function x(){window.open("/channels/@me","_blank")}const j=g(),w=g();function S(){let e=w.value;window.open(e,"_blank")}function k(){let e=j.value;window.open(e,"_blank")}return W({keys:["mjTutorials","mjTaobao"]}).then((e=>{j.value=e.data.mjTutorials,w.value=e.data.mjTaobao})),(e,a)=>(M(),$("div",ea,[P("div",aa,[la,P("div",{class:"topBuy"},[ta,P("div",{class:"buy",onClick:S},na)]),P("div",ia,[P("div",sa,[P("div",oa,[P("div",{class:"openMidJourney"},[P("div",{class:"openBtn",onClick:x},ra)]),P("div",ca,[ua,null==n.value.vipExpire?(M(),$("p",da,"暂未开通会员")):(M(),$("p",va,F(i.value)+"（"+F(s.value)+"天）",1))]),P("div",{class:"openSetting",style:K(y.value?"border-radius:12px 12px 0 0":"")},[pa,P("img",{src:t,class:R(y.value?"open":"close"),alt:"",onClick:_},null,2)],4),P("div",{class:R(y.value?"settingPopup":"settingPopup1")},[H(Qe)],2),P("div",{class:"quota",style:K(h.value?"border-radius:12px 12px 0 0":"")},[ma,P("img",{src:t,class:R(h.value?"open":"close"),alt:"",onClick:b},null,2)],4),P("div",{class:R(h.value?"quotaPopup":"quotaPopup1")},[H(ve,{updated:c.value},null,8,["updated"])],2)]),P("div",ga,[ha,P("div",fa,[ba,null==n.value.vipExpire?(M(),$("p",ya,"暂未开通会员")):(M(),$("p",_a,F(i.value)+"（"+F(s.value)+"天）",1))])])]),P("div",xa,[P("div",ja,[P("div",wa,[Sa,P("div",ka,F(n.value.username),1)]),P("div",{class:"loginOut",onClick:r}," 退出 "),P("div",{class:"update",onClick:d,style:K(u.value?"background:#4048a0":"")}," 更新数据 ",4)]),P("div",{class:"renewalFee"},[Ia,P("div",{class:"mjUrl"},[Va,P("div",{class:"buy",onClick:S},za)]),P("div",{class:"videpUrl"},[Ca,P("div",{class:"buy",onClick:S},Ba)])]),P("div",Ta,[Wa,P("div",$a,[Pa,P("div",{class:"buy",onClick:a[0]||(a[0]=e=>m("desktop"))},Fa)]),P("div",Ma,[Ea,P("div",{class:"buy",onClick:a[1]||(a[1]=e=>m("mobile"))},Da)])]),P("div",{class:"renewalFee"},[Na,Ua,Ra,P("div",{class:"videpUrl"},[Aa,P("div",{class:"buy",onClick:k},Ja)])]),P("div",Ka,[P("p",{innerHTML:o.value},null,8,La)]),P("div",Oa,[P("img",{src:v.value,alt:""},null,8,qa)]),Ha])])])]))}}),[["__scopeId","data-v-629ec370"]]);export{Ga as default};
