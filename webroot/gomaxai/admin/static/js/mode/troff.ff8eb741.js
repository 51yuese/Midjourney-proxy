
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var t={};function a(a){if(a.eatSpace())return null;var n=a.sol(),r=a.next();if("\\"===r)return a.match("fB")||a.match("fR")||a.match("fI")||a.match("u")||a.match("d")||a.match("%")||a.match("&")?"string":a.match("m[")?(a.skipTo("]"),a.next(),"string"):a.match("s+")||a.match("s-")?(a.eatWhile(/[\d-]/),"string"):a.match("(")||a.match("*(")?(a.eatWhile(/[\w-]/),"string"):"string";if(n&&("."===r||"'"===r)&&a.eat("\\")&&a.eat('"'))return a.skipToEnd(),"comment";if(n&&"."===r){if(a.match("B ")||a.match("I ")||a.match("R "))return"attribute";if(a.match("TH ")||a.match("SH ")||a.match("SS ")||a.match("HP "))return a.skipToEnd(),"quote";if(a.match(/[A-Z]/)&&a.match(/[A-Z]/)||a.match(/[a-z]/)&&a.match(/[a-z]/))return"attribute"}a.eatWhile(/[\w-]/);var e=a.current();return t.hasOwnProperty(e)?t[e]:null}function n(t,n){return(n.tokens[0]||a)(t,n)}const r={name:"troff",startState:function(){return{tokens:[]}},token:function(t,a){return n(t,a)}};export{r as troff};
