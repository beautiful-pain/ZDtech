<template>
<div>
  <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" style="width:100%;position:absolute;left:0;top:0;z-index:100;">智贷金管家</x-header>
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
        <img slot="icon" src="https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg">
      </grid-item>
    </grid>
  </group>
  <div class="title">
    <h2>财富优选</h2>
    <div class="title2">
      <span>尊享财富尊选,开启梦想生活</span>
    </div>
  </div>
  <group>
    <cell :title="1">
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ 123}} {{i}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ 123}} {{i}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ 123}} {{i}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ 123}} {{i}}</marquee-item>
      </marquee>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ 123}} {{i}}</marquee-item>
      </marquee>
    </cell>
  </group>
  <tabbar>
    <tabbar-item>
      <img slot="icon" src="https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun1.svg">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item show-dot>
      <img slot="icon" src="https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun1.svg">
      <span slot="label">资讯</span>
    </tabbar-item>
    <tabbar-item selected>
      <img slot="icon" src="https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun1.svg">
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
  <div v-transfer-dom>
    <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
  </div>
</div>
</template>
<script>
import {
  Tabbar,
  TabbarItem,
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
  ViewBox
} from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
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
  },
  data() {
    return {
      value: false,
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false,
      SwiperList: [{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '智贷金管家'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '智贷金管家',
        fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
      }],
      GirdList: [{
          name: '信用卡',
          img: 'https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg',
        },
        {
          name: '网贷',
          img: 'https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg',
        }, {
          name: '保险',
          img: 'https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg',
        }, {
          name: '支付',
          img: 'https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg',
        }, {
          name: '车抵贷',
          img: 'https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg',
        }, {
          name: '房抵贷',
          img: 'https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg',
        }, {
          name: '进度查询',
          img: 'https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg',
        }, {
          name: '个人中心',
          img: 'https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg',
        },
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

.title {
    padding: 1rem;
    h2 {
        text-align: left;
        font-size: 20px;
    }
    .title2 {
        text-align: left;
        font-size: 12px;
    }
}

.group {
    padding: 0.5rem;
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
</style>
