import axios from 'axios';
import qs from 'qs';
import {
  Message,
} from 'element-ui';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const request = axios.create({
  baseURL: VUE_APP_PROXY,
  timeout: 600000, // 请求超时时间
});

// http request 拦截器
request.interceptors.request.use(
  (config) => {
    config.data = qs.stringify(config.data);
    return config;
  },
  (err) => Promise.reject(err),
);

// http response 拦截器
request.interceptors.response.use(
  (response) => {
    if (response.data.status !== 200) {
      Message.error(response.data.message);
    }
    switch (response.data.status) {
      case 200:
        return response.data;
      case 401:
        // Token问题
        alert('登入失效,请重新登入');
        return;
      case 409:
        return Promise.reject(response.data);
      default:
        return Promise.reject(response.data);
    }
  },
  (error) => Promise.reject(error.response),
);

export default request;
