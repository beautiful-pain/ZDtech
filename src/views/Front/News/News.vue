<template>
<div>
  <div class="title">
    <h2>咨询中心</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <div class="title">
    <h2>实时收入展示</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <group>
    <cell>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ '客户提交了人人查产品,获得了9000元收入'}} {{i}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ '客户提交了人人查产品,获得了9000元收入'}} {{i}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ '客户提交了人人查产品,获得了9000元收入'}} {{i}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ '客户提交了人人查产品,获得了9000元收入'}} {{i}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ '客户提交了人人查产品,获得了9000元收入'}} {{i}}</marquee-item>
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
} from 'vux'
import Footer from '#/footer'
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
    Footer
  },
  data() {
    return {
      tab: 'news',
      imgUrl: {
        img1: require('../../../../public/img/icon/tab_shouye_default.svg'),
        img2: require('../../../../public/img/icon/tab_shouye_select.svg'),
        img3: require('../../../../public/img/icon/tab_zixunzhongxin_default.svg'),
        img4: require('../../../../public/img/icon/tab_zixunzhongxin_select.svg'),
        img5: require('../../../../public/img/icon/tab_gerenzhongxin_default.svg'),
        img6: require('../../../../public/img/icon/tab_gerenzhongxin_select.svg'),
      },
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
  methods: {
  },
  mounted() {}
}
</script>

<style scoped lang="less">
@import './index.less';

.title {
    padding: 1rem;
    h2 {
        text-align: left;
        font-size: 18px;
        font-weight: 800;
    }
    .title2 {
        text-align: left;
        font-size: 12px;
    }
}

.vux-slider {
    text-align: left;
}

.group {
    padding: 0.5rem;

}
/deep/.weui-cells {
    margin-top: 0;
}

.weui-media-box_appmsg .weui-media-box__bd {
    text-align: left;
}

.vux-header .vux-header-left button,
.vux-header .vux-header-right a,
.vux-header .vux-header-right button,
/deep/.vux-header .vux-header-left a {
    color: white;
}

.vux-header {
    background: #00b2ff;
}

.grid-center {
    display: block;
    text-align: center;
    color: #666;
}

.weui-grids {
    background-color: #fff;
}

.weui-tabbar {
    .weui-bar__item_on {
        span {
            color: #00b2ff;
        }
    }

}
</style>
