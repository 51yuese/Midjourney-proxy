'use strict';const _0x5cfe4b=_0x586e;(function(_0x4c3386,_0x4dfde1){const _0x1b2009=_0x586e,_0x38114f=_0x4c3386();while(!![]){try{const _0x4fd8bd=parseInt(_0x1b2009(0x1c4))/0x1*(-parseInt(_0x1b2009(0x1ad))/0x2)+-parseInt(_0x1b2009(0x1e2))/0x3*(-parseInt(_0x1b2009(0x1d5))/0x4)+-parseInt(_0x1b2009(0x1c3))/0x5*(parseInt(_0x1b2009(0x1c8))/0x6)+parseInt(_0x1b2009(0x1cd))/0x7+parseInt(_0x1b2009(0x1ca))/0x8+-parseInt(_0x1b2009(0x1d3))/0x9*(parseInt(_0x1b2009(0x1a9))/0xa)+parseInt(_0x1b2009(0x1c9))/0xb;if(_0x4fd8bd===_0x4dfde1)break;else _0x38114f['push'](_0x38114f['shift']());}catch(_0x4a0779){_0x38114f['push'](_0x38114f['shift']());}}}(_0x24fc,0x3909b));var __decorate=this&&this[_0x5cfe4b(0x1ac)]||function(_0x2efebd,_0x31ac8e,_0xb16921,_0x44c83a){const _0x2944df=_0x5cfe4b;var _0x4e5fa9=arguments[_0x2944df(0x1cc)],_0xb47843=_0x4e5fa9<0x3?_0x31ac8e:_0x44c83a===null?_0x44c83a=Object[_0x2944df(0x1af)](_0x31ac8e,_0xb16921):_0x44c83a,_0x83a861;if(typeof Reflect==='object'&&typeof Reflect[_0x2944df(0x1b0)]==='function')_0xb47843=Reflect[_0x2944df(0x1b0)](_0x2efebd,_0x31ac8e,_0xb16921,_0x44c83a);else{for(var _0x5d38cd=_0x2efebd[_0x2944df(0x1cc)]-0x1;_0x5d38cd>=0x0;_0x5d38cd--)if(_0x83a861=_0x2efebd[_0x5d38cd])_0xb47843=(_0x4e5fa9<0x3?_0x83a861(_0xb47843):_0x4e5fa9>0x3?_0x83a861(_0x31ac8e,_0xb16921,_0xb47843):_0x83a861(_0x31ac8e,_0xb16921))||_0xb47843;}return _0x4e5fa9>0x3&&_0xb47843&&Object[_0x2944df(0x1d7)](_0x31ac8e,_0xb16921,_0xb47843),_0xb47843;},__metadata=this&&this[_0x5cfe4b(0x1b4)]||function(_0x563369,_0x1549ad){const _0xbbc1e9=_0x5cfe4b;if(typeof Reflect===_0xbbc1e9(0x1cb)&&typeof Reflect[_0xbbc1e9(0x1c2)]===_0xbbc1e9(0x1b2))return Reflect[_0xbbc1e9(0x1c2)](_0x563369,_0x1549ad);},__param=this&&this[_0x5cfe4b(0x1b3)]||function(_0x2b80f3,_0x44c6dd){return function(_0x3161d1,_0x47d546){_0x44c6dd(_0x3161d1,_0x47d546,_0x2b80f3);};};Object[_0x5cfe4b(0x1d7)](exports,_0x5cfe4b(0x1be),{'value':!![]}),exports[_0x5cfe4b(0x1de)]=void 0x0;const common_1=require(_0x5cfe4b(0x1bb)),typeorm_1=require(_0x5cfe4b(0x1bd)),typeorm_2=require(_0x5cfe4b(0x1ae)),IndexRecommend_entity_1=require(_0x5cfe4b(0x1b5)),utils_1=require(_0x5cfe4b(0x1d8)),nestjs_cls_1=require(_0x5cfe4b(0x1c1));let IndexRecommendService=class IndexRecommendService{constructor(_0x560601,_0x3344a9,_0x113d69){const _0x2c8628=_0x5cfe4b;this[_0x2c8628(0x1ab)]=_0x560601,this[_0x2c8628(0x1e3)]=_0x3344a9,this[_0x2c8628(0x1dc)]=_0x113d69;}async[_0x5cfe4b(0x1b8)](_0x1f3e28){const _0x13d256=_0x5cfe4b,{page:page=0x1,size:size=0x14,type:_0x17d4f5,tagId:_0x396505,keyword:_0xc3f38c,saasId:_0x494e59}=_0x1f3e28,_0x437d4e=(0x0,utils_1[_0x13d256(0x1c5)])(this[_0x13d256(0x1e3)]);let _0x33bbd4=_0x13d256(0x1d6)+(_0x17d4f5?_0x13d256(0x1b6)+_0x17d4f5+'\x27':'')+_0x13d256(0x1d1)+(_0x396505?_0x13d256(0x1c7)+_0x396505:'')+_0x13d256(0x1d1)+(_0xc3f38c?_0x13d256(0x1d4)+_0xc3f38c+'%\x27':'')+_0x13d256(0x1cf);(0x0,utils_1[_0x13d256(0x1df)])(this[_0x13d256(0x1e3)])?(0x0,utils_1[_0x13d256(0x1aa)])(_0x494e59)&&(_0x33bbd4=_0x33bbd4+(_0x13d256(0x1c6)+_0x494e59)):_0x33bbd4=_0x33bbd4+('\x20AND\x20i.saasId\x20=\x20'+_0x437d4e);const [_0x33deb4]=await this['connection']['query'](_0x13d256(0x1ce)+_0x33bbd4+_0x13d256(0x1c0)),_0x4f289a=await this[_0x13d256(0x1dc)]['query'](_0x13d256(0x1bf)+_0x33bbd4+_0x13d256(0x1b9)+size+_0x13d256(0x1d0)+(page-0x1)*size+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20');return{'rows':_0x4f289a,'count':_0x33deb4[_0x13d256(0x1d2)]};}async[_0x5cfe4b(0x1db)](_0x8ba378){const _0x32a2f6=_0x5cfe4b;try{const _0x4447e9={..._0x8ba378};if(!_0x8ba378['id']){const _0x7de624=(0x0,utils_1['getReqSaasId'])(this[_0x32a2f6(0x1e3)]);_0x4447e9[_0x32a2f6(0x1e1)]=_0x7de624;}return await this[_0x32a2f6(0x1ab)]['save'](_0x4447e9),!![];}catch(_0xb2a4ea){console[_0x32a2f6(0x1ba)](_0xb2a4ea);}}async['delete'](_0x4b45a6){const _0x4496a4=_0x5cfe4b;if(!_0x4b45a6[_0x4496a4(0x1d9)]||!_0x4b45a6['ids'])return!![];return await this['entity'][_0x4496a4(0x1dd)]({'id':(0x0,typeorm_2['In'])(_0x4b45a6[_0x4496a4(0x1d9)])},{'delFlag':0x1}),!![];}};function _0x586e(_0x245ded,_0x10c1a4){const _0x24fc3c=_0x24fc();return _0x586e=function(_0x586ed0,_0x395000){_0x586ed0=_0x586ed0-0x1a9;let _0x400e47=_0x24fc3c[_0x586ed0];return _0x400e47;},_0x586e(_0x245ded,_0x10c1a4);}IndexRecommendService=__decorate([(0x0,common_1[_0x5cfe4b(0x1b7)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(IndexRecommend_entity_1[_0x5cfe4b(0x1b1)])),__metadata(_0x5cfe4b(0x1bc),[typeorm_2['Repository'],nestjs_cls_1[_0x5cfe4b(0x1e0)],typeorm_2[_0x5cfe4b(0x1da)]])],IndexRecommendService),exports['IndexRecommendService']=IndexRecommendService;function _0x24fc(){const _0x2b8c0b=['\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20i.del_flag\x20=\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','defineProperty','../../common/utils','ids','Connection','save','connection','update','IndexRecommendService','isPlatform','ClsService','saasId','144YHbEyZ','clsService','10aXfHzP','isDefined','entity','__decorate','5794FJVSkh','typeorm','getOwnPropertyDescriptor','decorate','IndexRecommendEntity','function','__param','__metadata','./IndexRecommend.entity','\x20AND\x20i.type\x20=\x20\x27','Injectable','page','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20i.sort\x20ASC,\x20i.createdAt\x20DESC\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LIMIT\x20','log','@nestjs/common','design:paramtypes','@nestjs/typeorm','__esModule','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20i.*,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20i.tag_id\x20AS\x20tagId,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20i.del_flag\x20AS\x20delFlag,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20s.`name`\x20AS\x20saasName,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d.dict_name\x20AS\x20tagName\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20index_recommend\x20i\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20saas\x20s\x20ON\x20i.saasId\x20=\x20s.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20ai_dict\x20d\x20ON\x20i.tag_id\x20=\x20d.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','nestjs-cls','metadata','15qwRveD','29wFeWLF','getReqSaasId','\x20AND\x20i.saasId\x20=\x20','\x20AND\x20i.tag_id\x20=\x20','743982zEhfFr','2644334UyGYnh','1377720TKvCCF','object','length','2252985srRGLZ','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20COUNT(*)\x20as\x20count\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20index_recommend\x20i\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','\x20OFFSET\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','count','994473suXnYv','\x20AND\x20i.name\x20LIKE\x20\x27%','5472LCsUdH'];_0x24fc=function(){return _0x2b8c0b;};return _0x24fc();}