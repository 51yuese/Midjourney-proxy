'use strict';var _0x4e72c7=_0x374d;(function(_0x130a23,_0x4f3215){var _0x4abcf3=_0x374d,_0x2fa706=_0x130a23();while(!![]){try{var _0x34020b=-parseInt(_0x4abcf3(0x1b0))/0x1+-parseInt(_0x4abcf3(0x1ab))/0x2+-parseInt(_0x4abcf3(0x18d))/0x3+parseInt(_0x4abcf3(0x199))/0x4+-parseInt(_0x4abcf3(0x1a4))/0x5*(parseInt(_0x4abcf3(0x198))/0x6)+-parseInt(_0x4abcf3(0x1bf))/0x7*(parseInt(_0x4abcf3(0x1b8))/0x8)+parseInt(_0x4abcf3(0x1c2))/0x9;if(_0x34020b===_0x4f3215)break;else _0x2fa706['push'](_0x2fa706['shift']());}catch(_0x22eecc){_0x2fa706['push'](_0x2fa706['shift']());}}}(_0x1c5f,0x1cf53));function _0x1c5f(){var _0x4d5395=['UserEntity','vipLeavelName','113432qdzHSE','../../common/entity/baseEntity','phone','metadata','prototype','63607QItSWp','saasId','用户签名','email','__esModule','微信unionid','是否终身VIP','Column','18536LnHBqD','最后一次登录IP','会员等级名称','sign','miniOpenId','decorate','用户邀请码','553pnDLBg','role','注册IP','3581748MDzUHz','inviteLinkCount','client','function','https://public-1300678944.cos.ap-shanghai.myqcloud.com/ai/7f042f63f.png','vipLeavelId','defineProperty','length','用户账号','registerIp','用户邮箱','unionid','会员到期时间，null为非会员','235158CCEebb','avatar','小程序openId','object','用户角色','用户手机号','用户注册来源','用户邀请链接被点击次数','openId','lastLoginIp','__metadata','6QlvMPH','665504avKSOi','nickname','用户违规记录次数','viewer','用户性别','公众号openId','password','Entity','status','inviteCode','用户头像','319925JhdAlI','consecutiveDays','username','design:type','用户积分'];_0x1c5f=function(){return _0x4d5395;};return _0x1c5f();}var __decorate=this&&this['__decorate']||function(_0x101acb,_0x57eecf,_0xd186ae,_0x57e3a8){var _0x256aaf=_0x374d,_0x492557=arguments[_0x256aaf(0x187)],_0x52547a=_0x492557<0x3?_0x57eecf:_0x57e3a8===null?_0x57e3a8=Object['getOwnPropertyDescriptor'](_0x57eecf,_0xd186ae):_0x57e3a8,_0x1dabe7;if(typeof Reflect==='object'&&typeof Reflect[_0x256aaf(0x1bd)]==='function')_0x52547a=Reflect[_0x256aaf(0x1bd)](_0x101acb,_0x57eecf,_0xd186ae,_0x57e3a8);else{for(var _0x270182=_0x101acb[_0x256aaf(0x187)]-0x1;_0x270182>=0x0;_0x270182--)if(_0x1dabe7=_0x101acb[_0x270182])_0x52547a=(_0x492557<0x3?_0x1dabe7(_0x52547a):_0x492557>0x3?_0x1dabe7(_0x57eecf,_0xd186ae,_0x52547a):_0x1dabe7(_0x57eecf,_0xd186ae))||_0x52547a;}return _0x492557>0x3&&_0x52547a&&Object[_0x256aaf(0x186)](_0x57eecf,_0xd186ae,_0x52547a),_0x52547a;},__metadata=this&&this[_0x4e72c7(0x197)]||function(_0x25ea8b,_0x395fcd){var _0x2ebb08=_0x4e72c7;if(typeof Reflect===_0x2ebb08(0x190)&&typeof Reflect['metadata']===_0x2ebb08(0x183))return Reflect[_0x2ebb08(0x1ae)](_0x25ea8b,_0x395fcd);};Object['defineProperty'](exports,_0x4e72c7(0x1b4),{'value':!![]}),exports[_0x4e72c7(0x1a9)]=void 0x0;function _0x374d(_0x3313ed,_0x39a861){var _0x1c5f9c=_0x1c5f();return _0x374d=function(_0x374d80,_0x340a5e){_0x374d80=_0x374d80-0x183;var _0x151283=_0x1c5f9c[_0x374d80];return _0x151283;},_0x374d(_0x3313ed,_0x39a861);}const typeorm_1=require('typeorm'),baseEntity_1=require(_0x4e72c7(0x1ac));let UserEntity=class UserEntity extends baseEntity_1['BaseEntity']{};__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0xff,'unique':!![],'comment':_0x4e72c7(0x188),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1a6),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x40,'comment':'用户密码','nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x19f),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0xff,'comment':'用户昵称','nullable':!![]}),__metadata('design:type',String)],UserEntity['prototype'],_0x4e72c7(0x19a),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x40,'unique':!![],'nullable':!![],'comment':_0x4e72c7(0x192)}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1ad),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0x40,'nullable':!![],'comment':_0x4e72c7(0x18a)}),__metadata('design:type',String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1b3),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'default':0x1,'comment':_0x4e72c7(0x19d),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),Number)],UserEntity[_0x4e72c7(0x1af)],'sex',void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x12c,'nullable':!![],'default':_0x4e72c7(0x184),'comment':_0x4e72c7(0x1a3)}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x18e),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0x12c,'nullable':!![],'default':'我是一台基于深度学习和自然语言处理技术的\x20AI\x20机器人，旨在为用户提供高效、精准、个性化的智能服务。','comment':_0x4e72c7(0x1b2)}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity['prototype'],_0x4e72c7(0x1bb),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x40,'default':'','comment':_0x4e72c7(0x1c1),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x189),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x40,'default':'','comment':_0x4e72c7(0x1b9),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x196),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0xa,'default':'','comment':_0x4e72c7(0x1be),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1a2),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0xa,'default':'','comment':'用户填写的别人的邀请码','nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],'invitedBy',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0x40,'comment':_0x4e72c7(0x193),'nullable':!![]}),__metadata('design:type',String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1c4),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'comment':_0x4e72c7(0x194),'default':0x0}),__metadata(_0x4e72c7(0x1a7),Number)],UserEntity['prototype'],_0x4e72c7(0x1c3),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'comment':'用户连续签到天数','default':0x0}),__metadata(_0x4e72c7(0x1a7),Number)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1a5),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'comment':_0x4e72c7(0x19b),'default':0x0}),__metadata('design:type',Number)],UserEntity[_0x4e72c7(0x1af)],'violationCount',void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x40,'default':'','comment':_0x4e72c7(0x19e),'nullable':!![]}),__metadata('design:type',String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x195),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x40,'default':'','comment':_0x4e72c7(0x1b5),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x18b),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x40,'default':'','comment':_0x4e72c7(0x18f),'nullable':!![]}),__metadata('design:type',String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1bc),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0x40,'default':'','comment':'微信App\x20openId','nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],'weAppOpenId',void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'default':0x0,'comment':_0x4e72c7(0x1a8)}),__metadata(_0x4e72c7(0x1a7),Number)],UserEntity['prototype'],'score',void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'type':'datetime','comment':_0x4e72c7(0x18c),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),Date)],UserEntity[_0x4e72c7(0x1af)],'vipExpire',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'default':0x0,'comment':_0x4e72c7(0x1b6),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),Number)],UserEntity[_0x4e72c7(0x1af)],'lifetimeVip',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'会员等级ID','nullable':!![]}),__metadata(_0x4e72c7(0x1a7),Number)],UserEntity['prototype'],_0x4e72c7(0x185),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'comment':_0x4e72c7(0x1ba),'nullable':!![]}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1aa),void 0x0),__decorate([(0x0,typeorm_1[_0x4e72c7(0x1b7)])({'length':0xa,'default':_0x4e72c7(0x19c),'comment':_0x4e72c7(0x191)}),__metadata(_0x4e72c7(0x1a7),String)],UserEntity['prototype'],_0x4e72c7(0x1c0),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'default':0x0,'comment':'用户状态'}),__metadata(_0x4e72c7(0x1a7),Number)],UserEntity['prototype'],_0x4e72c7(0x1a1),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x4e72c7(0x1b1),'default':0x0,'nullable':!![]}),__metadata('design:type',Number)],UserEntity[_0x4e72c7(0x1af)],_0x4e72c7(0x1b1),void 0x0),UserEntity=__decorate([(0x0,typeorm_1[_0x4e72c7(0x1a0)])({'name':'users'})],UserEntity),exports[_0x4e72c7(0x1a9)]=UserEntity;