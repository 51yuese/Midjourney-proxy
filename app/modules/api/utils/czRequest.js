'use strict';const _0x322da4=_0x2103;(function(_0x32bab7,_0x5b713c){const _0x101623=_0x2103,_0x5cf1e5=_0x32bab7();while(!![]){try{const _0x455e4b=parseInt(_0x101623(0x106))/0x1*(-parseInt(_0x101623(0xfd))/0x2)+-parseInt(_0x101623(0xf1))/0x3*(parseInt(_0x101623(0x111))/0x4)+parseInt(_0x101623(0xf6))/0x5*(parseInt(_0x101623(0x115))/0x6)+parseInt(_0x101623(0xff))/0x7+-parseInt(_0x101623(0xf4))/0x8+-parseInt(_0x101623(0xfc))/0x9+parseInt(_0x101623(0x10e))/0xa;if(_0x455e4b===_0x5b713c)break;else _0x5cf1e5['push'](_0x5cf1e5['shift']());}catch(_0x4d860b){_0x5cf1e5['push'](_0x5cf1e5['shift']());}}}(_0x4ee5,0xc4c2d));Object[_0x322da4(0xfe)](exports,_0x322da4(0x103),{'value':!![]}),exports['czRequest']=void 0x0;function _0x4ee5(){const _0x5b67e2=['2DHpYei','defineProperty','6637603ZBBCZV','GOMAXAI_HOST','headers','czProxyHost','__esModule','baseURL','test','1357843OdvALb','czProxyToken','interceptors','CZConfig','axios','[CZ请求参数]','env','code','15207830qVYAnx','config','[CZ请求响应]','285808ljavSZ','substring','msg','length','9113772bHZYoV','reject','[CZ请求地址]','/api/midjourney/notify-sd','Logger','response','@nestjs/common','czRequest','6CGaQkv','/api/midjourney/notify-wf','url','2881600QljQzW','callback','5txtbCO','default','use','未配置触站绘图设置','data','log','11889846tqWdPZ'];_0x4ee5=function(){return _0x5b67e2;};return _0x4ee5();}const store_1=require('../../../common/store'),common_1=require(_0x322da4(0x11b)),axios_1=require(_0x322da4(0x10a)),axIns=axios_1[_0x322da4(0xf7)]['create']();function _0x2103(_0x1b3c5c,_0x185882){const _0x4ee5de=_0x4ee5();return _0x2103=function(_0x210306,_0x41b026){_0x210306=_0x210306-0xf1;let _0x47f67d=_0x4ee5de[_0x210306];return _0x47f67d;},_0x2103(_0x1b3c5c,_0x185882);}axIns[_0x322da4(0x108)]['request'][_0x322da4(0xf8)](function(_0x3af4dc){const _0x5a773c=_0x322da4;common_1[_0x5a773c(0x119)][_0x5a773c(0xfb)](_0x5a773c(0x117),_0x3af4dc[_0x5a773c(0xf3)]);const _0x1c599e={};for(let _0x27cda3 in _0x3af4dc[_0x5a773c(0xfa)]){_0x3af4dc[_0x5a773c(0xfa)][_0x27cda3]?.[_0x5a773c(0x114)]>0x64?_0x1c599e[_0x27cda3]=_0x3af4dc['data'][_0x27cda3][_0x5a773c(0x112)](0x0,0x64):_0x1c599e[_0x27cda3]=_0x3af4dc[_0x5a773c(0xfa)][_0x27cda3];}return common_1[_0x5a773c(0x119)][_0x5a773c(0xfb)](_0x5a773c(0x10b),_0x1c599e),_0x3af4dc;},function(_0x2167df){const _0x5e6125=_0x322da4;return Promise[_0x5e6125(0x116)](_0x2167df);}),axIns[_0x322da4(0x108)][_0x322da4(0x11a)]['use'](function(_0x4e0ed2){const _0x5e3ceb=_0x322da4;return!/customModel/[_0x5e3ceb(0x105)](_0x4e0ed2[_0x5e3ceb(0x10f)]['url'])&&common_1[_0x5e3ceb(0x119)][_0x5e3ceb(0xfb)](_0x5e3ceb(0x110),_0x4e0ed2[_0x5e3ceb(0xfa)]),_0x4e0ed2;},function(_0x5303ed){return Promise['reject'](_0x5303ed);});const czRequest=async function ICZRes(_0x801e48){const _0x51a55a=_0x322da4;if(store_1[_0x51a55a(0x109)][_0x51a55a(0x102)]&&store_1[_0x51a55a(0x109)]['czProxyToken'])_0x801e48[_0x51a55a(0x104)]=store_1[_0x51a55a(0x109)]['czProxyHost'],_0x801e48[_0x51a55a(0x101)]={'Auth-Token':store_1['CZConfig'][_0x51a55a(0x107)]};else throw new Error(_0x51a55a(0xf9));if(_0x801e48['data']){let _0x47e3f4=process[_0x51a55a(0x10c)][_0x51a55a(0x100)];!/^http/[_0x51a55a(0x105)](_0x47e3f4)&&(_0x47e3f4='https://'+_0x47e3f4);if(/\/workflow\/run/[_0x51a55a(0x105)](_0x801e48[_0x51a55a(0xf3)]))_0x801e48[_0x51a55a(0xfa)][_0x51a55a(0xf5)]=_0x47e3f4+_0x51a55a(0xf2);else/\/aiapi\/v1\/draw|\/aiapi\/v1\/inpaint/['test'](_0x801e48[_0x51a55a(0xf3)])&&(_0x801e48[_0x51a55a(0xfa)]['callback']=_0x47e3f4+_0x51a55a(0x118));}const _0x341ae6=await axIns(_0x801e48);if(_0x341ae6['data'][_0x51a55a(0x10d)]!==0x0)throw new Error(_0x341ae6[_0x51a55a(0xfa)][_0x51a55a(0x113)]);return _0x341ae6[_0x51a55a(0xfa)][_0x51a55a(0xfa)];};exports[_0x322da4(0x11c)]=czRequest;