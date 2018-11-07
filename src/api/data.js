import axios from '@/libs/api.request'

// 图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组图片组
export const ShowNewimg = () => { //最新图片组
  return axios.request({
    url: '/meitulu/public/index.php/home/show/newimg',
    method: 'get'
  })
}

export const ShowHoting = () => { //最热图片组
  return axios.request({
    url: '/meitulu/public/index.php/home/show/hotimg',
    method: 'get'
  })
}
