'use strict';const _0x20024c=_0x5670;function _0x5670(_0x1b6ca1,_0x25549b){const _0x433524=_0x4335();return _0x5670=function(_0x567058,_0x218bb5){_0x567058=_0x567058-0x1e1;let _0x3e49c2=_0x433524[_0x567058];return _0x3e49c2;},_0x5670(_0x1b6ca1,_0x25549b);}(function(_0x3e4d2d,_0x1e3250){const _0x2bcb0b=_0x5670,_0xd133df=_0x3e4d2d();while(!![]){try{const _0x4cb79e=parseInt(_0x2bcb0b(0x202))/0x1*(-parseInt(_0x2bcb0b(0x1e9))/0x2)+parseInt(_0x2bcb0b(0x1f2))/0x3*(-parseInt(_0x2bcb0b(0x1e8))/0x4)+-parseInt(_0x2bcb0b(0x1f4))/0x5+-parseInt(_0x2bcb0b(0x1fc))/0x6+parseInt(_0x2bcb0b(0x1f3))/0x7+parseInt(_0x2bcb0b(0x1ec))/0x8+parseInt(_0x2bcb0b(0x211))/0x9*(parseInt(_0x2bcb0b(0x1ee))/0xa);if(_0x4cb79e===_0x1e3250)break;else _0xd133df['push'](_0xd133df['shift']());}catch(_0x24e75e){_0xd133df['push'](_0xd133df['shift']());}}}(_0x4335,0x5a54d));var __decorate=this&&this['__decorate']||function(_0x2dbd33,_0x5afff5,_0x53b200,_0x5cbd4a){const _0x5ceb7a=_0x5670;var _0x49986a=arguments[_0x5ceb7a(0x205)],_0x3b2dbd=_0x49986a<0x3?_0x5afff5:_0x5cbd4a===null?_0x5cbd4a=Object['getOwnPropertyDescriptor'](_0x5afff5,_0x53b200):_0x5cbd4a,_0x4b91f8;if(typeof Reflect===_0x5ceb7a(0x216)&&typeof Reflect[_0x5ceb7a(0x1fe)]===_0x5ceb7a(0x1f0))_0x3b2dbd=Reflect[_0x5ceb7a(0x1fe)](_0x2dbd33,_0x5afff5,_0x53b200,_0x5cbd4a);else{for(var _0x5d7b8f=_0x2dbd33['length']-0x1;_0x5d7b8f>=0x0;_0x5d7b8f--)if(_0x4b91f8=_0x2dbd33[_0x5d7b8f])_0x3b2dbd=(_0x49986a<0x3?_0x4b91f8(_0x3b2dbd):_0x49986a>0x3?_0x4b91f8(_0x5afff5,_0x53b200,_0x3b2dbd):_0x4b91f8(_0x5afff5,_0x53b200))||_0x3b2dbd;}return _0x49986a>0x3&&_0x3b2dbd&&Object[_0x5ceb7a(0x215)](_0x5afff5,_0x53b200,_0x3b2dbd),_0x3b2dbd;},__metadata=this&&this[_0x20024c(0x203)]||function(_0x3b1590,_0x3a73bb){const _0x1efa44=_0x20024c;if(typeof Reflect==='object'&&typeof Reflect[_0x1efa44(0x1fa)]===_0x1efa44(0x1f0))return Reflect[_0x1efa44(0x1fa)](_0x3b1590,_0x3a73bb);},__param=this&&this[_0x20024c(0x1e1)]||function(_0x51e214,_0x40a9e1){return function(_0x3873e9,_0x518a0f){_0x40a9e1(_0x3873e9,_0x518a0f,_0x51e214);};};function _0x4335(){const _0x183902=['Post','__param','design:type','down','FileService','@nestjs/swagger','./file.service','通过任务id获取原始任务的图片base64，并解决跨域问题','4ZVMEBr','540490lMndDn','fileService','from','1431640hfZFQJ','getModalImgById','6470sZkJOR','Get','function','UploaderDto','1726734JJTFzX','157605isYERm','3586145KSqypr','toString','design:paramtypes','UseInterceptors','buffer','__esModule','metadata','UploadedFile','3729360nEfnUp','originalname','decorate','design:returntype','Query','uploadFile','1gziLrx','__metadata','FileInterceptor','length','Body','Req','upload2Local','prototype','Res','FileController','ApiBearerAuth','binary','utf-8','file','upload','32733KtnOyl','上传文件','ApiOperation','getProxyRequest','defineProperty','object','Controller'];_0x4335=function(){return _0x183902;};return _0x4335();}Object['defineProperty'](exports,_0x20024c(0x1f9),{'value':!![]}),exports[_0x20024c(0x20b)]=void 0x0;const file_service_1=require(_0x20024c(0x1e6)),common_1=require('@nestjs/common'),swagger_1=require(_0x20024c(0x1e5)),platform_express_1=require('@nestjs/platform-express'),uploder_dto_1=require('./dto/uploder.dto');let FileController=class FileController{constructor(_0x3598b5){const _0x1f9f11=_0x20024c;this[_0x1f9f11(0x1ea)]=_0x3598b5;}async[_0x20024c(0x201)](_0x3af7bd,_0x31f418){const _0x312e7a=_0x20024c,_0x1be9c0=Buffer[_0x312e7a(0x1eb)](_0x31f418[_0x312e7a(0x1fd)],_0x312e7a(0x20d))[_0x312e7a(0x1f5)](_0x312e7a(0x20e));return this['fileService'][_0x312e7a(0x201)]({'filename':_0x1be9c0,'buffer':_0x31f418[_0x312e7a(0x1f8)],..._0x3af7bd});}async[_0x20024c(0x208)](_0x4dbb12,_0x275f19){const _0xafd8c8=_0x20024c,_0xff2c18=Buffer[_0xafd8c8(0x1eb)](_0x275f19[_0xafd8c8(0x1fd)],'binary')['toString'](_0xafd8c8(0x20e));return this['fileService'][_0xafd8c8(0x208)]({'filename':_0xff2c18,'buffer':_0x275f19[_0xafd8c8(0x1f8)],..._0x4dbb12});}async[_0x20024c(0x214)](_0x3c893b,_0x31c24d,_0x558793){const _0x2dd085=_0x20024c;return this[_0x2dd085(0x1ea)]['downFile'](_0x3c893b,_0x31c24d,_0x558793);}async['getModalImgById'](_0x53e537){const _0x5ad03c=_0x20024c;return this['fileService'][_0x5ad03c(0x1ed)](_0x53e537);}};__decorate([(0x0,common_1['Post'])(_0x20024c(0x210)),(0x0,swagger_1['ApiOperation'])({'summary':_0x20024c(0x212)}),(0x0,common_1['UseInterceptors'])((0x0,platform_express_1[_0x20024c(0x204)])(_0x20024c(0x20f),{'preservePath':!![],'limits':{'fileSize':0x200*0x400*0x400}})),__param(0x0,(0x0,common_1['Body'])()),__param(0x1,(0x0,common_1[_0x20024c(0x1fb)])()),__metadata(_0x20024c(0x1e2),Function),__metadata(_0x20024c(0x1f6),[uploder_dto_1[_0x20024c(0x1f1)],Object]),__metadata(_0x20024c(0x1ff),Promise)],FileController['prototype'],'uploadFile',null),__decorate([(0x0,common_1[_0x20024c(0x218)])('upload2Local'),(0x0,swagger_1[_0x20024c(0x213)])({'summary':'上传文件到本地服务器'}),(0x0,common_1[_0x20024c(0x1f7)])((0x0,platform_express_1[_0x20024c(0x204)])(_0x20024c(0x20f),{'preservePath':!![],'limits':{'fileSize':0x200*0x400*0x400}})),__param(0x0,(0x0,common_1[_0x20024c(0x206)])()),__param(0x1,(0x0,common_1[_0x20024c(0x1fb)])()),__metadata(_0x20024c(0x1e2),Function),__metadata(_0x20024c(0x1f6),[uploder_dto_1[_0x20024c(0x1f1)],Object]),__metadata(_0x20024c(0x1ff),Promise)],FileController[_0x20024c(0x209)],_0x20024c(0x208),null),__decorate([(0x0,common_1['Get'])(_0x20024c(0x1e3)),(0x0,swagger_1['ApiOperation'])({'summary':'通过url下载文件，解决跨域问题'}),__param(0x0,(0x0,common_1[_0x20024c(0x200)])('url')),__param(0x1,(0x0,common_1[_0x20024c(0x207)])()),__param(0x2,(0x0,common_1[_0x20024c(0x20a)])()),__metadata('design:type',Function),__metadata(_0x20024c(0x1f6),[String,Object,Object]),__metadata('design:returntype',Promise)],FileController[_0x20024c(0x209)],'getProxyRequest',null),__decorate([(0x0,common_1[_0x20024c(0x1ef)])(_0x20024c(0x1ed)),(0x0,swagger_1[_0x20024c(0x213)])({'summary':_0x20024c(0x1e7)}),(0x0,swagger_1[_0x20024c(0x20c)])(),__param(0x0,(0x0,common_1[_0x20024c(0x207)])()),__metadata(_0x20024c(0x1e2),Function),__metadata('design:paramtypes',[Object]),__metadata(_0x20024c(0x1ff),Promise)],FileController[_0x20024c(0x209)],_0x20024c(0x1ed),null),FileController=__decorate([(0x0,swagger_1['ApiTags'])(_0x20024c(0x20f)),(0x0,common_1[_0x20024c(0x217)])(_0x20024c(0x20f)),__metadata(_0x20024c(0x1f6),[file_service_1[_0x20024c(0x1e4)]])],FileController),exports[_0x20024c(0x20b)]=FileController;