import axios from 'axios'
import { ElMessage } from 'element-plus'


import { config } from './config'
const { baseUrl } = config

export const PATH_URL = baseUrl[import.meta.env.VITE_APP_BASE_PATH]

// 创建axios实例
const service = axios.create({
  baseURL: PATH_URL, // api 的 baseUrl
  timeout: config.requestTimeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
  
    if (
      config.method === 'post' &&
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      
    }
    // 刷新token
    if (config.url.includes('refresh-token'))
     
    // get参数编码
    if (config.method === 'get' && config.params) {
      let url = config.url
      url += '?'
      const keys = Object.keys(config.params)
      // console.log(keys)
      for (const key of keys) {
        if (config.params[key] !== 0 && config.params[key] !== null) {
          url += `${key}=${encodeURIComponent(config.params[key])}&`
        }
      }
      url = url.substring(0, url.length - 1)
      config.params = {}
      config.url = url
    }
    return config
  },
  (error) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// 是否正在刷新的标志
let isRefreshing = false
// 重试队列，每一项是一个待执行的函数形式
let requestArr = []

// response 拦截器
service.interceptors.response.use(
  (response) => {
    if (
      Object.keys(response.data).includes('message') &&
      !response.config.url.includes('/api/user-sub-attrs')
    ) {
      ElMessage.success(response.data.message)
    }
    return response.data
  },
  (error) => {
    console.log('响应拦截器请求错误', error.response)
    // token过期
    if (error.response?.status == 401) {
      let configs = error.response.config
    

    }
    // 参数错误
    if (error.response.status === 422) {
      return Promise.reject(error.response.data)
    }
    ElMessage.error(error.response.data.message || '其它错误')
    return Promise.reject(error)
  }
)

export { service }
