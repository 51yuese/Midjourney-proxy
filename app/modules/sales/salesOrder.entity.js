'use strict';function _0x4910(_0x1e4a93,_0x5e2c5c){var _0x1f2e5f=_0x1f2e();return _0x4910=function(_0x49107b,_0x333879){_0x49107b=_0x49107b-0xba;var _0x1e3bcb=_0x1f2e5f[_0x49107b];return _0x1e3bcb;},_0x4910(_0x1e4a93,_0x5e2c5c);}var _0x506a5c=_0x4910;(function(_0x37c5c6,_0x449db3){var _0xe50f22=_0x4910,_0x2fa6a0=_0x37c5c6();while(!![]){try{var _0xf2609c=parseInt(_0xe50f22(0xd3))/0x1*(parseInt(_0xe50f22(0xd9))/0x2)+-parseInt(_0xe50f22(0xde))/0x3*(-parseInt(_0xe50f22(0xd7))/0x4)+parseInt(_0xe50f22(0xd5))/0x5+-parseInt(_0xe50f22(0xbd))/0x6*(parseInt(_0xe50f22(0xcc))/0x7)+parseInt(_0xe50f22(0xd4))/0x8*(-parseInt(_0xe50f22(0xbf))/0x9)+-parseInt(_0xe50f22(0xc6))/0xa*(parseInt(_0xe50f22(0xcd))/0xb)+-parseInt(_0xe50f22(0xbc))/0xc;if(_0xf2609c===_0x449db3)break;else _0x2fa6a0['push'](_0x2fa6a0['shift']());}catch(_0x562d5b){_0x2fa6a0['push'](_0x2fa6a0['shift']());}}}(_0x1f2e,0x98e9b));var __decorate=this&&this['__decorate']||function(_0x3831bc,_0x363ee0,_0x22a91b,_0x3558e4){var _0x5670e6=_0x4910,_0x128a3f=arguments[_0x5670e6(0xc2)],_0x29eb4f=_0x128a3f<0x3?_0x363ee0:_0x3558e4===null?_0x3558e4=Object[_0x5670e6(0xc5)](_0x363ee0,_0x22a91b):_0x3558e4,_0x39dde9;if(typeof Reflect===_0x5670e6(0xbb)&&typeof Reflect['decorate']===_0x5670e6(0xd8))_0x29eb4f=Reflect['decorate'](_0x3831bc,_0x363ee0,_0x22a91b,_0x3558e4);else{for(var _0x3ee1b2=_0x3831bc[_0x5670e6(0xc2)]-0x1;_0x3ee1b2>=0x0;_0x3ee1b2--)if(_0x39dde9=_0x3831bc[_0x3ee1b2])_0x29eb4f=(_0x128a3f<0x3?_0x39dde9(_0x29eb4f):_0x128a3f>0x3?_0x39dde9(_0x363ee0,_0x22a91b,_0x29eb4f):_0x39dde9(_0x363ee0,_0x22a91b))||_0x29eb4f;}return _0x128a3f>0x3&&_0x29eb4f&&Object[_0x5670e6(0xc0)](_0x363ee0,_0x22a91b,_0x29eb4f),_0x29eb4f;},__metadata=this&&this['__metadata']||function(_0x196175,_0x2cb820){var _0x32b546=_0x4910;if(typeof Reflect===_0x32b546(0xbb)&&typeof Reflect[_0x32b546(0xd6)]===_0x32b546(0xd8))return Reflect[_0x32b546(0xd6)](_0x196175,_0x2cb820);};function _0x1f2e(){var _0x643786=['auditStatus','design:type','prototype','832237qviROU','32637RIhBcF','Column','提现备注留言','contactInformation','提现联系信息、备注即可','提现渠道\x201:\x20支付宝\x202：\x20微信','211297mHheRj','112XXSuOZ','5498120EXtpVM','metadata','64qLsYxO','function','8anBUMT','申请提现人用户Id','sales_order','审核状态','typeorm','208041HUOBcy','SalesOrderEntity','object','3164064nzpdIl','36rnxypM','审核人','396828BxsgDl','defineProperty','__esModule','length','withdrawalChannels','BaseEntity','getOwnPropertyDescriptor','2810kYIVLX','paymentStatus','../../common/entity/baseEntity'];_0x1f2e=function(){return _0x643786;};return _0x1f2e();}Object[_0x506a5c(0xc0)](exports,_0x506a5c(0xc1),{'value':!![]}),exports[_0x506a5c(0xba)]=void 0x0;const typeorm_1=require(_0x506a5c(0xdd)),baseEntity_1=require(_0x506a5c(0xc8));let SalesOrderEntity=class SalesOrderEntity extends baseEntity_1[_0x506a5c(0xc4)]{};__decorate([(0x0,typeorm_1[_0x506a5c(0xce)])({'comment':_0x506a5c(0xda)}),__metadata(_0x506a5c(0xca),Number)],SalesOrderEntity['prototype'],'userId',void 0x0),__decorate([(0x0,typeorm_1[_0x506a5c(0xce)])({'comment':'申请提现的金额'}),__metadata(_0x506a5c(0xca),Number)],SalesOrderEntity[_0x506a5c(0xcb)],'withdrawalAmount',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'工单状态'}),__metadata(_0x506a5c(0xca),Number)],SalesOrderEntity[_0x506a5c(0xcb)],'orderStatus',void 0x0),__decorate([(0x0,typeorm_1[_0x506a5c(0xce)])({'comment':_0x506a5c(0xdc)}),__metadata('design:type',Number)],SalesOrderEntity[_0x506a5c(0xcb)],_0x506a5c(0xc9),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x506a5c(0xbe),'nullable':!![]}),__metadata('design:type',Number)],SalesOrderEntity[_0x506a5c(0xcb)],'auditUserId',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'打款状态','nullable':!![]}),__metadata('design:type',Number)],SalesOrderEntity[_0x506a5c(0xcb)],_0x506a5c(0xc7),void 0x0),__decorate([(0x0,typeorm_1[_0x506a5c(0xce)])({'comment':_0x506a5c(0xd2),'nullable':!![]}),__metadata('design:type',Number)],SalesOrderEntity[_0x506a5c(0xcb)],_0x506a5c(0xc3),void 0x0),__decorate([(0x0,typeorm_1[_0x506a5c(0xce)])({'comment':_0x506a5c(0xd1),'nullable':!![]}),__metadata(_0x506a5c(0xca),String)],SalesOrderEntity['prototype'],_0x506a5c(0xd0),void 0x0),__decorate([(0x0,typeorm_1[_0x506a5c(0xce)])({'comment':_0x506a5c(0xcf),'nullable':!![]}),__metadata(_0x506a5c(0xca),String)],SalesOrderEntity[_0x506a5c(0xcb)],'remark',void 0x0),SalesOrderEntity=__decorate([(0x0,typeorm_1['Entity'])({'name':_0x506a5c(0xdb)})],SalesOrderEntity),exports[_0x506a5c(0xba)]=SalesOrderEntity;