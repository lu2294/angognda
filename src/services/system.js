import axios from "../utils/axios.js";
// 平台-系统管理APP

/**
 * 组织管理列表
 * @param {*} params
 */
export const getTenant = (params) =>
  axios.post("/systemapi/system/tenant/getTenant", params);
  /**
 * 组织管理添加
 * @param {*} params
 */
export const addTenant = (params) =>
axios.post("/systemapi/system/tenant/addTenant", params);
/**
 * 组织管理删除
 * @param {*} params
 */
 export const deleteTenant = (params) =>
 axios.post("/systemapi/system/tenant/deleteTenant", params);
 /**
 * 组织管理获取token
 * @param {*} params
 */
export const getTokenByTentant = (params) =>
axios.post("/systemapi/system/tenant/getTokenByTentant", params);
/**
 * 组织管理token刷新
 * @param {*} params
 */
 export const refreshToken = (params) =>
 axios.post("/systemapi/system/tenant/refreshToken", params);
 /**
 * 组织管理编辑
 * @param {*} params
 */
  export const editTenant = (params) =>
  axios.post("/systemapi/system/tenant/editTenant", params);
  /**
 * 版本信息
 */
export const getVersion = (params) =>
axios.post(`/systemapi/system/appmgmt/getAppList`,params)

 /**
 * 获取资源
 * @param {*} params
 */
  export const finWait= () =>
  axios.get(`/systemapi/system/appmgmt/finWait`);