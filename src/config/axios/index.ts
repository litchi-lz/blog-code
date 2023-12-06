import { config } from './config'
import { service } from './service'

const { defaultHeaders } = config

const request = (option) => {
  const { url, method, params, data, headersType, responseType } = option
  return service({
    url,
    method,
    params,
    data,
    responseType,
    headers: {
      'Content-Type': headersType || defaultHeaders
    }
  })
}
export default {
  get: (option) => {
    return request({ method: 'get', ...option })
  },
  post: (option) => {
    return request({ method: 'post', ...option })
  },
  delete: (option) => {
    return request({ method: 'delete', ...option })
  },
  put: (option) => {
    return request({ method: 'put', ...option })
  },
  patch: (option) => {
    return request({ method: 'patch', ...option })
  }
}
