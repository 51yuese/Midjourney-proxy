
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ao as a}from"../main-31e47da4.js";const e={queryAllCrami:e=>a.get("crami/queryAllCrami",{params:e}),delCrami:e=>a.post("crami/delCrami",e),createCrami:e=>a.post("crami/createCrami",e),batchDelCrami:e=>a.post("crami/batchDelCrami",e),queryAllPackage:e=>a.get("crami/packagePageV2",{params:e,fetchOptions:{saas:!0}}),createPackage:e=>a.post("crami/packageCreateV2",e),updatePackage:e=>a.post("crami/packageUpdateV2",e),delPackage:e=>a.post("crami/packageDeleteV2",e)};export{e as A};
