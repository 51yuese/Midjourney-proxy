
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e="error";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var n=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),r=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),a=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),i=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),o=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),c=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),u=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],s=["else","elseif","case","catch","finally"],l=["next","loop"],d=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],m=t(d),h=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],f=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],p=t(h),g=t(f),b='"',y=t(u),v=t(s),k=t(l),w=t(["end"]),x=t(["do"]);function I(e,t){t.currentIndent++}function z(e,t){t.currentIndent--}function L(t,u){if(t.eatSpace())return null;var s,l,d;if("'"===t.peek())return t.skipToEnd(),"comment";if(t.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var h=!1;if((t.match(/^\d*\.\d+F?/i)||t.match(/^\d+\.\d*F?/)||t.match(/^\.\d+F?/))&&(h=!0),h)return t.eat(/J/i),"number";var f=!1;if(t.match(/^&H[0-9a-f]+/i)||t.match(/^&O[0-7]+/i)?f=!0:t.match(/^[1-9]\d*F?/)?(t.eat(/J/i),f=!0):t.match(/^0(?![\dx])/i)&&(f=!0),f)return t.eat(/L/i),"number"}return t.match(b)?(u.tokenize=(s=t.current(),l=1==s.length,d="string",function(e,t){for(;!e.eol();){if(e.eatWhile(/[^'"]/),e.match(s))return t.tokenize=L,d;e.eat(/['"]/)}return l&&(t.tokenize=L),d}),u.tokenize(t,u)):t.match(o)||t.match(i)?null:t.match(a)||t.match(n)||t.match(m)?"operator":t.match(r)?null:t.match(x)?(I(0,u),u.doInCurrentLine=!0,"keyword"):t.match(y)?(u.doInCurrentLine?u.doInCurrentLine=!1:I(0,u),"keyword"):t.match(v)?"keyword":t.match(w)?(z(0,u),z(0,u),"keyword"):t.match(k)?(z(0,u),"keyword"):t.match(g)||t.match(p)?"keyword":t.match(c)?"variable":(t.next(),e)}const E={name:"vb",startState:function(){return{tokenize:L,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(t,n){t.sol()&&(n.currentIndent+=n.nextLineIndent,n.nextLineIndent=0,n.doInCurrentLine=0);var r=function(t,n){var r=n.tokenize(t,n),a=t.current();if("."===a)return"variable"===(r=n.tokenize(t,n))?"variable":e;var i="[({".indexOf(a);return-1!==i&&I(0,n),-1!==(i="])}".indexOf(a))&&z(0,n)?e:r}(t,n);return n.lastToken={style:r,content:t.current()},r},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(k)||r.match(w)||r.match(v)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:"'"},autocomplete:u.concat(s).concat(l).concat(d).concat(h).concat(f)}};export{E as vb};
