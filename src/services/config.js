
import { stringify } from 'qs';
import request from './request';

const dev = process.env.NODE_ENV === 'development';
const defaultHost = ''; // 自定义,需要在hosts里配置对应的映射

// 请求地址是当前访问地址
const currentHost = () => {
  if (dev || /^[\d]|localhost/.test(window.location.host)) return defaultHost;
  return `${window.location.origin}`;
};

// 自定义前缀，对应后端微服务
const apiUrlfun = val => {
  if (val) {
    return `${currentHost()}/api/${val}`;
  }
  return `${currentHost()}/api`;
};

export { stringify, apiUrlfun, request };
