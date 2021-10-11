import axios from "axios";
import { message } from 'antd';

const userWhiteList = ['/user/refresh_token','/user/user_info','/user/change_pwd','/user/logout'];

const service = axios.create({
  baseURL: "", // api 的 base_url
  headers: {
    'Content-Type': 'application/json',
    // "Access-Control-Allow-Origin": "*"
  },
  timeout: 100000 // 请求超时时间 
})
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const { url } = config;
    // 在发送请求之前做些什么,登陆时不做校验
    if (url && (url).includes('/user/login.rest')) {
      return config
    }
    const token = localStorage.getItem('token');
    if (token) {
      if (userWhiteList.includes(url)) {
        config.headers.common['x-rbac-token'] = `${token}`;
      } else {
        config.headers.common['x-rbac-token'] = `V1#xdr_web#${token}`;
      }
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return response.data
    } else if (response.status === 401) {
      localStorage.clear();
      window.location.href = '/login'
    }
  },
  function (error) {
    const { response: { status } } = error;
    if (error === undefined || error.code === 'ECONNABORTED') {
      message.warning('服务请求超时')
      return Promise.reject(error)
    }
    if (status === 401 || (status === 403 && window.location.pathname !== "/login")) {
      localStorage.clear();
      window.location.href = '/login'
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default service;
