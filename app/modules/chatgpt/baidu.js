'use strict';const _0x529747=_0x4042;(function(_0xd3d92f,_0xa37d11){const _0x53bf8a=_0x4042,_0x38eac7=_0xd3d92f();while(!![]){try{const _0x5da168=parseInt(_0x53bf8a(0xf1))/0x1*(parseInt(_0x53bf8a(0xf2))/0x2)+-parseInt(_0x53bf8a(0xfc))/0x3+parseInt(_0x53bf8a(0xfe))/0x4*(parseInt(_0x53bf8a(0xbf))/0x5)+parseInt(_0x53bf8a(0x103))/0x6*(-parseInt(_0x53bf8a(0xc7))/0x7)+parseInt(_0x53bf8a(0x10c))/0x8*(-parseInt(_0x53bf8a(0xe6))/0x9)+parseInt(_0x53bf8a(0xfd))/0xa+parseInt(_0x53bf8a(0xbc))/0xb*(-parseInt(_0x53bf8a(0xe2))/0xc);if(_0x5da168===_0xa37d11)break;else _0x38eac7['push'](_0x38eac7['shift']());}catch(_0x2da856){_0x38eac7['push'](_0x38eac7['shift']());}}}(_0x3746,0xbaa40));Object[_0x529747(0xe8)](exports,_0x529747(0xc9),{'value':!![]}),exports[_0x529747(0xd0)]=exports['getAccessToken']=void 0x0;function _0x3746(){const _0x59c1f0=['yi_34b_chat','eb-instant','aquilachat_7b','parse','then','4166748xeVrdT','11648300lWVlDU','4mSTHcb','text','bloomz_7b1','llama_2_13b','bge_large_en','4878DaCtpt','llama_3_8b','map','qianfan_chinese_llama_2_13b','ernie-lite-8k','ernie-4.0-8k-latest','chatlaw','?access_token=','access_token','172936CpMypn','@nestjs/common','ernie-4.0-turbo-8k','ernie-speed-128k','44FGXcuo','completions','filter','7560580POWUre','mixtral_8x7b_instruct','ernie-4.0-8k-0329','application/json','qianfan_chinese_llama_2_70b','end','embedding-v1','toLowerCase','3402ZHiLoj','ai_apaas_lite','__esModule','data:\x20','keys','&client_secret=','ernie-3.5-8k-0613','ernie-tiny-8k','split','sendMessageFromBaidu','error','ernie-char-fiction-8k','llama_2_70b','qianfan-dynamic-8k','[百度签名校验失败]','data','ernie-novel-8k','ernie-3.5-8k-0329','codellama_7b_instruct','axios','fuyu_8b','ernie-3.5-8k-preview','xuanyuan_70b_chat','ernie-func-8k','message','Logger','qianfan_bloomz_7b_compressed','2660676ngcIpB','stream','trim','bge_large_zh','153jgKvcT','llama_2_7b','defineProperty','completions_pro','getAccessToken','catch','erniebot','ernie-4.0-8k-preview','toString','post','ernie-3.5-128k','11SjYfDU','204718czqjiD','ernie-char-8k','info','sqlcoder_7b','qianfan_chinese_llama_2_7b'];_0x3746=function(){return _0x59c1f0;};return _0x3746();}function _0x4042(_0x38a7fe,_0x167bf1){const _0x374663=_0x3746();return _0x4042=function(_0x40421d,_0x2d2c50){_0x40421d=_0x40421d-0xbb;let _0x13fcfe=_0x374663[_0x40421d];return _0x13fcfe;},_0x4042(_0x38a7fe,_0x167bf1);}const common_1=require(_0x529747(0x10d)),axios=require(_0x529747(0xda)),getApiModelMaps=()=>{const _0x3863a3=_0x529747;let _0x59262c={};const _0x5c38d6={'ERNIE-4.0-8K':_0x3863a3(0xe9),'ERNIE-4.0-8K-Latest':_0x3863a3(0x108),'ERNIE-4.0-8K-Preview':_0x3863a3(0xed),'ERNIE-4.0-8K-Preview-0518':'completions_adv_pro','ERNIE-4.0-8K-0613':'ernie-4.0-8k-0613','ERNIE-4.0-8K-0329':_0x3863a3(0xc1),'ERNIE-4.0-Turbo-8K':_0x3863a3(0x10e),'ERNIE-3.5-128K':_0x3863a3(0xf0),'ERNIE-3.5-8K':_0x3863a3(0xbd),'ERNIE-3.5-8K-Preview':_0x3863a3(0xdc),'ERNIE-3.5-8K-0613':_0x3863a3(0xcd),'ERNIE-3.5-8K-0329':_0x3863a3(0xd8),'ERNIE-Speed-128K':_0x3863a3(0xbb),'ERNIE-Speed-8K':'ernie_speed','ERNIE\x20Speed-AppBuilder':'ai_apaas','ERNIE-Character-8K':_0x3863a3(0xf3),'ERNIE-Functions-8K':_0x3863a3(0xde),'ERNIE-Lite-8K':_0x3863a3(0x107),'ERNIE-Lite-8K-0922（原ERNIE-Bot-turbo-0922）':_0x3863a3(0xf8),'ERNIE-Lite-AppBuilder-8K':_0x3863a3(0xc8),'ERNIE-Tiny-8K':_0x3863a3(0xce),'ERNIE-Novel-8K':_0x3863a3(0xd7),'Qianfan-Chinese-Llama-2-7B':_0x3863a3(0xf6),'Qianfan-Chinese-Llama-2-13B':_0x3863a3(0x106),'Qianfan-Chinese-Llama-2-70B':_0x3863a3(0xc3),'Meta-Llama-3-8B':_0x3863a3(0x104),'Meta-Llama-3-70B':'llama_3_70b','Llama-2-7B-Chat':_0x3863a3(0xe7),'Llama-2-13B-Chat':_0x3863a3(0x101),'Llama-2-70B-Chat':_0x3863a3(0xd3),'ChatGLM2-6B-32K':'chatglm2_6b_32k','XuanYuan-70B-Chat-4bit':_0x3863a3(0xdd),'Gemma-7B-It':'gemma_7b_it','Yi-34B-Chat':_0x3863a3(0xf7),'Mixtral-8x7B-Instruct':_0x3863a3(0xc0),'SQLCoder-7B':_0x3863a3(0xf5),'CodeLlama-7B-Instruct':_0x3863a3(0xd9),'ChatLaw':_0x3863a3(0x109),'Qianfan-BLOOMZ-7B-compressed':_0x3863a3(0xe1),'BLOOMZ-7B':_0x3863a3(0x100),'AquilaChat-7B':_0x3863a3(0xf9),'Stable-Diffusion-XL':'sd_xl','Fuyu-8B':_0x3863a3(0xdb),'bge-large-en':_0x3863a3(0x102),'bge-large-zh':_0x3863a3(0xe5),'tao-8k':'tao_8k','Embedding-V1':_0x3863a3(0xc5),'bce-reranker-base':'bce_reranker_base','tokenizer':_0x3863a3(0xec),'Prompt模板':_0x3863a3(0xf4),'ERNIE-Character-Fiction-8K':_0x3863a3(0xd2),'ERNIE-4.0-Turbo-8K-Preview':'ernie-4.0-turbo-8k-preview','ERNIE-3.5-8K-0701':'ernie-3.5-8k-0701','Qianfan-Dynamic-8k':_0x3863a3(0xd4)};return Object[_0x3863a3(0xcb)](_0x5c38d6)[_0x3863a3(0x105)](_0x19ed46=>{const _0x5ea3f3=_0x3863a3;_0x59262c[''+_0x19ed46[_0x5ea3f3(0xc6)]()]=_0x5c38d6[_0x19ed46];}),_0x59262c;};function getAccessToken(_0x43d16b,_0x228f6a){const _0x264a3b=_0x529747;let _0x53ed96='https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='+_0x43d16b+_0x264a3b(0xcc)+_0x228f6a;return new Promise((_0x134e69,_0x172d99)=>{const _0x301518=_0x264a3b;axios[_0x301518(0xef)](_0x53ed96)[_0x301518(0xfb)](_0x24cbc3=>{const _0x5904c1=_0x301518;_0x134e69(_0x24cbc3[_0x5904c1(0xd6)][_0x5904c1(0x10b)]);})[_0x301518(0xeb)](_0xc225b0=>{const _0x3405e7=_0x301518;common_1[_0x3405e7(0xe0)][_0x3405e7(0xd1)](_0xc225b0[_0x3405e7(0xdf)],_0x3405e7(0xd5));});});}exports[_0x529747(0xea)]=getAccessToken;function sendMessageFromBaidu(_0x539a19,{onProgress:_0x26a94f,accessToken:_0x3c6e64,model:_0xec3f68,temperature:temperature=0.95}){const _0x5cb12d=getApiModelMaps()[_0xec3f68['trim']()['toLowerCase']()];return new Promise((_0x2c2f0d,_0x24b5e5)=>{const _0x2797d5=_0x4042,_0x2925d7='https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/'+_0x5cb12d+_0x2797d5(0x10a)+_0x3c6e64,_0x3cc24b={'method':'POST','url':_0x2925d7,'responseType':_0x2797d5(0xe3),'headers':{'Content-Type':_0x2797d5(0xc2)},'data':{'stream':!![],'messages':_0x539a19}};axios(_0x3cc24b)[_0x2797d5(0xfb)](_0x18d5ee=>{const _0x523879=_0x2797d5,_0x3a1122=_0x18d5ee[_0x523879(0xd6)];let _0x31ac23={},_0x3dc397='',_0x2fa080='';_0x3a1122['on'](_0x523879(0xd6),_0x338572=>{const _0x10ff99=_0x523879,_0x3b0516=_0x338572[_0x10ff99(0xee)]()[_0x10ff99(0xcf)]('\x0a\x0a')[_0x10ff99(0xbe)](_0x3bb644=>_0x3bb644[_0x10ff99(0xe4)]()!=='');for(const _0x424db5 of _0x3b0516){const _0x3b98a0=_0x424db5['replace'](_0x10ff99(0xca),'');try{const _0x3cceee=_0x3dc397+_0x3b98a0,_0x1db1dd=JSON[_0x10ff99(0xfa)](_0x3cceee);_0x3dc397='';const {is_end:_0x57c3ab,result:_0x2f6562}=_0x1db1dd;_0x2f6562&&(_0x2fa080+=_0x2f6562),_0x57c3ab&&(_0x31ac23=_0x1db1dd,_0x31ac23[_0x10ff99(0xff)]=_0x2fa080),_0x26a94f(_0x1db1dd);}catch(_0x145c1a){_0x3dc397=_0x3b98a0;}}}),_0x3a1122['on'](_0x523879(0xc4),()=>{_0x2fa080='',_0x3dc397='',_0x2c2f0d(_0x31ac23);});})[_0x2797d5(0xeb)](_0x4e9a84=>{console['log'](_0x4e9a84),_0x24b5e5(new Error(_0x4e9a84));});});}exports[_0x529747(0xd0)]=sendMessageFromBaidu;