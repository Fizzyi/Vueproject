// 本地持久化
const INFO_KEY = 'hm_shopping_info'
// 获取个人信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result
    ? JSON.parse(result)
    : {
        token: '',
        userId: ''
      }
}

// 设置个人信息
export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

const HISTORY_KEY = 'hm_history_list'

// 获取搜索历史记录
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

// 设置搜索历史记录
export const setHistoryList = (info) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(info))
}
