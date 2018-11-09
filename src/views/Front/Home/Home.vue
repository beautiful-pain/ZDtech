<template>
<div>
  <grid :show-lr-borders="false" :show-vertical-dividers="false">
    <grid-item link="#">
      <img slot="icon">
    </grid-item>
    <grid-item link="#">
      <img slot="icon">
    </grid-item>
    <grid-item link="#">
      <img slot="icon">
    </grid-item>
  </grid>
  <tabbar>
    <tabbar-item>
      <img slot="icon">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item show-dot>
      <img slot="icon">
      <span slot="label">资讯</span>
    </tabbar-item>
    <tabbar-item selected>
      <img slot="icon">
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
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
  GroupTitle
} from 'vux'
export default {
  data() {
    return {
      value: false
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
    GroupTitle
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
