
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e="><+-.,[]".split("");const t={name:"brainfuck",startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(t,n){if(t.eatSpace())return null;t.sol()&&(n.commentLine=!1);var o=t.next().toString();return-1===e.indexOf(o)?(n.commentLine=!0,t.eol()&&(n.commentLine=!1),"comment"):!0===n.commentLine?(t.eol()&&(n.commentLine=!1),"comment"):"]"===o||"["===o?("["===o?n.left++:n.right++,"bracket"):"+"===o||"-"===o?"keyword":"<"===o||">"===o?"atom":"."===o||","===o?"def":void(t.eol()&&(n.commentLine=!1))}};export{t as brainfuck};
