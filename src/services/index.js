import axios from "../utils/axios.js";

/**
 * 登录
 * @param {*} params
 */
export const login = (params) =>
  axios.post(`/user/login.rest`, params);
  /**
 * 修改密码
 * @param {*} params
 */
export const changePwd = (params) =>
axios.post(`/user/change_pwd`, params);
  /**
 * 刷新token
 * @param {*} params
 */
export const refreshtToekn = () =>
axios.get(`/user/refresh_token`);
 /**
 * 获取用用户信息
 * @param {*} params
 */
  export const getUserInfo = () =>
  axios.get(`/user/user_info`);
   /**
 * 退出
 * @param {*} params
 */
    export const loginOuts = () =>
    axios.get(`/user/logout`);
  /**
 * 获取资源
 * @param {*} params
 */
export const getResources= (params) =>
axios.post(`/uap`, params);