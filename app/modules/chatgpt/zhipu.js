'use strict';const _0x265432=_0x3276;(function(_0x2d5c3f,_0x4a2876){const _0xddf998=_0x3276,_0x2b2cb2=_0x2d5c3f();while(!![]){try{const _0x577cbb=-parseInt(_0xddf998(0xb2))/0x1*(parseInt(_0xddf998(0xb3))/0x2)+parseInt(_0xddf998(0xae))/0x3+parseInt(_0xddf998(0xa2))/0x4*(parseInt(_0xddf998(0x9f))/0x5)+parseInt(_0xddf998(0xb1))/0x6+parseInt(_0xddf998(0x9d))/0x7*(-parseInt(_0xddf998(0xa6))/0x8)+-parseInt(_0xddf998(0x9c))/0x9+-parseInt(_0xddf998(0xb9))/0xa*(-parseInt(_0xddf998(0xb5))/0xb);if(_0x577cbb===_0x4a2876)break;else _0x2b2cb2['push'](_0x2b2cb2['shift']());}catch(_0x59d570){_0x2b2cb2['push'](_0x2b2cb2['shift']());}}}(_0x3584,0x68ee6));Object[_0x265432(0xba)](exports,_0x265432(0xbc),{'value':!![]}),exports[_0x265432(0xa5)]=exports['compilerStream']=exports['compilerMetaJsonStr']=exports[_0x265432(0xc0)]=void 0x0;const axios=require(_0x265432(0xab)),jwt=require(_0x265432(0xbd));function generateToken(_0x29cb07,_0x175820=0x3e8*0x3c*0x3c*0x18*0x168){const _0x1b9b97=_0x265432,[_0x20cd2f,_0xd85f9d]=_0x29cb07[_0x1b9b97(0xac)]('.'),_0x132623={'api_key':_0x20cd2f,'exp':Math['round'](Date['now']())+_0x175820*0x3e8,'timestamp':Math[_0x1b9b97(0x98)](Date[_0x1b9b97(0xa0)]())};return jwt['sign'](_0x132623,_0xd85f9d,{'algorithm':_0x1b9b97(0xbb),'header':{'alg':_0x1b9b97(0xbb),'sign_type':_0x1b9b97(0xaf)}});}exports[_0x265432(0xc0)]=generateToken;function compilerMetaJsonStr(_0x3484fa){const _0x146ff5=_0x265432;let _0x3e52df={};try{_0x3e52df=JSON['parse'](_0x3484fa);}catch(_0x3c80f0){_0x3e52df={'usage':{'completion_tokens':0x31,'prompt_tokens':0x14d,'total_tokens':0x18f}},console[_0x146ff5(0xb0)]('json\x20parse\x20error\x20from\x20zhipu!',_0x3484fa);}return _0x3e52df;}exports['compilerMetaJsonStr']=compilerMetaJsonStr;function compilerStream(_0x313682){const _0x3d029b=_0x265432;console[_0x3d029b(0xa8)](_0x313682);if(_0x313682[_0x3d029b(0xa4)]===0x3)return{'event':_0x313682[0x0][_0x3d029b(0x9e)](_0x3d029b(0xa3),''),'id':_0x313682[0x1][_0x3d029b(0x9e)]('id:',''),'is_end':![],'result':_0x313682[0x2][_0x3d029b(0x9e)](_0x3d029b(0x9b),'')[_0x3d029b(0xb7)]()};if(_0x313682[_0x3d029b(0xa4)]===0x4)return{'event':_0x313682[0x0]['replace'](_0x3d029b(0xa3),''),'id':_0x313682[0x1][_0x3d029b(0x9e)](_0x3d029b(0x9a),''),'result':_0x313682[0x2][_0x3d029b(0x9e)](_0x3d029b(0x9b),'')['trim'](),'is_end':!![],'usage':compilerMetaJsonStr(_0x313682[0x3][_0x3d029b(0x9e)](_0x3d029b(0xa9),''))?.[_0x3d029b(0xad)]};}function _0x3276(_0xd42f55,_0x385ab4){const _0x3584de=_0x3584();return _0x3276=function(_0x32764c,_0x12a2fc){_0x32764c=_0x32764c-0x98;let _0x4d0a72=_0x3584de[_0x32764c];return _0x4d0a72;},_0x3276(_0xd42f55,_0x385ab4);}exports[_0x265432(0xc2)]=compilerStream;function _0x3584(){const _0xa1bc08=['event:','length','sendMessageFromZhipu','733688gHmtQI','end','log','meta:','catch','axios','split','usage','416112KetHod','SIGN','error','1167204MFDSsx','1ZNRyZk','106394KGtyPX','https://open.bigmodel.cn/api/paas/v3/model-api/','1545841kqrlqr','stream','trim','is_end','10UHzMBu','defineProperty','HS256','__esModule','jsonwebtoken','/sse-invoke','data','generateToken','error:\x20','compilerStream','round','POST','id:','data:','2721474gVOBDL','7YwVJIM','replace','3495BJCXpL','now','then','2308HpESoM'];_0x3584=function(){return _0xa1bc08;};return _0x3584();}async function sendMessageFromZhipu(_0x3f3d1e,{onProgress:_0x530745,key:_0x5ca658,model:_0xa6b676,temperature:temperature=0.95}){const _0x469a41=await generateToken(_0x5ca658);return new Promise((_0x526fcd,_0x16955f)=>{const _0x18c233=_0x3276,_0x4a4bfd=_0x18c233(0xb4)+_0xa6b676+_0x18c233(0xbe),_0xe4fdf5={'method':_0x18c233(0x99),'url':_0x4a4bfd,'responseType':_0x18c233(0xb6),'headers':{'Content-Type':'application/json','Authorization':_0x469a41},'data':{'prompt':_0x3f3d1e,'temperature':temperature}};axios(_0xe4fdf5)[_0x18c233(0xa1)](_0x48aebb=>{const _0x163c97=_0x18c233,_0x2d5030=_0x48aebb[_0x163c97(0xbf)];let _0x4959bd,_0x48ff61='';_0x2d5030['on'](_0x163c97(0xbf),_0x40e7b3=>{const _0x28153c=_0x163c97,_0x20bf0e=_0x40e7b3['toString']()[_0x28153c(0xac)]('\x0a')['filter'](_0x18d689=>_0x18d689[_0x28153c(0xb7)]()!=='');console[_0x28153c(0xa8)](_0x20bf0e);const _0x196be8=compilerStream(_0x20bf0e);console[_0x28153c(0xa8)](_0x196be8);if(!_0x196be8)return;const {id:_0x23540f,result:_0x1f9b45,is_end:_0x3a7039}=_0x196be8;_0x1f9b45&&(_0x48ff61+=_0x1f9b45[_0x28153c(0xb7)]()),_0x3a7039&&(_0x196be8[_0x28153c(0xb8)]=![],_0x4959bd=_0x196be8,_0x4959bd['text']=_0x48ff61),_0x530745(_0x196be8);}),_0x2d5030['on'](_0x163c97(0xa7),()=>{_0x526fcd(_0x4959bd),_0x48ff61='';});})[_0x18c233(0xaa)](_0x2104bc=>{const _0x1026e2=_0x18c233;console[_0x1026e2(0xa8)](_0x1026e2(0xc1),_0x2104bc);});});}exports[_0x265432(0xa5)]=sendMessageFromZhipu;