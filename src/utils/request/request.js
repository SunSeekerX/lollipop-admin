import axios from 'axios'
import { isEmpty } from 'lodash'

import { removeEmptyKey } from '@/utils/utils'

export function createRequest(axiosOptions, createOptions) {
  // 默认创建配置
  createOptions = Object.assign(
    {
      packErr: true,
    },
    createOptions
  )
  const { packErr = true } = createOptions

  const instance = axios.create(
    Object.assign(
      {
        withCredentials: false,
        timeout: 15000,
      },
      axiosOptions
    )
  )

  instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  )

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  )

  return async function request(config) {
    if (config.method.toUpperCase() === 'GET') {
      removeEmptyKey(config.params, false)
    } else {
      removeEmptyKey(config.data, false)
    }
    try {
      const res = await instance.request(config)
      return res
    } catch (error) {
      /**
       * 可以将错误转化为 json 对象查看其他的键值
       */
      // console.log(error.toJSON())
      const result = {
        success: false,
      }
      if (error.response) {
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        const { data } = error.response
        result['code'] = data.code || 500
        result['message'] = data.message || '服务器响应错误'
        result['response'] = error.response
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        result['code'] = 400
        result['message'] = error.message || '客户端网络错误或服务端无响应'
      } else {
        // 发送请求时出了点问题
        result['code'] = 400
        result['message'] = error.message || '客户端错误'
      }
      if (packErr) {
        return Promise.resolve(result)
      } else {
        return Promise.reject(result)
      }
    }
  }
}
