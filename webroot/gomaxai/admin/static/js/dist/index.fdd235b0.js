
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{C as e,E as t,s as O,t as n,b as a,L as r,i as l,f as o,u as s,a as i,o as y,g as c,p as $}from"../agreement4service/agreement4service.a6ebcbac.js";import"../index/index.ba4efddb.js";import"../main-043c96ab.js";/* empty css                     */function p(e){return 45==e||46==e||58==e||e>=65&&e<=90||95==e||e>=97&&e<=122||e>=161}let g=null,u=null,m=0;function S(e,t){let O=e.pos+t;if(u==e&&m==O)return g;for(;9==(n=e.peek(t))||10==n||13==n||32==n;)t++;var n;let a="";for(;;){let O=e.peek(t);if(!p(O))break;a+=String.fromCharCode(O),t++}return u=e,m=O,g=a||null}function f(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let O=0;O<e.length;O++)this.hash+=(this.hash<<4)+e.charCodeAt(O)+(e.charCodeAt(O)<<8)}const d=new e({start:null,shift:(e,t,O,n)=>1==t?new f(S(n,1)||"",e):e,reduce:(e,t)=>11==t&&e?e.parent:e,reuse(e,t,O,n){let a=t.type.id;return 1==a||13==a?new f(S(n,1)||"",e):e},hash:e=>e?e.hash:0,strict:!1}),h=new t(((e,t)=>{if(60==e.next)if(e.advance(),47==e.next){e.advance();let O=S(e,0);if(!O)return e.acceptToken(5);if(t.context&&O==t.context.name)return e.acceptToken(2);for(let n=t.context;n;n=n.parent)if(n.name==O)return e.acceptToken(3,-2);e.acceptToken(4)}else if(33!=e.next&&63!=e.next)return e.acceptToken(1)}),{contextual:!0});function T(e,O){return new t((t=>{let n=0,a=O.charCodeAt(0);e:for(;!(t.next<0);t.advance(),n++)if(t.next==a){for(let e=1;e<O.length;e++)if(t.peek(e)!=O.charCodeAt(e))continue e;break}n&&t.acceptToken(e)}))}const V=T(35,"--\x3e"),v=T(36,"?>"),P=T(37,"]]>"),_=O({Text:n.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":n.angleBracket,TagName:n.tagName,"MismatchedCloseTag/TagName":[n.tagName,n.invalid],AttributeName:n.attributeName,AttributeValue:n.attributeValue,Is:n.definitionOperator,"EntityReference CharacterReference":n.character,Comment:n.blockComment,ProcessingInst:n.processingInstruction,DoctypeDecl:n.documentMeta,Cdata:n.special(n.string)}),W=a.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:d,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"],["isolate",-6,13,18,19,21,22,24,""]],propSources:[_],skippedNodes:[0],repeatNodeCount:8,tokenData:"Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[h,V,v,P,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function b(e,t){let O=t&&t.getChild("TagName");return O?e.sliceString(O.from,O.to):""}function C(e,t){let O=t&&t.firstChild;return O&&"OpenTag"==O.name?b(e,O):""}function w(e){for(let t=e&&e.parent;t;t=t.parent)if("Element"==t.name)return t;return null}class x{constructor(e,t,O){this.attrs=t,this.attrValues=O,this.children=[],this.name=e.name,this.completion=Object.assign(Object.assign({type:"type"},e.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=e.textContent?e.textContent.map((e=>({label:e,type:"text"}))):[]}}const X=/^[:\-\.\w\u00b7-\uffff]*$/;function Q(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function E(e){return"string"==typeof e?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function G(e,t){let O=[],n=[],a=Object.create(null);for(let s of t){let e=Q(s);O.push(e),s.global&&n.push(e),s.values&&(a[s.name]=s.values.map(E))}let r=[],l=[],o=Object.create(null);for(let s of e){let e=n,t=a;s.attributes&&(e=e.concat(s.attributes.map((e=>"string"==typeof e?O.find((t=>t.label==e))||{label:e,type:"property"}:(e.values&&(t==a&&(t=Object.create(t)),t[e.name]=e.values.map(E)),Q(e))))));let i=new x(s,e,t);o[i.name]=i,r.push(i),s.top&&l.push(i)}l.length||(l=r);for(let s=0;s<r.length;s++){let t=e[s],O=r[s];if(t.children)for(let e of t.children)o[e]&&O.children.push(o[e]);else O.children=r}return e=>{var t;let{doc:O}=e.state,s=function(e,t){var O;let n=c(e).resolveInner(t,-1),a=null;for(let r=n;!a&&r.parent;r=r.parent)"OpenTag"!=r.name&&"CloseTag"!=r.name&&"SelfClosingTag"!=r.name&&"MismatchedCloseTag"!=r.name||(a=r);if(a&&(a.to>t||a.lastChild.type.isError)){let e=a.parent;if("TagName"==n.name)return"CloseTag"==a.name||"MismatchedCloseTag"==a.name?{type:"closeTag",from:n.from,context:e}:{type:"openTag",from:n.from,context:w(e)};if("AttributeName"==n.name)return{type:"attrName",from:n.from,context:a};if("AttributeValue"==n.name)return{type:"attrValue",from:n.from,context:a};let O=n==a||"Attribute"==n.name?n.childBefore(t):n;return"StartTag"==(null==O?void 0:O.name)?{type:"openTag",from:t,context:w(e)}:"StartCloseTag"==(null==O?void 0:O.name)&&O.to<=t?{type:"closeTag",from:t,context:e}:"Is"==(null==O?void 0:O.name)?{type:"attrValue",from:t,context:a}:O?{type:"attrName",from:t,context:a}:null}if("StartCloseTag"==n.name)return{type:"closeTag",from:t,context:n.parent};for(;n.parent&&n.to==t&&!(null===(O=n.lastChild)||void 0===O?void 0:O.type.isError);)n=n.parent;return"Element"==n.name||"Text"==n.name||"Document"==n.name?{type:"tag",from:t,context:"Element"==n.name?n:w(n)}:null}(e.state,e.pos);if(!s||"tag"==s.type&&!e.explicit)return null;let{type:i,from:y,context:$}=s;if("openTag"==i){let e=l,t=C(O,$);if(t){let O=o[t];e=(null==O?void 0:O.children)||r}return{from:y,options:e.map((e=>e.completion)),validFor:X}}if("closeTag"==i){let n=C(O,$);return n?{from:y,to:e.pos+(">"==O.sliceString(e.pos,e.pos+1)?1:0),options:[(null===(t=o[n])||void 0===t?void 0:t.closeNameCompletion)||{label:n+">",type:"type"}],validFor:X}:null}if("attrName"==i){let e=o[b(O,$)];return{from:y,options:(null==e?void 0:e.attrs)||n,validFor:X}}if("attrValue"==i){let t=function(e,t,O){let n=t&&t.getChildren("Attribute").find((e=>e.from<=O&&e.to>=O)),a=n&&n.getChild("AttributeName");return a?e.sliceString(a.from,a.to):""}(O,$,y);if(!t)return null;let n=o[b(O,$)],r=((null==n?void 0:n.attrValues)||a)[t];return r&&r.length?{from:y,to:e.pos+('"'==O.sliceString(e.pos,e.pos+1)?1:0),options:r,validFor:/^"[^"]*"?$/}:null}if("tag"==i){let t=C(O,$),n=o[t],a=[],s=$&&$.lastChild;!t||s&&"CloseTag"==s.name&&b(O,s)==t||a.push(n?n.closeCompletion:{label:"</"+t+">",type:"type",boost:2});let i=a.concat(((null==n?void 0:n.children)||($?r:l)).map((e=>e.openCompletion)));if($&&(null==n?void 0:n.text.length)){let t=$.firstChild;t.to>e.pos-20&&!/\S/.test(e.state.sliceDoc(t.to,e.pos))&&(i=i.concat(n.text))}return{from:y,options:i,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}return null}}const R=r.define({name:"xml",parser:W.configure({props:[l.add({Element(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit}),o.add({Element(e){let t=e.firstChild,O=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==O.name?O.from:e.to}:null}}),s.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function Z(e={}){let t=[R.data.of({autocomplete:G(e.elements||[],e.attributes||[])})];return!1!==e.autoCloseTags&&t.push(j),new i(R,t)}function Y(e,t,O=e.length){if(!t)return"";let n=t.firstChild,a=n&&n.getChild("TagName");return a?e.sliceString(a.from,Math.min(a.to,O)):""}const j=y.inputHandler.of(((e,t,O,n,a)=>{if(e.composing||e.state.readOnly||t!=O||">"!=n&&"/"!=n||!R.isActiveAt(e.state,t,-1))return!1;let r=a(),{state:l}=r,o=l.changeByRange((e=>{var t,O,a;let r,{head:o}=e,s=l.doc.sliceString(o-1,o)==n,i=c(l).resolveInner(o,-1);if(s&&">"==n&&"EndTag"==i.name){let n=i.parent;if("CloseTag"!=(null===(O=null===(t=n.parent)||void 0===t?void 0:t.lastChild)||void 0===O?void 0:O.name)&&(r=Y(l.doc,n.parent,o))){return{range:e,changes:{from:o,to:o+(">"===l.doc.sliceString(o,o+1)?1:0),insert:`</${r}>`}}}}else if(s&&"/"==n&&"StartCloseTag"==i.name){let e=i.parent;if(i.from==o-2&&"CloseTag"!=(null===(a=e.lastChild)||void 0===a?void 0:a.name)&&(r=Y(l.doc,e,o))){let e=o+(">"===l.doc.sliceString(o,o+1)?1:0),t=`${r}>`;return{range:$.cursor(o+t.length,-1),changes:{from:o,to:e,insert:t}}}}return{range:e}}));return!o.changes.empty&&(e.dispatch([r,l.update(o,{userEvent:"input.complete",scrollIntoView:!0})]),!0)}));export{j as autoCloseTags,G as completeFromSchema,Z as xml,R as xmlLanguage};
