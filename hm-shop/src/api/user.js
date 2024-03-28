import request from '@/utils/request'

// 获取个人信息
export const getUserInfoDetail = () => {
  return request.get('/user/info')
}

// 获取地址列表
export const getAddressList = () => {
  return request.get('/address/list')
}
