import axios from '@/libs/api.request'

export const login = ({
  userName,
  password
}) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'meitulu/public/index.php/index/user/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'meitulu/public/index.php/index/user/gettoken',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
