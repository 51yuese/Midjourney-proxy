'use strict';const _0x50999b=_0x1844;function _0x48e5(){const _0x3c8d86=['../constants/Role.constant','user','1524267PODxFA','./jwtAuth.guard','UnauthorizedException','1566100oyHmRo','264494yKXFBe','__decorate','非法操作、非超级管理员无权操作！','function','42Jckhno','length','1235384nEaADv','6SpMLKJ','23706188DGLwwU','canActivate','object','getOwnPropertyDescriptor','48mTnVGU','164376wYpJHn','ERole','getRequest','10StVAjw','decorate','SuperAuthGuard','189692HLQeeM'];_0x48e5=function(){return _0x3c8d86;};return _0x48e5();}(function(_0x532913,_0x4abe05){const _0xdcb3cf=_0x1844,_0x3ee202=_0x532913();while(!![]){try{const _0x291c20=-parseInt(_0xdcb3cf(0x12d))/0x1+-parseInt(_0xdcb3cf(0x134))/0x2*(parseInt(_0xdcb3cf(0x13b))/0x3)+parseInt(_0xdcb3cf(0x13a))/0x4+-parseInt(_0xdcb3cf(0x133))/0x5+parseInt(_0xdcb3cf(0x127))/0x6*(-parseInt(_0xdcb3cf(0x138))/0x7)+parseInt(_0xdcb3cf(0x140))/0x8*(-parseInt(_0xdcb3cf(0x130))/0x9)+-parseInt(_0xdcb3cf(0x12a))/0xa*(-parseInt(_0xdcb3cf(0x13c))/0xb);if(_0x291c20===_0x4abe05)break;else _0x3ee202['push'](_0x3ee202['shift']());}catch(_0x293501){_0x3ee202['push'](_0x3ee202['shift']());}}}(_0x48e5,0x7df9a));var __decorate=this&&this[_0x50999b(0x135)]||function(_0x1646dc,_0x3b1475,_0x5a5ef1,_0x35dc4b){const _0x964915=_0x50999b;var _0xf28570=arguments[_0x964915(0x139)],_0x547d7d=_0xf28570<0x3?_0x3b1475:_0x35dc4b===null?_0x35dc4b=Object[_0x964915(0x13f)](_0x3b1475,_0x5a5ef1):_0x35dc4b,_0x432251;if(typeof Reflect===_0x964915(0x13e)&&typeof Reflect[_0x964915(0x12b)]===_0x964915(0x137))_0x547d7d=Reflect[_0x964915(0x12b)](_0x1646dc,_0x3b1475,_0x5a5ef1,_0x35dc4b);else{for(var _0x59d07d=_0x1646dc[_0x964915(0x139)]-0x1;_0x59d07d>=0x0;_0x59d07d--)if(_0x432251=_0x1646dc[_0x59d07d])_0x547d7d=(_0xf28570<0x3?_0x432251(_0x547d7d):_0xf28570>0x3?_0x432251(_0x3b1475,_0x5a5ef1,_0x547d7d):_0x432251(_0x3b1475,_0x5a5ef1))||_0x547d7d;}return _0xf28570>0x3&&_0x547d7d&&Object['defineProperty'](_0x3b1475,_0x5a5ef1,_0x547d7d),_0x547d7d;};function _0x1844(_0x50f55e,_0x21e33a){const _0x48e5e1=_0x48e5();return _0x1844=function(_0x184468,_0x12aca9){_0x184468=_0x184468-0x127;let _0x5be41c=_0x48e5e1[_0x184468];return _0x5be41c;},_0x1844(_0x50f55e,_0x21e33a);}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x50999b(0x12c)]=void 0x0;const common_1=require('@nestjs/common'),jwtAuth_guard_1=require(_0x50999b(0x131)),Role_constant_1=require(_0x50999b(0x12e));let SuperAuthGuard=class SuperAuthGuard extends jwtAuth_guard_1['JwtAuthGuard']{async[_0x50999b(0x13d)](_0x5e90d8){const _0x381230=_0x50999b,_0x47d8d0=await super['canActivate'](_0x5e90d8);if(!_0x47d8d0)return![];const _0x2b9e02=_0x5e90d8['switchToHttp']()[_0x381230(0x129)](),_0x1018a5=_0x2b9e02[_0x381230(0x12f)];if(_0x1018a5&&_0x1018a5['role']===Role_constant_1[_0x381230(0x128)]['SUPER']||_0x1018a5['role']===Role_constant_1[_0x381230(0x128)]['AGENT'])return!![];else throw new common_1[(_0x381230(0x132))](_0x381230(0x136));}};SuperAuthGuard=__decorate([(0x0,common_1['Injectable'])()],SuperAuthGuard),exports[_0x50999b(0x12c)]=SuperAuthGuard;