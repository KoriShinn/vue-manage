import axios from '@/api/axios'

export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'POST',
    data: param
  })
}

export const getDate = () => {
  return axios.request({
    url: '/home/getData'
  })
}
