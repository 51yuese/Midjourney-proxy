'use strict';const _0x382bed=_0x2ddb;(function(_0x12bd8b,_0x42bb73){const _0x3068a0=_0x2ddb,_0x524c34=_0x12bd8b();while(!![]){try{const _0x11de2c=parseInt(_0x3068a0(0x1aa))/0x1+-parseInt(_0x3068a0(0x1b8))/0x2+-parseInt(_0x3068a0(0x1bf))/0x3+parseInt(_0x3068a0(0x1b1))/0x4+parseInt(_0x3068a0(0x1d2))/0x5+parseInt(_0x3068a0(0x1b3))/0x6+-parseInt(_0x3068a0(0x1ba))/0x7;if(_0x11de2c===_0x42bb73)break;else _0x524c34['push'](_0x524c34['shift']());}catch(_0x42fc6b){_0x524c34['push'](_0x524c34['shift']());}}}(_0x3ee9,0xc69b6));function _0x2ddb(_0x294347,_0x24630d){const _0x3ee9a6=_0x3ee9();return _0x2ddb=function(_0x2ddbfb,_0x1d91bc){_0x2ddbfb=_0x2ddbfb-0x1a1;let _0x35b774=_0x3ee9a6[_0x2ddbfb];return _0x35b774;},_0x2ddb(_0x294347,_0x24630d);}var __decorate=this&&this[_0x382bed(0x1cf)]||function(_0x5dfb9f,_0x341b21,_0x4ac36a,_0x7780fe){const _0x1539d7=_0x382bed;var _0x4ed0ee=arguments[_0x1539d7(0x1b5)],_0x522ee6=_0x4ed0ee<0x3?_0x341b21:_0x7780fe===null?_0x7780fe=Object[_0x1539d7(0x1d3)](_0x341b21,_0x4ac36a):_0x7780fe,_0x2608a4;if(typeof Reflect==='object'&&typeof Reflect[_0x1539d7(0x1d5)]===_0x1539d7(0x1c9))_0x522ee6=Reflect[_0x1539d7(0x1d5)](_0x5dfb9f,_0x341b21,_0x4ac36a,_0x7780fe);else{for(var _0xc3307a=_0x5dfb9f[_0x1539d7(0x1b5)]-0x1;_0xc3307a>=0x0;_0xc3307a--)if(_0x2608a4=_0x5dfb9f[_0xc3307a])_0x522ee6=(_0x4ed0ee<0x3?_0x2608a4(_0x522ee6):_0x4ed0ee>0x3?_0x2608a4(_0x341b21,_0x4ac36a,_0x522ee6):_0x2608a4(_0x341b21,_0x4ac36a))||_0x522ee6;}return _0x4ed0ee>0x3&&_0x522ee6&&Object[_0x1539d7(0x1da)](_0x341b21,_0x4ac36a,_0x522ee6),_0x522ee6;},__metadata=this&&this[_0x382bed(0x1cc)]||function(_0x49498f,_0x16e307){const _0x5360c3=_0x382bed;if(typeof Reflect===_0x5360c3(0x1d4)&&typeof Reflect[_0x5360c3(0x1c5)]===_0x5360c3(0x1c9))return Reflect[_0x5360c3(0x1c5)](_0x49498f,_0x16e307);},__param=this&&this[_0x382bed(0x1b2)]||function(_0x208c5b,_0x10c190){return function(_0x1a40e9,_0x1f6bda){_0x10c190(_0x1a40e9,_0x1f6bda,_0x208c5b);};};Object['defineProperty'](exports,_0x382bed(0x1cd),{'value':!![]}),exports[_0x382bed(0x1a4)]=void 0x0;const common_1=require(_0x382bed(0x1a8)),typeorm_1=require(_0x382bed(0x1d0)),typeorm_2=require(_0x382bed(0x1d8)),userApps_entity_1=require(_0x382bed(0x1ce)),gpts_model_entity_1=require(_0x382bed(0x1c8));function _0x3ee9(){const _0x3dfcda=['HttpException','3953628GAVVYN','__param','9389568UKBmof','findOne','length','count','BAD_REQUEST','51352RaVNoC','query','13758703WqrbNz','round','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gm.*,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gg.groupName,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ua.createdAt\x20AS\x20collectTime\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user_apps\x20ua\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20gpts_models\x20gm\x20ON\x20ua.appId\x20=\x20gm.id\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20gpts_group\x20gg\x20ON\x20gm.groupId\x20=\x20gg.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ua.userId\x20=\x20','HttpStatus','random','271458QUcSmb','collectCount','catch','已将应用移除我的应用!','delete','connection','metadata','log','Logger','../gpts/gpts.model.entity','function','userAppsEntity','collect','__metadata','__esModule','./userApps.entity','__decorate','typeorm','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20gm.id\x20IS\x20NOT\x20NULL\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ua.createdAt\x20DESC\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LIMIT\x20','1269930VyrBpd','getOwnPropertyDescriptor','object','decorate','Injectable','save','@nestjs/typeorm','取消移除我的应用失败！','defineProperty','groupId','\x20OFFSET\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20COUNT(*)\x20as\x20count\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user_apps\x20ua\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20gpts_models\x20gm\x20ON\x20ua.appId\x20=\x20gm.id\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20gpts_group\x20gg\x20ON\x20gm.groupId\x20=\x20gg.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ua.userId\x20=\x20','AppService','Connection','Repository','InjectRepository','@nestjs/common','已将应用添加到我的应用！','87864WLjfke','affected','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20gm.id\x20IS\x20NOT\x20NULL\x20\x0a\x20\x20\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x20\x20','user','gptsModelEntity'];_0x3ee9=function(){return _0x3dfcda;};return _0x3ee9();}let AppService=class AppService{constructor(_0x3282ea,_0x593cc4,_0x2a7fae){const _0x52dd04=_0x382bed;this[_0x52dd04(0x1af)]=_0x3282ea,this['userAppsEntity']=_0x593cc4,this[_0x52dd04(0x1c4)]=_0x2a7fae;}async[_0x382bed(0x1cb)](_0x5799d3,_0x425583){const _0x17aa7e=_0x382bed,{appId:_0xc14f97}=_0x5799d3,{id:_0x7b2055}=_0x425583['user'];try{const _0x1e4f41=await this['userAppsEntity']['findOne']({'where':{'appId':_0xc14f97,'userId':_0x7b2055}})[_0x17aa7e(0x1c1)](_0xe3280e=>{const _0x8521e4=_0x17aa7e;common_1[_0x8521e4(0x1c7)]['log'](_0xe3280e);});if(_0x1e4f41){const _0x1a0713=await this[_0x17aa7e(0x1ca)][_0x17aa7e(0x1c3)]({'appId':_0xc14f97,'userId':_0x7b2055})[_0x17aa7e(0x1c1)](_0x2e651e=>{const _0x548079=_0x17aa7e;common_1[_0x548079(0x1c7)][_0x548079(0x1c6)](_0x2e651e);});if(!_0x1a0713||_0x1a0713[_0x17aa7e(0x1ab)]<=0x0)throw new common_1['HttpException'](_0x17aa7e(0x1d9),common_1[_0x17aa7e(0x1bd)][_0x17aa7e(0x1b7)]);return _0x17aa7e(0x1c2);}const _0x4c61f9=await this[_0x17aa7e(0x1af)][_0x17aa7e(0x1b4)]({'where':{'id':_0xc14f97}})[_0x17aa7e(0x1c1)](_0x1b6fc4=>{common_1['Logger']['log'](_0x1b6fc4);});if(!_0x4c61f9)throw new common_1[(_0x17aa7e(0x1b0))]('操作失败！',common_1['HttpStatus'][_0x17aa7e(0x1b7)]);const _0x1573fb={'userId':_0x7b2055,'appId':_0x4c61f9['id'],'catId':_0x4c61f9[_0x17aa7e(0x1a1)],'appRole':'system','public':!![],'status':0x1};return await this[_0x17aa7e(0x1ca)][_0x17aa7e(0x1d7)](_0x1573fb)[_0x17aa7e(0x1c1)](_0x12058f=>{const _0x24db1e=_0x17aa7e;common_1[_0x24db1e(0x1c7)][_0x24db1e(0x1c6)](_0x12058f);}),_0x4c61f9[_0x17aa7e(0x1c0)]=_0x4c61f9['collectCount']+Math[_0x17aa7e(0x1bb)](Math[_0x17aa7e(0x1be)]()*0xa),await this['gptsModelEntity'][_0x17aa7e(0x1d7)](_0x4c61f9),_0x17aa7e(0x1a9);}catch(_0x2860c8){console[_0x17aa7e(0x1c6)](_0x2860c8);}}async['mineAppsV3'](_0x1f5554,_0x474df9={'page':0x1,'size':0x1e}){const _0x536dd2=_0x382bed,{id:_0x204bf3}=_0x1f5554[_0x536dd2(0x1ae)],{page:page=0x1,size:size=0x1e}=_0x474df9;try{const _0x7667f0=await this[_0x536dd2(0x1c4)][_0x536dd2(0x1b9)](_0x536dd2(0x1a3)+_0x204bf3+_0x536dd2(0x1ac)),_0x362849=await this[_0x536dd2(0x1c4)][_0x536dd2(0x1b9)](_0x536dd2(0x1bc)+_0x204bf3+_0x536dd2(0x1d1)+size+_0x536dd2(0x1a2)+(page-0x1)*size+_0x536dd2(0x1ad));return{'rows':_0x362849,'count':Number(_0x7667f0[0x0]?.[_0x536dd2(0x1b6)]||0x0)};}catch(_0x4f546a){console[_0x536dd2(0x1c6)](_0x4f546a['message']);}}};AppService=__decorate([(0x0,common_1[_0x382bed(0x1d6)])(),__param(0x0,(0x0,typeorm_2[_0x382bed(0x1a7)])(gpts_model_entity_1['GptsModelEntity'])),__param(0x1,(0x0,typeorm_2[_0x382bed(0x1a7)])(userApps_entity_1['UserAppsEntity'])),__metadata('design:paramtypes',[typeorm_1['Repository'],typeorm_1[_0x382bed(0x1a6)],typeorm_1[_0x382bed(0x1a5)]])],AppService),exports[_0x382bed(0x1a4)]=AppService;