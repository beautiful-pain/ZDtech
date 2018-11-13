<template>
<div>
  <div class="box">
    <swiper loop auto :list="SwiperList"></swiper>
  </div>
  <div class="box">
    <tab>
      <tab-item v-for="n in 8" :key="n" :selected="n===1">保险{{ n }}</tab-item>
    </tab>
  </div>
  <div class="title">
    <h2>今日热门保险推荐</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <panel header="" :footer="footer" :list="list" type="1"></panel>
  <Slogen></Slogen>
  <Backbar></Backbar>
  <transition name="router-slid" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>
<script>
import {
  Group,
  Cell,
  Swiper,
  Grid,
  GridItem,
  ButtonTab,
  ButtonTabItem,
  ViewBox,
  Panel,
  CellBox,
  Tab,
  TabItem
} from 'vux'
import Slogen from '#/slogen'
import Backbar from '#/backbar'
export default {
  components: {
    Group,
    Cell,
    Swiper,
    Grid,
    GridItem,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    Panel,
    CellBox,
    Tab,
    TabItem,
    Slogen,
    Backbar,
  },
  data() {
    return {
      tab: 'home',
      value: false,
      menus: {
        menu1: '操作1',
        menu2: '操作2'
      },
      showMenus: false,
      list: [{
        src: require('../../../public/img/icon/icon.png'),
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: require('../../../public/img/icon/icon.png'),
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title: "",
        url: 'http://vux.li'
      },
      SwiperList: [{
        url: 'javascript:',
        img: require('../../../public/img/background/bg1.jpeg'),
        title: '智银家'
      }, {
        url: 'javascript:',
        img: require('../../../public/img/background/bg2.jpeg'),
        title: '智银家',
      }, {
        url: 'javascript:',
        img: require('../../../public/img/background/bg3.jpeg'),
        title: '智银家',
      }],
      GirdList: [{
          name: '信用卡',
          link: 'credit',
          img: require('../../../public/img/icon/xinyongka.svg'),
        },
        {
          name: '网贷',
          link: 'credit',
          img: require('../../../public/img/icon/daikuan.svg'),
        }, {
          name: '保险',
          link: 'credit',
          img: require('../../../public/img/icon/baoxian.svg'),
        }, {
          name: '信用卡',
          link: 'credit',
          img: require('../../../public/img/icon/xinyongka.svg'),
        },
        {
          name: '网贷',
          link: 'credit',
          img: require('../../../public/img/icon/daikuan.svg'),
        }, {
          name: '保险',
          link: 'credit',
          img: require('../../../public/img/icon/baoxian.svg'),
        }, {
          name: '信用卡',
          link: 'credit',
          img: require('../../../public/img/icon/xinyongka.svg'),
        },
        {
          name: '网贷',
          link: 'credit',
          img: require('../../../public/img/icon/daikuan.svg'),
        }, {
          name: '保险',
          link: 'credit',
          img: require('../../../public/img/icon/baoxian.svg'),
        }, {
          name: '支付',
          link: 'credit',
          img: require('../../../public/img/icon/zhifu.svg'),
        }, {
          name: '车抵贷',
          link: 'credit',
          img: require('../../../public/img/icon/chedidai.svg'),
        }, {
          name: '房抵贷',
          link: 'credit',
          img: require('../../../public/img/icon/fangdidai.svg'),
        }, {
          name: '进度查询',
          link: 'credit',
          img: require('../../../public/img/icon/chaxunjindu.svg'),
        }, {
          name: '个人中心',
          link: 'credit',
          img: require('../../../public/img/icon/gerenzhongxin.svg'),
        },
        {
          name: '个人中心',
          link: 'credit',
          img: require('../../../public/img/icon/gerenzhongxin.svg'),
        },
      ],
      DailiList: [{
          name: '发展代理',
          img: require('../../../public/img/icon/fazhandaili.svg'),
        },
        {
          name: '已邀代理',
          img: require('../../../public/img/icon/yiyaodaili.svg'),
        }, {
          name: '我的客户',
          img: require('../../../public/img/icon/wodekehu.svg'),
        }
      ],
      MoreList: [{
          name: '智贷课堂',
          img: require('../../../public/img/icon/zhidaiketang.svg'),
        },
        {
          name: '帮助中心',
          img: require('../../../public/img/icon/bangzhuzhongxin.svg'),
        }, {
          name: '推广产品',
          img: require('../../../public/img/icon/tuiguangchanpin.svg'),
        }
      ],
      marquee: [{
        name: '信用卡',
      }]
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped lang="less">
@import './index.less';
</style>
