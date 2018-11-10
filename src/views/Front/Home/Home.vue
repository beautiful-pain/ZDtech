<template>
<div>
  <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">智贷金管家</x-header>
<!--   <swiper :list="SwiperList" v-model="1"></swiper> -->
  <grid :show-lr-borders="false" :cols="4">
    <grid-item :label="item.name" v-for="(item,index) in GirdList" :key="index">
      <img slot="icon" src="https://static-portal.jdcloud.com/jcloud/jc/2.1.0/widget/jdc-product/i/fun4.svg">
    </grid-item>
  </grid>
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
} from 'vux'
export default {
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
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/5.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://static.vux.li/demo/3.jpg'
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
      ]
    }
  },
  methods: {},
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
  },
  mounted() {}
}
</script>

<style scoped>
@import './index.less';
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}

.weui-grids {
  background-color: #fff;
}
</style>
