
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,i as l,a as t,z as a,r as s,B as n,q as i,M as d,j as o,o as u,c as m,f as c,ae as p,e as g,g as b,h as r,b as v,G as f,I as V,J as _,N as h,s as y,O as U,_ as k}from"../main-31e47da4.js";import{u as M}from"../index/index.506e3685.js";const S={class:"color-scheme"},q={key:1,class:"menu-mode"},z={class:"setting-item"},C={class:"label"},w={class:"setting-item"},P={class:"label"},A={class:"setting-item"},x={key:2,class:"setting-item"},F={class:"setting-item"},H={class:"setting-item"},J={key:3,class:"setting-item"},O={class:"label"},j={class:"setting-item"},B={class:"label"},D={class:"setting-item"},I={class:"label"},N={key:5,class:"setting-item"},R={class:"setting-item"},T={class:"label"},E={class:"setting-item"},G={class:"setting-item"},K={class:"setting-item"},L={class:"setting-item"},Q={class:"setting-item"},W={class:"setting-item"},X={class:"setting-item"},Y={class:"label"},Z={class:"setting-item"},$={class:"setting-item"},ee={class:"label"},le={class:"setting-item"},te={class:"setting-item"},ae={class:"label"},se={class:"setting-item"},ne={class:"label"},ie=e({name:"AppSetting"}),de=k(e({...ie,setup(e){const k=l(),ie=t(),de=a(),oe=s(!1);n((()=>ie.settings.menu.menuMode),(e=>{"single"===e?de.setActived(0):de.setActived(k.fullPath)})),i((()=>{d.on("global-app-setting-toggle",(()=>{oe.value=!oe.value}))}));const{copy:ue,copied:me,isSupported:ce}=M();function pe(){ue(JSON.stringify(ie.settings,null,2))}return n(me,(e=>{e&&U.success("复制成功，请粘贴到 src/settings.ts 文件中！")})),(e,l)=>{const t=o("el-alert"),a=o("el-divider"),s=y,n=o("el-icon"),i=o("el-tooltip"),d=o("el-switch"),U=o("el-radio-button"),k=o("el-radio-group"),M=o("el-input"),de=o("el-button"),ue=o("el-drawer");return u(),m("div",null,[c(ue,{modelValue:g(oe),"onUpdate:modelValue":l[27]||(l[27]=e=>h(oe)?oe.value=e:null),title:"应用配置",direction:"rtl",size:360},p({default:b((()=>[c(t,{title:"应用配置可实时预览效果，但只是临时生效，要想真正作用于项目，可以点击下方的“复制配置”按钮，并将配置粘贴到 src/settings.ts 文件中。同时建议在生产环境隐藏应用配置功能。",type:"error",closable:!1}),c(a,null,{default:b((()=>l[28]||(l[28]=[r("颜色主题")]))),_:1}),v("div",S,[v("div",{class:f(["switch",g(ie).settings.app.colorScheme]),onClick:l[0]||(l[0]=e=>g(ie).settings.app.colorScheme="dark"===g(ie).settings.app.colorScheme?"light":"dark")},[c(n,{class:"icon"},{default:b((()=>[c(s,{name:"light"===g(ie).settings.app.colorScheme?"ep:sunny":"ep:moon"},null,8,["name"])])),_:1})],2)]),"pc"===g(ie).mode?(u(),V(a,{key:0},{default:b((()=>l[29]||(l[29]=[r(" 导航栏模式 ")]))),_:1})):_("",!0),"pc"===g(ie).mode?(u(),m("div",q,[c(i,{content:"侧边栏模式（含主导航）",placement:"top","show-after":500},{default:b((()=>[v("div",{class:f(["mode mode-side",{active:"side"===g(ie).settings.menu.menuMode}]),onClick:l[1]||(l[1]=e=>g(ie).settings.menu.menuMode="side")},[l[30]||(l[30]=v("div",{class:"mode-container"},null,-1)),c(n,null,{default:b((()=>[c(s,{name:"ep:check"})])),_:1})],2)])),_:1}),c(i,{content:"顶部模式",placement:"top","show-after":500},{default:b((()=>[v("div",{class:f(["mode mode-head",{active:"head"===g(ie).settings.menu.menuMode}]),onClick:l[2]||(l[2]=e=>g(ie).settings.menu.menuMode="head")},[l[31]||(l[31]=v("div",{class:"mode-container"},null,-1)),c(n,null,{default:b((()=>[c(s,{name:"ep:check"})])),_:1})],2)])),_:1}),c(i,{content:"侧边栏模式（不含主导航）",placement:"top","show-after":500},{default:b((()=>[v("div",{class:f(["mode mode-single",{active:"single"===g(ie).settings.menu.menuMode}]),onClick:l[3]||(l[3]=e=>g(ie).settings.menu.menuMode="single")},[l[32]||(l[32]=v("div",{class:"mode-container"},null,-1)),c(n,null,{default:b((()=>[c(s,{name:"ep:check"})])),_:1})],2)])),_:1})])):_("",!0),c(a,null,{default:b((()=>l[33]||(l[33]=[r("导航栏")]))),_:1}),v("div",z,[v("div",C,[l[34]||(l[34]=r(" 主导航切换跳转 ")),c(i,{content:"开启该功能后，切换主导航时，页面自动跳转至该主导航下，次导航里第一个导航",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.menu.switchMainMenuAndPageJump,"onUpdate:modelValue":l[4]||(l[4]=e=>g(ie).settings.menu.switchMainMenuAndPageJump=e),disabled:["single"].includes(g(ie).settings.menu.menuMode)},null,8,["modelValue","disabled"])]),v("div",w,[v("div",P,[l[35]||(l[35]=r(" 次导航保持展开一个 ")),c(i,{content:"开启该功能后，次导航只保持单个菜单的展开",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.menu.subMenuUniqueOpened,"onUpdate:modelValue":l[5]||(l[5]=e=>g(ie).settings.menu.subMenuUniqueOpened=e)},null,8,["modelValue"])]),v("div",A,[l[36]||(l[36]=v("div",{class:"label"}," 次导航是否折叠 ",-1)),c(d,{modelValue:g(ie).settings.menu.subMenuCollapse,"onUpdate:modelValue":l[6]||(l[6]=e=>g(ie).settings.menu.subMenuCollapse=e)},null,8,["modelValue"])]),"pc"===g(ie).mode?(u(),m("div",x,[l[37]||(l[37]=v("div",{class:"label"}," 显示次导航折叠按钮 ",-1)),c(d,{modelValue:g(ie).settings.menu.enableSubMenuCollapseButton,"onUpdate:modelValue":l[7]||(l[7]=e=>g(ie).settings.menu.enableSubMenuCollapseButton=e)},null,8,["modelValue"])])):_("",!0),v("div",F,[l[38]||(l[38]=v("div",{class:"label"}," 是否启用快捷键 ",-1)),c(d,{modelValue:g(ie).settings.menu.enableHotkeys,"onUpdate:modelValue":l[8]||(l[8]=e=>g(ie).settings.menu.enableHotkeys=e),disabled:["single"].includes(g(ie).settings.menu.menuMode)},null,8,["modelValue","disabled"])]),c(a,null,{default:b((()=>l[39]||(l[39]=[r("顶栏")]))),_:1}),v("div",H,[l[43]||(l[43]=v("div",{class:"label"}," 模式 ",-1)),c(k,{modelValue:g(ie).settings.topbar.mode,"onUpdate:modelValue":l[9]||(l[9]=e=>g(ie).settings.topbar.mode=e),size:"small"},{default:b((()=>[c(U,{label:"static"},{default:b((()=>l[40]||(l[40]=[r(" 静止 ")]))),_:1}),c(U,{label:"fixed"},{default:b((()=>l[41]||(l[41]=[r(" 固定 ")]))),_:1}),c(U,{label:"sticky"},{default:b((()=>l[42]||(l[42]=[r(" 粘性 ")]))),_:1})])),_:1},8,["modelValue"])]),c(a,null,{default:b((()=>l[44]||(l[44]=[r("工具栏")]))),_:1}),"pc"===g(ie).mode?(u(),m("div",J,[v("div",O,[l[45]||(l[45]=r(" 全屏 ")),c(i,{content:"该功能使用场景极少，用户习惯于通过窗口“最大化”功能来扩大显示区域，以显示更多内容，并且使用 F11 键也可以进入全屏效果",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.toolbar.enableFullscreen,"onUpdate:modelValue":l[10]||(l[10]=e=>g(ie).settings.toolbar.enableFullscreen=e)},null,8,["modelValue"])])):_("",!0),v("div",j,[v("div",B,[l[46]||(l[46]=r(" 页面刷新 ")),c(i,{content:"开启时会阻止原生 F5 键刷新功能，并采用框架提供的刷新模式进行页面刷新",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.toolbar.enablePageReload,"onUpdate:modelValue":l[11]||(l[11]=e=>g(ie).settings.toolbar.enablePageReload=e)},null,8,["modelValue"])]),v("div",D,[v("div",I,[l[47]||(l[47]=r(" 颜色主题 ")),c(i,{content:"开启后可在明亮/暗黑模式中切换",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.toolbar.enableColorScheme,"onUpdate:modelValue":l[12]||(l[12]=e=>g(ie).settings.toolbar.enableColorScheme=e)},null,8,["modelValue"])]),"pc"===g(ie).mode?(u(),V(a,{key:4},{default:b((()=>l[48]||(l[48]=[r(" 面包屑导航 ")]))),_:1})):_("",!0),"pc"===g(ie).mode?(u(),m("div",N,[l[49]||(l[49]=v("div",{class:"label"}," 是否启用 ",-1)),c(d,{modelValue:g(ie).settings.breadcrumb.enable,"onUpdate:modelValue":l[13]||(l[13]=e=>g(ie).settings.breadcrumb.enable=e)},null,8,["modelValue"])])):_("",!0),c(a,null,{default:b((()=>l[50]||(l[50]=[r("导航搜索")]))),_:1}),v("div",R,[v("div",T,[l[51]||(l[51]=r(" 是否启用 ")),c(i,{content:"对导航进行快捷搜索",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.navSearch.enable,"onUpdate:modelValue":l[14]||(l[14]=e=>g(ie).settings.navSearch.enable=e)},null,8,["modelValue"])]),v("div",E,[l[52]||(l[52]=v("div",{class:"label"}," 是否启用快捷键 ",-1)),c(d,{modelValue:g(ie).settings.navSearch.enableHotkeys,"onUpdate:modelValue":l[15]||(l[15]=e=>g(ie).settings.navSearch.enableHotkeys=e),disabled:!g(ie).settings.navSearch.enable},null,8,["modelValue","disabled"])]),c(a,null,{default:b((()=>l[53]||(l[53]=[r("底部版权")]))),_:1}),v("div",G,[l[54]||(l[54]=v("div",{class:"label"}," 是否启用 ",-1)),c(d,{modelValue:g(ie).settings.copyright.enable,"onUpdate:modelValue":l[16]||(l[16]=e=>g(ie).settings.copyright.enable=e)},null,8,["modelValue"])]),v("div",K,[l[55]||(l[55]=v("div",{class:"label"}," 日期 ",-1)),c(M,{modelValue:g(ie).settings.copyright.dates,"onUpdate:modelValue":l[17]||(l[17]=e=>g(ie).settings.copyright.dates=e),size:"small",disabled:!g(ie).settings.copyright.enable},null,8,["modelValue","disabled"])]),v("div",L,[l[56]||(l[56]=v("div",{class:"label"}," 公司 ",-1)),c(M,{modelValue:g(ie).settings.copyright.company,"onUpdate:modelValue":l[18]||(l[18]=e=>g(ie).settings.copyright.company=e),size:"small",disabled:!g(ie).settings.copyright.enable},null,8,["modelValue","disabled"])]),v("div",Q,[l[57]||(l[57]=v("div",{class:"label"}," 网址 ",-1)),c(M,{modelValue:g(ie).settings.copyright.website,"onUpdate:modelValue":l[19]||(l[19]=e=>g(ie).settings.copyright.website=e),size:"small",disabled:!g(ie).settings.copyright.enable},null,8,["modelValue","disabled"])]),v("div",W,[l[58]||(l[58]=v("div",{class:"label"}," 备案 ",-1)),c(M,{modelValue:g(ie).settings.copyright.beian,"onUpdate:modelValue":l[20]||(l[20]=e=>g(ie).settings.copyright.beian=e),size:"small",disabled:!g(ie).settings.copyright.enable},null,8,["modelValue","disabled"])]),c(a,null,{default:b((()=>l[59]||(l[59]=[r("主页")]))),_:1}),v("div",X,[v("div",Y,[l[60]||(l[60]=r(" 是否开启 ")),c(i,{content:"该功能开启时，登录成功默认进入主页，反之则默认进入导航栏里第一个导航页面",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.home.enable,"onUpdate:modelValue":l[21]||(l[21]=e=>g(ie).settings.home.enable=e)},null,8,["modelValue"])]),v("div",Z,[l[61]||(l[61]=v("div",{class:"label"}," 主页名称 ",-1)),c(M,{modelValue:g(ie).settings.home.title,"onUpdate:modelValue":l[22]||(l[22]=e=>g(ie).settings.home.title=e),size:"small"},null,8,["modelValue"])]),c(a,null,{default:b((()=>l[62]||(l[62]=[r("其它")]))),_:1}),v("div",$,[v("div",ee,[l[63]||(l[63]=r(" 组件尺寸 ")),c(i,{content:"全局设置 Element Plus 组件的默认尺寸大小",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(k,{modelValue:g(ie).settings.app.elementSize,"onUpdate:modelValue":l[23]||(l[23]=e=>g(ie).settings.app.elementSize=e),size:"small"},{default:b((()=>[c(U,{label:"large"},{default:b((()=>l[64]||(l[64]=[r(" 较大 ")]))),_:1}),c(U,{label:"default"},{default:b((()=>l[65]||(l[65]=[r(" 默认 ")]))),_:1}),c(U,{label:"small"},{default:b((()=>l[66]||(l[66]=[r(" 稍小 ")]))),_:1})])),_:1},8,["modelValue"])]),v("div",le,[l[67]||(l[67]=v("div",{class:"label"}," 是否启用权限 ",-1)),c(d,{modelValue:g(ie).settings.app.enablePermission,"onUpdate:modelValue":l[24]||(l[24]=e=>g(ie).settings.app.enablePermission=e)},null,8,["modelValue"])]),v("div",te,[v("div",ae,[l[68]||(l[68]=r(" 载入进度条 ")),c(i,{content:"该功能开启时，跳转路由会看到页面顶部有进度条",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.app.enableProgress,"onUpdate:modelValue":l[25]||(l[25]=e=>g(ie).settings.app.enableProgress=e)},null,8,["modelValue"])]),v("div",se,[v("div",ne,[l[69]||(l[69]=r(" 动态标题 ")),c(i,{content:"该功能开启时，页面标题会显示当前路由标题，格式为“页面标题 - 网站名称”；关闭时则显示网站名称，网站名称在项目根目录下 .env.* 文件里配置",placement:"top"},{default:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:question-filled"})])),_:1})])),_:1})]),c(d,{modelValue:g(ie).settings.app.enableDynamicTitle,"onUpdate:modelValue":l[26]||(l[26]=e=>g(ie).settings.app.enableDynamicTitle=e)},null,8,["modelValue"])])])),_:2},[g(ce)?{name:"footer",fn:b((()=>[c(de,{type:"primary",onClick:pe},{icon:b((()=>[c(n,null,{default:b((()=>[c(s,{name:"ep:document-copy"})])),_:1})])),default:b((()=>[l[70]||(l[70]=r(" 复制配置 "))])),_:1})])),key:"0"}:void 0]),1032,["modelValue"])])}}}),[["__scopeId","data-v-29951464"]]);export{de as default};
