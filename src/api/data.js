import axios from '@/api/axios'

// 废弃
export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'POST',
    data: param
  })
}

// mock数据
export const getDate = () => {
  return axios.request({
    url: '/home/getData'
  })
}

// 获取用户管理列表页数
export const getPages = ({ currentPage, pageSize }) => {
  return axios.request({
    url: '/page',
    method: 'GET',
    params: {
      currentPage,
      pageSize
    }
  })
}

// 获取总条数
export const geteTotalpage = () => {
  return axios.request({
    url: '/totalpage',
    method: 'GET'
  })
}

// 获取总条数
export const addUserDate = ({ age, gender, name, address, birth }) => {
  return axios.request({
    url: '/adduser',
    method: 'POST',
    data: {
      name,
      age,
      gender,
      birth,
      address
    }
  })
}
