'use strict';const _0x5d6040=_0x49c7;(function(_0x36d4a6,_0x1edfb3){const _0x126578=_0x49c7,_0x599876=_0x36d4a6();while(!![]){try{const _0x1fe627=parseInt(_0x126578(0x235))/0x1+-parseInt(_0x126578(0x1f0))/0x2*(-parseInt(_0x126578(0x211))/0x3)+-parseInt(_0x126578(0x1e4))/0x4*(parseInt(_0x126578(0x215))/0x5)+-parseInt(_0x126578(0x1eb))/0x6*(parseInt(_0x126578(0x20e))/0x7)+-parseInt(_0x126578(0x21f))/0x8*(-parseInt(_0x126578(0x227))/0x9)+parseInt(_0x126578(0x1e2))/0xa*(parseInt(_0x126578(0x1cd))/0xb)+-parseInt(_0x126578(0x1dc))/0xc*(-parseInt(_0x126578(0x1d8))/0xd);if(_0x1fe627===_0x1edfb3)break;else _0x599876['push'](_0x599876['shift']());}catch(_0x30759d){_0x599876['push'](_0x599876['shift']());}}}(_0x32dd,0x1c303));function _0x32dd(){const _0x147f8c=['onModuleInit','BadWordsEntity','自定义检测','__param','formarTips','match','code','function','BadwordsService','delete','error:\x20','./badwords.entity','defineProperty','您提交的信息中包含违规的内容、我们已对您的账户进行标记、请合规使用！','delBadWords','findAndCount','__metadata','Repository','save','更新敏感词成功','checkBadWordsByConfig','../user/user.service','forEach','ids','email','push','敏感词已经存在了、请勿重复添加','的信息、我们已对您账号进行标记、请合规使用！','7eSUkly','typeOriginCn','@nestjs/common','1137qWoCwn','baidu','loadBadWords','phone','18815iLFpDl','post','queryBadWords','hideString','GlobalConfigService','userInfo','https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token=','HttpStatus','getOwnPropertyDescriptor','globalConfigService','1137128FwVYFT','HttpException','extractContent','customSensitiveWords','__esModule','baiduCheckBadWords','baiduTextAccessToken','updateBadWords','9OyWRdz','join','getUserListByIds','nineai','includes','badWords','axios','addBadWord','map','data','badWordsEntity','category','./../globalConfig/globalConfig.service','metadata','84684LLgLZJ','自定义','log','检测失败','decorate','5467kwmlOW','checkBadWords','您提交的内容中包含','userId','isSuper','word_list','stringify','../../common/utils','百度云检测','find','updateViolationCount','13qYuCMJ','添加敏感词成功','***','Like','1323396xHqvIb','您提交的信息中包含','application/json','clsService','affected','userservice','510jFxmFL','ASC','164IGXbwM','recordUserBadWords','NineAi检测','./violationLog.entity','object','update','findOne','701814oxsyNO','word','violationLogEntity','length','InjectRepository','128mTJwpQ','BAD_REQUEST'];_0x32dd=function(){return _0x147f8c;};return _0x32dd();}var __decorate=this&&this['__decorate']||function(_0x2d88ad,_0x239fe1,_0x46909f,_0x982ce6){const _0x4d414e=_0x49c7;var _0x25b077=arguments[_0x4d414e(0x1ee)],_0x3362a2=_0x25b077<0x3?_0x239fe1:_0x982ce6===null?_0x982ce6=Object[_0x4d414e(0x21d)](_0x239fe1,_0x46909f):_0x982ce6,_0x3280ec;if(typeof Reflect===_0x4d414e(0x1e8)&&typeof Reflect['decorate']===_0x4d414e(0x1f9))_0x3362a2=Reflect[_0x4d414e(0x1cc)](_0x2d88ad,_0x239fe1,_0x46909f,_0x982ce6);else{for(var _0x313c67=_0x2d88ad[_0x4d414e(0x1ee)]-0x1;_0x313c67>=0x0;_0x313c67--)if(_0x3280ec=_0x2d88ad[_0x313c67])_0x3362a2=(_0x25b077<0x3?_0x3280ec(_0x3362a2):_0x25b077>0x3?_0x3280ec(_0x239fe1,_0x46909f,_0x3362a2):_0x3280ec(_0x239fe1,_0x46909f))||_0x3362a2;}return _0x25b077>0x3&&_0x3362a2&&Object[_0x4d414e(0x1fe)](_0x239fe1,_0x46909f,_0x3362a2),_0x3362a2;},__metadata=this&&this[_0x5d6040(0x202)]||function(_0x4d0044,_0x4af441){const _0x16e666=_0x5d6040;if(typeof Reflect===_0x16e666(0x1e8)&&typeof Reflect[_0x16e666(0x234)]==='function')return Reflect[_0x16e666(0x234)](_0x4d0044,_0x4af441);},__param=this&&this[_0x5d6040(0x1f5)]||function(_0x4d9c29,_0x13c3c6){return function(_0x40d108,_0x1d4820){_0x13c3c6(_0x40d108,_0x1d4820,_0x4d9c29);};};function _0x49c7(_0x591aa7,_0x4fcf04){const _0x32dde1=_0x32dd();return _0x49c7=function(_0x49c77a,_0x4243a2){_0x49c77a=_0x49c77a-0x1ca;let _0x52d14d=_0x32dde1[_0x49c77a];return _0x52d14d;},_0x49c7(_0x591aa7,_0x4fcf04);}Object[_0x5d6040(0x1fe)](exports,_0x5d6040(0x223),{'value':!![]}),exports['BadwordsService']=void 0x0;const globalConfig_service_1=require(_0x5d6040(0x233)),common_1=require(_0x5d6040(0x210)),badwords_entity_1=require(_0x5d6040(0x1fd)),typeorm_1=require('typeorm'),typeorm_2=require('@nestjs/typeorm'),axios_1=require(_0x5d6040(0x22d)),violationLog_entity_1=require(_0x5d6040(0x1e7)),utils_1=require(_0x5d6040(0x1d4)),user_service_1=require(_0x5d6040(0x207)),nestjs_cls_1=require('nestjs-cls');let BadwordsService=class BadwordsService{constructor(_0x54f646,_0x228511,_0x21de72,_0x2575ff,_0x433e26){const _0x4beb50=_0x5d6040;this['badWordsEntity']=_0x54f646,this[_0x4beb50(0x1ed)]=_0x228511,this[_0x4beb50(0x1df)]=_0x21de72,this[_0x4beb50(0x1e1)]=_0x2575ff,this[_0x4beb50(0x21e)]=_0x433e26,this['badWords']=[];}async[_0x5d6040(0x1f2)](){const _0x3cf08e=_0x5d6040;this[_0x3cf08e(0x213)]();}async[_0x5d6040(0x222)](_0x1207db,_0x3db29b){const _0x5cfed3=_0x5d6040,_0x3bc2b7=[];for(let _0x54017b=0x0;_0x54017b<this[_0x5cfed3(0x22c)][_0x5cfed3(0x1ee)];_0x54017b++){const _0xcdcc8d=this[_0x5cfed3(0x22c)][_0x54017b];_0x1207db['includes'](_0xcdcc8d)&&_0x3bc2b7[_0x5cfed3(0x20b)](_0xcdcc8d);}if(_0x3bc2b7[_0x5cfed3(0x1ee)]){await this[_0x5cfed3(0x1e5)](_0x3db29b,_0x1207db,_0x3bc2b7,[_0x5cfed3(0x236)],_0x5cfed3(0x1f4));const _0x349aa5=_0x5cfed3(0x1ff);throw new common_1[(_0x5cfed3(0x220))](_0x349aa5,common_1[_0x5cfed3(0x21c)]['BAD_REQUEST']);}return!![];}async[_0x5d6040(0x1ce)](_0x1890ae,_0x5c0eeb){const _0x1f1e3e=_0x5d6040,_0x32bb94=await this[_0x1f1e3e(0x21e)]['getSensitiveConfig']();_0x32bb94&&await this[_0x1f1e3e(0x206)](_0x1890ae,_0x32bb94,_0x5c0eeb),await this[_0x1f1e3e(0x222)](_0x1890ae,_0x5c0eeb);}async[_0x5d6040(0x206)](_0x3bcc77,_0x3d590f,_0x4b75dd){const _0x260b5b=_0x5d6040,{useType:_0x7ae2b3}=_0x3d590f;_0x7ae2b3===_0x260b5b(0x212)&&await this[_0x260b5b(0x224)](_0x3bcc77,_0x3d590f[_0x260b5b(0x225)],_0x4b75dd),_0x7ae2b3===_0x260b5b(0x22a)&&await this['nineaiCheckBadWords'](_0x3bcc77,_0x3d590f,_0x4b75dd);}['extractContent'](_0xc8bf6c){const _0x80e954=_0x5d6040,_0x3f73d8=/存在(.*?)不合规/,_0x39a29a=_0xc8bf6c[_0x80e954(0x1f7)](_0x3f73d8);return _0x39a29a?_0x39a29a[0x1]:'';}async[_0x5d6040(0x224)](_0x12483c,_0x2e8885,_0x3fa888){const _0x29b658=_0x5d6040;if(!_0x2e8885)return;const _0x5162c2=_0x29b658(0x21b)+_0x2e8885+'}',_0x515d1d={'Content-Type':'application/x-www-form-urlencoded','Accept':_0x29b658(0x1de)},_0x4b45dc=await axios_1['default'][_0x29b658(0x216)](_0x5162c2,{'text':_0x12483c},{'headers':_0x515d1d}),{conclusion:_0xc6cee3,error_code:_0x403347,error_msg:_0x32e61c,conclusionType:_0x5818b7,data:_0x54317e}=_0x4b45dc[_0x29b658(0x230)];_0x403347&&console[_0x29b658(0x1ca)]('百度文本检测出现错误、请查看配置信息:\x20',_0x32e61c);if(_0x5818b7!==0x1){const _0x46b184=[...new Set(_0x54317e[_0x29b658(0x22f)](_0x333cdc=>this[_0x29b658(0x221)](_0x333cdc['msg'])))];await this[_0x29b658(0x1e5)](_0x3fa888,_0x12483c,[_0x29b658(0x1da)],_0x46b184,_0x29b658(0x1d5));const _0x43aae1=_0x29b658(0x1dd)+_0x46b184[_0x29b658(0x228)](',')+'的内容、我们已对您的账户进行标记、请合规使用！';throw new common_1[(_0x29b658(0x220))](_0x43aae1,common_1[_0x29b658(0x21c)][_0x29b658(0x1f1)]);}}async['nineaiCheckBadWords'](_0x1c3a76,_0x3a4877,_0x3a5111){const _0x2d9d1b=_0x5d6040,{nineaiBuiltInSensitiveApiBase:_0x4d5cac,nineaiBuiltInSensitiveAuthKey:_0x29f7d6}=_0x3a4877;if(!_0x4d5cac||!_0x29f7d6)return;const _0x5328a6=await axios_1['default'][_0x2d9d1b(0x216)](_0x4d5cac,{'content':_0x1c3a76},{'headers':{'Content-Type':'application/json','Authorization':_0x29f7d6}});if(!_0x5328a6[_0x2d9d1b(0x230)])return;if(_0x5328a6['data'][_0x2d9d1b(0x1f8)]!=='0'){const {msg:msg=_0x2d9d1b(0x1cb)}=_0x5328a6[_0x2d9d1b(0x230)];throw new common_1[(_0x2d9d1b(0x220))]('敏感词检测\x20|\x20'+msg,common_1[_0x2d9d1b(0x21c)][_0x2d9d1b(0x1f1)]);}if(_0x5328a6[_0x2d9d1b(0x230)][_0x2d9d1b(0x1d2)]&&_0x5328a6[_0x2d9d1b(0x230)][_0x2d9d1b(0x1d2)]?.[_0x2d9d1b(0x1ee)]){const _0x5aa02=[...new Set(_0x5328a6['data'][_0x2d9d1b(0x1d2)][_0x2d9d1b(0x22f)](_0x1202dd=>_0x1202dd['keyword']))],_0x2b11ab=[...new Set(_0x5328a6[_0x2d9d1b(0x230)]['word_list'][_0x2d9d1b(0x22f)](_0x580db5=>_0x580db5[_0x2d9d1b(0x232)]))];await this[_0x2d9d1b(0x1e5)](_0x3a5111,_0x1c3a76,_0x5aa02,_0x2b11ab,_0x2d9d1b(0x1e6));const _0x1b7ef4=this[_0x2d9d1b(0x1f6)](_0x5328a6['data'][_0x2d9d1b(0x1d2)]);throw new common_1[(_0x2d9d1b(0x220))](_0x1b7ef4,common_1[_0x2d9d1b(0x21c)][_0x2d9d1b(0x1f1)]);}}['formarTips'](_0xd16a32){const _0x1311fd=_0x5d6040,_0x17bd3f=_0xd16a32[_0x1311fd(0x22f)](_0x5900cc=>_0x5900cc[_0x1311fd(0x232)]),_0x5b5462=[...new Set(_0x17bd3f)];return _0x1311fd(0x1cf)+_0x5b5462[_0x1311fd(0x228)](',')+_0x1311fd(0x20d);}async[_0x5d6040(0x213)](){const _0x141db3=_0x5d6040,_0x2384dc=await this[_0x141db3(0x231)][_0x141db3(0x1d6)]({'where':{'status':0x1},'select':[_0x141db3(0x1ec)]});this['badWords']=_0x2384dc[_0x141db3(0x22f)](_0x34f3dc=>_0x34f3dc['word']);}async[_0x5d6040(0x217)](_0x2ccdb9){const _0x4506a9=_0x5d6040,{page:page=0x1,size:size=0x1f4,word:_0x319bae,status:_0x5de697}=_0x2ccdb9,_0x62021f={};[0x0,0x1,'0','1'][_0x4506a9(0x22b)](_0x5de697)&&(_0x62021f['status']=_0x5de697),_0x319bae&&(_0x62021f[_0x4506a9(0x1ec)]=(0x0,typeorm_1[_0x4506a9(0x1db)])('%'+_0x319bae+'%'));const [_0xa2f25a,_0x2900d7]=await this['badWordsEntity'][_0x4506a9(0x201)]({'where':_0x62021f,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x4506a9(0x1e3)}});return{'rows':_0xa2f25a,'count':_0x2900d7};}async[_0x5d6040(0x200)](_0x2e532d){const _0x284884=_0x5d6040,_0x5271ac=await this['badWordsEntity'][_0x284884(0x1ea)]({'where':{'id':_0x2e532d['id']}});if(!_0x5271ac)throw new common_1[(_0x284884(0x220))]('敏感词不存在,请检查您的提交信息',common_1[_0x284884(0x21c)]['BAD_REQUEST']);const _0x37e215=await this['badWordsEntity'][_0x284884(0x1fb)]({'id':_0x2e532d['id']});if(_0x37e215['affected']>0x0)return await this[_0x284884(0x213)](),'删除敏感词成功';else throw new common_1['HttpException']('删除敏感词失败',common_1[_0x284884(0x21c)][_0x284884(0x1f1)]);}async[_0x5d6040(0x226)](_0x56937d){const _0x511107=_0x5d6040,{id:_0x41223d,word:_0x54e747,status:_0x5a6756}=_0x56937d,_0xfb63b2=await this[_0x511107(0x231)][_0x511107(0x1ea)]({'where':{'word':_0x54e747}});if(_0xfb63b2)throw new common_1[(_0x511107(0x220))](_0x511107(0x20c),common_1[_0x511107(0x21c)][_0x511107(0x1f1)]);const _0x4832df=await this[_0x511107(0x231)][_0x511107(0x1e9)]({'id':_0x41223d},{'word':_0x54e747,'status':_0x5a6756});if(_0x4832df[_0x511107(0x1e0)]>0x0)return await this[_0x511107(0x213)](),_0x511107(0x205);else throw new common_1[(_0x511107(0x220))]('更新敏感词失败',common_1['HttpStatus']['BAD_REQUEST']);}async[_0x5d6040(0x22e)](_0x40dd65){const _0x1d028c=_0x5d6040,{word:_0x348499}=_0x40dd65,_0x5daf3c=await this[_0x1d028c(0x231)]['findOne']({'where':{'word':_0x348499}});if(_0x5daf3c)throw new common_1['HttpException']('敏感词已存在,请检查您的提交信息',common_1[_0x1d028c(0x21c)]['BAD_REQUEST']);return await this[_0x1d028c(0x231)][_0x1d028c(0x204)]({'word':_0x348499}),await this[_0x1d028c(0x213)](),_0x1d028c(0x1d9);}async[_0x5d6040(0x1e5)](_0xf3c257,_0x32b134,_0x4323a1,_0x3cec54,_0x466ae0){const _0x51dc09=_0x5d6040,_0x42be0e={'userId':_0xf3c257,'content':_0x32b134,'words':JSON[_0x51dc09(0x1d3)](_0x4323a1),'typeCn':JSON['stringify'](_0x3cec54),'typeOriginCn':_0x466ae0};try{await this[_0x51dc09(0x1e1)][_0x51dc09(0x1d7)](_0xf3c257),await this[_0x51dc09(0x1ed)]['save'](_0x42be0e);}catch(_0x55f03d){console[_0x51dc09(0x1ca)](_0x51dc09(0x1fc),_0x55f03d);}}async['violation'](_0x9f6554,_0xf8d1a3){const _0x3c4add=_0x5d6040,{role:_0x43b9ca}=_0x9f6554['user'],{page:page=0x1,size:size=0xa,userId:_0x2931d8,typeOriginCn:_0x202673}=_0xf8d1a3,_0x19b9ab={'delFlag':0x0};_0x2931d8&&(_0x19b9ab[_0x3c4add(0x1d0)]=_0x2931d8),_0x202673&&(_0x19b9ab[_0x3c4add(0x20f)]=_0x202673);const [_0x3c79fc,_0x25fb84]=await this[_0x3c4add(0x1ed)][_0x3c4add(0x201)]({'where':_0x19b9ab,'skip':(page-0x1)*size,'take':size,'order':{'id':'DESC'}}),_0x498172=[...new Set(_0x3c79fc[_0x3c4add(0x22f)](_0x1faab8=>_0x1faab8[_0x3c4add(0x1d0)]))],_0x3c7ff8=await this[_0x3c4add(0x1e1)][_0x3c4add(0x229)](_0x498172);return _0x3c79fc[_0x3c4add(0x208)](_0x85c182=>{const _0x1afcd4=_0x3c4add,_0x4331e1=_0x3c7ff8[_0x1afcd4(0x1d6)](_0x1b9014=>_0x1b9014['id']===_0x85c182[_0x1afcd4(0x1d0)]);!(0x0,utils_1[_0x1afcd4(0x1d1)])(this['clsService'])&&(_0x4331e1[_0x1afcd4(0x20a)]=(0x0,utils_1[_0x1afcd4(0x218)])(_0x4331e1[_0x1afcd4(0x20a)]),_0x4331e1[_0x1afcd4(0x214)]=(0x0,utils_1[_0x1afcd4(0x218)])(_0x4331e1[_0x1afcd4(0x214)])),_0x85c182[_0x1afcd4(0x21a)]=_0x4331e1;}),{'rows':_0x3c79fc,'count':_0x25fb84};}async['delViolation'](_0x42709b){const _0x537199=_0x5d6040;if(!_0x42709b['ids'][_0x537199(0x1ee)])return!![];return await this[_0x537199(0x1ed)][_0x537199(0x1e9)]({'id':(0x0,typeorm_1['In'])(_0x42709b[_0x537199(0x209)])},{'delFlag':0x1}),!![];}};BadwordsService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_2['InjectRepository'])(badwords_entity_1[_0x5d6040(0x1f3)])),__param(0x1,(0x0,typeorm_2[_0x5d6040(0x1ef)])(violationLog_entity_1['ViolationLogEntity'])),__metadata('design:paramtypes',[typeorm_1[_0x5d6040(0x203)],typeorm_1['Repository'],nestjs_cls_1['ClsService'],user_service_1['UserService'],globalConfig_service_1[_0x5d6040(0x219)]])],BadwordsService),exports[_0x5d6040(0x1fa)]=BadwordsService;