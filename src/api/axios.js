import axios from 'axios'
import config from '@/config/index'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  // 基础url和header
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl
    }
    return config
  }

  // 接口请求
  request (options) {
    const instance = axios.create()
    // 结构赋值 ‘baseUrl + header’ + options
    options = { ...this.getInsideConfig(), ...options }
    // 拦截器
    this.interceptors(instance)
    return instance(options)
  }

  // 拦截器函数
  interceptors (instance) {
    instance.interceptors.request.use(function (config) {
      return config
    }, function (error) {
      console.log('error occurred on request')
      return Promise.reject(error)
    })
    instance.interceptors.response.use(function (response) {
      console.log(response)

      return response
    }, function (error) {
      console.log('error occurred on response', error)
      return Promise.reject(error)
    })
  }
}

export default new HttpRequest(baseUrl)
