
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,i as t,a as r,A as n,r as a,q as o,D as i,B as s,j as c,o as u,c as p,b as l,e as f,G as d,f as m,g as h,J as v,I as g,Y as E,X as b,aa as y,s as x,h as w,t as T,_ as A}from"../main-c47e4581.js";import C from"../Tools/index.4c4ff207.js";import"../index/index.8d1d6cf1.js";import"../access/access.ae69f1ea.js";function R(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var a=1,o="";if("?"===e[s=r+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--a){s++;break}}else if("("===e[s]&&(a++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));o+=e[s++]}else o+=e[s++]+e[s++];if(a)throw new TypeError("Unbalanced pattern at ".concat(r));if(!o)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:o}),r=s}else{for(var i="",s=r+1;s<e.length;){var c=e.charCodeAt(s);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;i+=e[s++]}if(!i)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:i}),r=s}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,a=void 0===n?"./":n,o=t.delimiter,i=void 0===o?"/#?":o,s=[],c=0,u=0,p="",l=function(e){if(u<r.length&&r[u].type===e)return r[u++].value},f=function(e){var t=l(e);if(void 0!==t)return t;var n=r[u],a=n.type,o=n.index;throw new TypeError("Unexpected ".concat(a," at ").concat(o,", expected ").concat(e))},d=function(){for(var e,t="";e=l("CHAR")||l("ESCAPED_CHAR");)t+=e;return t},m=function(e){var t=s[s.length-1],r=e||(t&&"string"==typeof t?t:"");if(t&&!r)throw new TypeError('Must have text between two parameters, missing text after "'.concat(t.name,'"'));return!r||function(e){for(var t=0,r=i;t<r.length;t++){var n=r[t];if(e.indexOf(n)>-1)return!0}return!1}(r)?"[^".concat(N(i),"]+?"):"(?:(?!".concat(N(r),")[^").concat(N(i),"])+?")};u<r.length;){var h=l("CHAR"),v=l("NAME"),g=l("PATTERN");if(v||g){var E=h||"";-1===a.indexOf(E)&&(p+=E,E=""),p&&(s.push(p),p=""),s.push({name:v||c++,prefix:E,suffix:"",pattern:g||m(E),modifier:l("MODIFIER")||""})}else{var b=h||l("ESCAPED_CHAR");if(b)p+=b;else if(p&&(s.push(p),p=""),l("OPEN")){E=d();var y=l("NAME")||"",x=l("PATTERN")||"",w=d();f("CLOSE"),s.push({name:y||(x?c++:""),pattern:y&&!x?m(E):x,prefix:E,suffix:w,modifier:l("MODIFIER")||""})}else f("END")}}return s}function M(e,t){return function(e,t){void 0===t&&(t={});var r=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,a=void 0===n?function(e){return e}:n,o=t.validate,i=void 0===o||o,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),r)}));return function(t){for(var r="",n=0;n<e.length;n++){var o=e[n];if("string"!=typeof o){var c=t?t[o.name]:void 0,u="?"===o.modifier||"*"===o.modifier,p="*"===o.modifier||"+"===o.modifier;if(Array.isArray(c)){if(!p)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(0===c.length){if(u)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var l=0;l<c.length;l++){var f=a(c[l],o);if(i&&!s[n].test(f))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(f,'"'));r+=o.prefix+f+o.suffix}}else if("string"!=typeof c&&"number"!=typeof c){if(!u){var d=p?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(d))}}else{f=a(String(c),o);if(i&&!s[n].test(f))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(f,'"'));r+=o.prefix+f+o.suffix}}else r+=o}return r}}(R(e,t),t)}function N(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}const O={class:"left-box"},P=e({name:"Topbar"}),_=A(e({...P,setup(e){const A=t(),R=r(),N=n((()=>"mobile"===R.mode||["side","head","single"].includes(R.settings.menu.menuMode)&&R.settings.menu.enableSubMenuCollapseButton)),P=n((()=>{const e=[];return R.settings.home.enable&&e.push({path:"/",title:R.settings.home.title}),A.meta.breadcrumbNeste&&e.push(...A.meta.breadcrumbNeste.filter((e=>!1===e.hide))),e})),_=a(0),D=a(!1);function I(){_.value=(document.documentElement||document.body).scrollTop}return o((()=>{window.addEventListener("scroll",I)})),i((()=>{window.removeEventListener("scroll",I)})),s(_,((e,t)=>{const r=parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-topbar-height"));D.value="sticky"===R.settings.topbar.mode&&e>t&&e>r})),(e,t)=>{const r=x,n=c("el-icon"),a=c("el-breadcrumb-item"),o=c("el-breadcrumb");return u(),p("div",{class:d(["topbar-container",{[`topbar-${f(R).settings.topbar.mode}`]:!0,shadow:f(_),hide:f(D)}]),"data-fixed-calc-width":""},[l("div",O,[f(N)?(u(),p("div",{key:0,class:d(["sidebar-collapse",{"is-collapse":f(R).settings.menu.subMenuCollapse}]),onClick:t[0]||(t[0]=e=>f(R).toggleSidebarCollapse())},[m(n,null,{default:h((()=>[m(r,{name:"toolbar-collapse"})])),_:1})],2)):v("",!0),f(R).settings.breadcrumb.enable&&"pc"===f(R).mode&&"filesystem"!==f(R).settings.app.routeBaseOn?(u(),g(o,{key:1},{default:h((()=>[m(y,{name:"breadcrumb"},{default:h((()=>[(u(!0),p(E,null,b(f(P),((e,t)=>{return u(),g(a,{key:e.path,to:t<f(P).length-1?(r=e.path,M(r)(A.params)):""},{default:h((()=>[w(T(e.title??"[ 无标题 ]"),1)])),_:2},1032,["to"]);var r})),128))])),_:1})])),_:1})):v("",!0)]),m(C)],2)}}}),[["__scopeId","data-v-065e83d5"]]);export{_ as default};
