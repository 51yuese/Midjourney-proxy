'use strict';const _0x435634=_0x2ac0;(function(_0x481d1a,_0x28b1cb){const _0x36400b=_0x2ac0,_0x5003b5=_0x481d1a();while(!![]){try{const _0x2065d0=-parseInt(_0x36400b(0x187))/0x1*(parseInt(_0x36400b(0x183))/0x2)+parseInt(_0x36400b(0x175))/0x3*(-parseInt(_0x36400b(0x173))/0x4)+parseInt(_0x36400b(0x17a))/0x5+-parseInt(_0x36400b(0x17c))/0x6+-parseInt(_0x36400b(0x186))/0x7+parseInt(_0x36400b(0x18f))/0x8*(-parseInt(_0x36400b(0x189))/0x9)+parseInt(_0x36400b(0x18a))/0xa*(parseInt(_0x36400b(0x188))/0xb);if(_0x2065d0===_0x28b1cb)break;else _0x5003b5['push'](_0x5003b5['shift']());}catch(_0x165e3){_0x5003b5['push'](_0x5003b5['shift']());}}}(_0x2a98,0xe997d));Object[_0x435634(0x18c)](exports,'__esModule',{'value':!![]}),exports[_0x435634(0x180)]=void 0x0;function _0x2a98(){const _0xcb267c=['log','3916rcTiiQ','[LUMA请求参数]','interceptors','7709219ijnDvA','164IiEoEt','11epatWD','63lfzEvF','25935320CBWWgI','Logger','defineProperty','length','request','378712HnLlZY','default','url','961212jkEKTC','axios','3DXIGTs','@nestjs/common','test','https://','data','2934455FxWGEP','notify_hook','1377126VTxePJ','reject','[LUMA请求响应]','GOMAXAI_HOST','lumaRequest','response'];_0x2a98=function(){return _0xcb267c;};return _0x2a98();}function _0x2ac0(_0x2d9b70,_0x428b54){const _0x2a988a=_0x2a98();return _0x2ac0=function(_0x2ac05a,_0x3b20cf){_0x2ac05a=_0x2ac05a-0x172;let _0x1bd090=_0x2a988a[_0x2ac05a];return _0x1bd090;},_0x2ac0(_0x2d9b70,_0x428b54);}const common_1=require(_0x435634(0x176)),axios_1=require(_0x435634(0x174)),axIns=axios_1[_0x435634(0x190)]['create']();axIns['interceptors'][_0x435634(0x18e)]['use'](function(_0x49c181){const _0x332d1b=_0x435634;common_1[_0x332d1b(0x18b)][_0x332d1b(0x182)]('[LUMA请求地址]',_0x49c181[_0x332d1b(0x172)]);const _0x2cd23f={};for(let _0x7e8803 in _0x49c181['data']){_0x49c181[_0x332d1b(0x179)][_0x7e8803]?.[_0x332d1b(0x18d)]>0x64?_0x2cd23f[_0x7e8803]=_0x49c181[_0x332d1b(0x179)][_0x7e8803]['substring'](0x0,0x64):_0x2cd23f[_0x7e8803]=_0x49c181[_0x332d1b(0x179)][_0x7e8803];}return common_1[_0x332d1b(0x18b)]['log'](_0x332d1b(0x184),_0x2cd23f),_0x49c181;},function(_0xd99ff6){return Promise['reject'](_0xd99ff6);}),axIns[_0x435634(0x185)][_0x435634(0x181)]['use'](function(_0x516d70){const _0x27e091=_0x435634;return common_1[_0x27e091(0x18b)]['log'](_0x27e091(0x17e),_0x516d70[_0x27e091(0x179)]),_0x516d70;},function(_0x30c69e){const _0x1004f5=_0x435634;return Promise[_0x1004f5(0x17d)](_0x30c69e);});const lumaRequest=async function(_0x2a5d3e){const _0x5c2725=_0x435634;if(_0x2a5d3e[_0x5c2725(0x179)]){let _0x5817cc=process['env'][_0x5c2725(0x17f)];!/^http/['test'](_0x5817cc)&&(_0x5817cc=_0x5c2725(0x178)+_0x5817cc);const _0x46a4c4=/generations/;_0x46a4c4[_0x5c2725(0x177)](_0x2a5d3e[_0x5c2725(0x172)])&&(_0x2a5d3e[_0x5c2725(0x179)][_0x5c2725(0x17b)]=_0x5817cc+'/api/chatLog/notify-luma');}const _0x2d0f99=await axIns(_0x2a5d3e);return _0x2d0f99[_0x5c2725(0x179)];};exports[_0x435634(0x180)]=lumaRequest;