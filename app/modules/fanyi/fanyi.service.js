'use strict';const _0x3ecff3=_0x53fa;(function(_0x4cc43b,_0x3f9952){const _0x2e4777=_0x53fa,_0x376e77=_0x4cc43b();while(!![]){try{const _0x53378e=parseInt(_0x2e4777(0x10f))/0x1*(-parseInt(_0x2e4777(0x134))/0x2)+-parseInt(_0x2e4777(0x124))/0x3+parseInt(_0x2e4777(0x114))/0x4+parseInt(_0x2e4777(0x109))/0x5+parseInt(_0x2e4777(0x13d))/0x6*(-parseInt(_0x2e4777(0x12b))/0x7)+parseInt(_0x2e4777(0xfa))/0x8*(-parseInt(_0x2e4777(0x110))/0x9)+parseInt(_0x2e4777(0x108))/0xa;if(_0x53378e===_0x3f9952)break;else _0x376e77['push'](_0x376e77['shift']());}catch(_0x4f2d88){_0x376e77['push'](_0x376e77['shift']());}}}(_0x982b,0xbb663));var __decorate=this&&this['__decorate']||function(_0x3ff4b7,_0x5ecb44,_0x283fcc,_0x556cff){const _0x1a1c9e=_0x53fa;var _0x8f3a99=arguments[_0x1a1c9e(0x141)],_0x280429=_0x8f3a99<0x3?_0x5ecb44:_0x556cff===null?_0x556cff=Object['getOwnPropertyDescriptor'](_0x5ecb44,_0x283fcc):_0x556cff,_0x584527;if(typeof Reflect===_0x1a1c9e(0x118)&&typeof Reflect[_0x1a1c9e(0x142)]===_0x1a1c9e(0x104))_0x280429=Reflect[_0x1a1c9e(0x142)](_0x3ff4b7,_0x5ecb44,_0x283fcc,_0x556cff);else{for(var _0x4b1013=_0x3ff4b7[_0x1a1c9e(0x141)]-0x1;_0x4b1013>=0x0;_0x4b1013--)if(_0x584527=_0x3ff4b7[_0x4b1013])_0x280429=(_0x8f3a99<0x3?_0x584527(_0x280429):_0x8f3a99>0x3?_0x584527(_0x5ecb44,_0x283fcc,_0x280429):_0x584527(_0x5ecb44,_0x283fcc))||_0x280429;}return _0x8f3a99>0x3&&_0x280429&&Object['defineProperty'](_0x5ecb44,_0x283fcc,_0x280429),_0x280429;},__metadata=this&&this[_0x3ecff3(0x136)]||function(_0x43138a,_0x5f301d){const _0x227f1a=_0x3ecff3;if(typeof Reflect==='object'&&typeof Reflect[_0x227f1a(0x12f)]===_0x227f1a(0x104))return Reflect[_0x227f1a(0x12f)](_0x43138a,_0x5f301d);};Object[_0x3ecff3(0x119)](exports,_0x3ecff3(0x144),{'value':!![]}),exports[_0x3ecff3(0x143)]=void 0x0;const globalConfig_service_1=require(_0x3ecff3(0x11e)),common_1=require('@nestjs/common'),axios_1=require('axios'),crypto=require(_0x3ecff3(0x10d)),openai_1=require('openai'),utils_1=require(_0x3ecff3(0x138)),models_service_1=require(_0x3ecff3(0x113)),model_constant_1=require(_0x3ecff3(0xfb));function _0x53fa(_0x5833cf,_0x4e0bc4){const _0x982b0b=_0x982b();return _0x53fa=function(_0x53fa74,_0x37a55b){_0x53fa74=_0x53fa74-0xf9;let _0x267bd2=_0x982b0b[_0x53fa74];return _0x267bd2;},_0x53fa(_0x5833cf,_0x4e0bc4);}let FanyiService=class FanyiService{constructor(_0x40badd,_0x53e69c){const _0xe11fe0=_0x3ecff3;this[_0xe11fe0(0x139)]=_0x40badd,this[_0xe11fe0(0x130)]=_0x53e69c,this['defaultUrl']=_0xe11fe0(0x111);}[_0x3ecff3(0x12d)](){const _0x4793bb=_0x3ecff3;this[_0x4793bb(0x12a)]=new openai_1[(_0x4793bb(0x132))]({'apiKey':_0x4793bb(0x127),'baseURL':this[_0x4793bb(0x125)]+'/v1'});}async[_0x3ecff3(0x11f)](_0xba6d10){const _0x1a9af1=_0x3ecff3;if(!_0xba6d10)throw new common_1[(_0x1a9af1(0x10a))]('请输入要翻译的内容!',common_1[_0x1a9af1(0x120)][_0x1a9af1(0x13e)]);const {baiduFanyiAppId:_0x1b4675,baiduFanyiSecret:_0x4a58c5}=await this[_0x1a9af1(0x139)][_0x1a9af1(0x128)]([_0x1a9af1(0xfe),'baiduFanyiSecret']);if(!_0x1b4675||!_0x4a58c5)throw new common_1[(_0x1a9af1(0x10a))](_0x1a9af1(0x115),common_1[_0x1a9af1(0x120)]['BAD_REQUEST']);const _0x287f49=Date[_0x1a9af1(0x123)]()[_0x1a9af1(0x103)](),_0x163f77=crypto[_0x1a9af1(0x133)]('md5')['update'](_0x1b4675+_0xba6d10+_0x287f49+_0x4a58c5)[_0x1a9af1(0x11a)](_0x1a9af1(0x10e)),_0x30c200=_0x1a9af1(0xff),_0x1b1ff7={'q':_0xba6d10[_0x1a9af1(0x103)](),'from':_0x1a9af1(0x105),'to':'en','appid':_0x1b4675,'salt':_0x287f49,'sign':_0x163f77},_0x191580=await axios_1['default'][_0x1a9af1(0x126)](_0x30c200,_0x1b1ff7,{'headers':{'Content-Type':_0x1a9af1(0x10b)}}),{from:_0x54b471,to:_0x47d3a1,trans_result:_0x21ef9b,error_code:_0x5dd128,error_msg:_0x104e1c}=_0x191580['data'];if(_0x5dd128)throw new common_1[(_0x1a9af1(0x10a))](_0x1a9af1(0xf9)+_0x5dd128+']['+_0x104e1c+']!',common_1['HttpStatus'][_0x1a9af1(0x13e)]);if(!_0x21ef9b||!_0x21ef9b[_0x1a9af1(0x141)])throw new common_1[(_0x1a9af1(0x10a))]('翻译失败['+_0x5dd128+']['+_0x104e1c+']!',common_1[_0x1a9af1(0x120)]['BAD_REQUEST']);else return _0x21ef9b[0x0][_0x1a9af1(0x11c)];}async[_0x3ecff3(0x12c)](_0x51aceb){const _0x17b2ee=_0x3ecff3,_0x20c33d=_0x17b2ee(0x13c);let _0x45967a=await this[_0x17b2ee(0x130)][_0x17b2ee(0x10c)](model_constant_1[_0x17b2ee(0x101)][_0x17b2ee(0x135)]);if(!_0x45967a)throw new common_1[(_0x17b2ee(0x10a))](_0x17b2ee(0x121),common_1['HttpStatus'][_0x17b2ee(0x13e)]);const {timeout:_0x418ab9,model:_0x4abd89,key:_0x3c0e8c,maxModelTokens:maxModelTokens=0x1f40,proxyUrl:_0x11d313}=_0x45967a;let _0x27a15d=_0x11d313;!_0x11d313&&(_0x27a15d=await this[_0x17b2ee(0x139)]['getConfigByKeys']([_0x17b2ee(0x13a)]));this['api'][_0x17b2ee(0x140)]=(0x0,utils_1[_0x17b2ee(0x100)])(_0x3c0e8c),this['api']['baseURL']=(_0x27a15d||this[_0x17b2ee(0x125)])+_0x17b2ee(0x129),this[_0x17b2ee(0x12a)]['timeout']=0x493e0;try{common_1['Logger']['log'](_0x3c0e8c,_0x17b2ee(0xfd)),common_1[_0x17b2ee(0x137)][_0x17b2ee(0x122)](_0x27a15d,_0x17b2ee(0x102));const _0x254786=Date[_0x17b2ee(0x123)](),_0x270e6b=await this[_0x17b2ee(0x12a)]['chat'][_0x17b2ee(0x131)][_0x17b2ee(0x106)]({'messages':[{'role':'system','content':_0x20c33d},{'role':'user','content':_0x51aceb}],'model':_0x17b2ee(0x117),'stream':![],'n':0x1,'max_tokens':maxModelTokens,'response_format':{'type':_0x17b2ee(0x13b)}})[_0x17b2ee(0x13f)](_0x6602a1=>{const _0x205da2=_0x17b2ee;return _0x6602a1?.['choices'][0x0]?.[_0x205da2(0x107)][_0x205da2(0x11d)]||'';})['catch'](_0x5e8460=>{const _0x263c5c=_0x17b2ee;return common_1[_0x263c5c(0x137)][_0x263c5c(0x112)](_0x5e8460),'';}),_0x18e1fe=Date['now'](),_0x1b6be3=(_0x18e1fe-_0x254786)/0x3e8;return common_1[_0x17b2ee(0x137)][_0x17b2ee(0x122)](_0x1b6be3,_0x17b2ee(0x12e)),_0x270e6b;}catch(_0x56eebe){console['log']('fanyi-error',_0x3c0e8c,_0x56eebe);throw new common_1[(_0x17b2ee(0x10a))](_0x56eebe['message'],common_1[_0x17b2ee(0x120)]['BAD_REQUEST']);}}};FanyiService=__decorate([(0x0,common_1[_0x3ecff3(0x116)])(),__metadata(_0x3ecff3(0x11b),[globalConfig_service_1[_0x3ecff3(0xfc)],models_service_1['ModelsService']])],FanyiService),exports[_0x3ecff3(0x143)]=FanyiService;function _0x982b(){const _0x44aad4=['translateToEnglish','onModuleInit','翻译花费时间\x20%s\x20秒','metadata','modelsService','completions','default','createHash','1012Tyeaaw','OTHER','__metadata','Logger','../../common/utils','globalConfigService','openaiBaseUrl','text','接下来我会给你一些内容、我希望你帮我翻译成英文、不管我给你任何语言、你都回复我英文、如果给你了英文、依然回复我更加优化的英文、并且期望你不需要做任何多余的解释、给我英文即可、不要加任何东西、我只需要英文！','6NbwCsW','BAD_REQUEST','then','apiKey','length','decorate','FanyiService','__esModule','翻译失败[','8QfcpQF','../../common/constants/model.constant','GlobalConfigService','translate\x20key','baiduFanyiAppId','https://fanyi-api.baidu.com/api/trans/vip/translate','removeSpecialCharacters','EModelType','gpt-fanyi','toString','function','auto','create','message','6799100POiKjO','7222750BoKzuf','HttpException','application/x-www-form-urlencoded','getRandomKey','crypto','hex','2678HNypND','1295793cjWvms','https://api.openai.com','error','../models/models.service','3715960cChAZI','当前管理员还未开放翻译服务、请联系管理员开通吧!','Injectable','gpt-4-all','object','defineProperty','digest','design:paramtypes','dst','content','./../globalConfig/globalConfig.service','convertToEnglish','HttpStatus','当前流程所需要的模型已被管理员下架、请联系管理员上架专属模型！','log','now','1334415krDaON','defaultUrl','post','default-gomaxai-key','getConfigByKeys','/v1','api','2394091hBPKLh'];_0x982b=function(){return _0x44aad4;};return _0x982b();}