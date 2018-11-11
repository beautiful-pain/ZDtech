<template>
<div>
  <swiper loop auto :list="SwiperList"></swiper>
  <div class="title">
    <h2>财富优选</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <group class="group">
    <grid :show-lr-borders="false" :cols="4">
      <grid-item :label="item.name" v-for="(item,index) in GirdList" :key="index">
        <img slot="icon" v-bind:src="item.img">
      </grid-item>
    </grid>
  </group>
  <div class="title">
    <h2>实时收入展示</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <group>
    <cell>
      <marquee>
        <marquee-item v-for="i in 5" :key="i">{{ '客户提交了人人查产品,获得了9000元收入'}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i">{{ '客户提交了人人查产品,获得了9000元收入'}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i">{{ '客户提交了人人查产品,获得了9000元收入'}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i">{{ '客户提交了人人查产品,获得了9000元收入'}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i">{{ '客户提交了人人查产品,获得了9000元收入'}}</marquee-item>
      </marquee>
    </cell>
  </group>
  <div class="title">
    <h2>我的代理</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <group class="group">
    <grid :show-lr-borders="false" :cols="3">
      <grid-item :label="item.name" v-for="(item,index) in DailiList" :key="index">
        <img slot="icon" :src="item.img">
      </grid-item>
    </grid>
  </group>
  <div class="title">
    <h2>今日热门贷款推荐</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <panel header="" :footer="footer" :list="list" type="1"></panel>
  <div class="title">
    <h2>智贷金课堂</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <group class="group">
    <grid :show-lr-borders="false" :cols="3">
      <grid-item :label="item.name" v-for="(item,index) in MoreList" :key="index">
        <img slot="icon" :src="item.img">
      </grid-item>
    </grid>
  </group>
  <div class="title">
    <h2>常见问题</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <group>
    <cell-box>
      常见问题常见问题常见问题常见问题常
    </cell-box>
    <cell-box>
      常见问题常见问题常见问题常见问题常
    </cell-box>
    <cell-box>
      常见问题常见问题常见问题常见问题常
    </cell-box>
  </group>
  <Slogen></Slogen>
  <Footer :tab="tab"></Footer>
</div>
</template>
<script>
import {
  Group,
  Cell,
  Swiper,
  Grid,
  GridItem,
  GroupTitle,
  XHeader,
  Actionsheet,
  TransferDom,
  ButtonTab,
  ButtonTabItem,
  Marquee,
  MarqueeItem,
  ViewBox,
  Panel,
  CellBox,
} from 'vux'
import Footer from '#/footer'
import Slogen from '#/slogen'
export default {
  components: {
    Group,
    Cell,
    Swiper,
    Grid,
    GridItem,
    GroupTitle,
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    Marquee,
    MarqueeItem,
    ViewBox,
    Panel,
    CellBox,
    Footer,
    Slogen
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
        src: require('../../../../public/img/icon/icon.png'),
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: require('../../../../public/img/icon/icon.png'),
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
        img: require('../../../../public/img/background/bg1.jpeg'),
        title: '智贷金管家'
      }, {
        url: 'javascript:',
        img: require('../../../../public/img/background/bg2.jpeg'),
        title: '智贷金管家',
      }, {
        url: 'javascript:',
        img: require('../../../../public/img/background/bg3.jpeg'),
        title: '智贷金管家',
      }],
      GirdList: [{
          name: '信用卡',
          img: require('../../../../public/img/icon/xinyongka.svg'),
        },
        {
          name: '网贷',
          img: require('../../../../public/img/icon/daikuan.svg'),
        }, {
          name: '保险',
          img: require('../../../../public/img/icon/baoxian.svg'),
        }, {
          name: '支付',
          img: require('../../../../public/img/icon/zhifu.svg'),
        }, {
          name: '车抵贷',
          img: require('../../../../public/img/icon/chedidai.svg'),
        }, {
          name: '房抵贷',
          img: require('../../../../public/img/icon/fangdidai.svg'),
        }, {
          name: '进度查询',
          img: require('../../../../public/img/icon/chaxunjindu.svg'),
        }, {
          name: '个人中心',
          img: require('../../../../public/img/icon/gerenzhongxin.svg'),
        },
      ],
      DailiList: [{
          name: '发展代理',
          img: require('../../../../public/img/icon/fazhandaili.svg'),
        },
        {
          name: '已邀代理',
          img: require('../../../../public/img/icon/yiyaodaili.svg'),
        }, {
          name: '我的客户',
          img: require('../../../../public/img/icon/wodekehu.svg'),
        }
      ],
      MoreList: [{
          name: '智贷课堂',
          img: require('../../../../public/img/icon/zhidaiketang.svg'),
        },
        {
          name: '帮助中心',
          img: require('../../../../public/img/icon/bangzhuzhongxin.svg'),
        }, {
          name: '推广产品',
          img: require('../../../../public/img/icon/tuiguangchanpin.svg'),
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
