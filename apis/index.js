
import axios from '@/axios/axios.request.js'

export const getPicList = (params) => {
  return axios.request({
    url: 'api/wzjxj/common/day_info',
    params: params,
    method: 'get'
  })
}