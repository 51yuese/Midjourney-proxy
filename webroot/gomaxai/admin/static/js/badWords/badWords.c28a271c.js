
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ao as d}from"../main-31e47da4.js";const o={queryBadWords:(o={})=>d.get("badwords/query",{params:o}),queryViolation:(o={})=>d.get("badwords/violation",{params:o}),delBadWords:o=>d.post("badwords/del",o),addBadWords:o=>d.post("badwords/add",o),updateBadWords:o=>d.post("badwords/update",o),delViolationsLog:o=>d.post("badWords/delViolation",o)};export{o as A};
