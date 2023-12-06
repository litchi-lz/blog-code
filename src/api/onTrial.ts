import request from '@/config/axios'
// 虚拟列表
export const virtualList = () => {
  return request.get({ url: `/api/bigData`})
}



