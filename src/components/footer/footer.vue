<template>
<tabbar v-model="tabbar" @on-item-click="check">
  <tabbar-item link="/" :class="tab==='home'?'active':''">
    <img slot="icon" :src=" tab==='home'? imgUrl.img2:imgUrl.img1">
    <span slot="label">智贷金管家</span>
  </tabbar-item>
  <tabbar-item :link="{name:'news'}" show-dot :class="tab==='news'?'active':''">
    <img slot="icon" :src=" tab==='news'? imgUrl.img4:imgUrl.img3">
    <span slot="label">推广产品</span>
  </tabbar-item>
  <tabbar-item :link="{name:'center'}" :class="tab==='center'?'active':''">
    <img slot="icon" :src=" tab==='center'? imgUrl.img6:imgUrl.img5">
    <span slot="label">个人中心</span>
  </tabbar-item>
</tabbar>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
} from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  props: ['tab'],
  data() {
    return {
      imgUrl: {
        img1: require('../../../public/img/icon/tab_shouye_default.svg'),
        img2: require('../../../public/img/icon/tab_shouye_select.svg'),
        img3: require('../../../public/img/icon/tab_zixunzhongxin_default.svg'),
        img4: require('../../../public/img/icon/tab_zixunzhongxin_select.svg'),
        img5: require('../../../public/img/icon/tab_gerenzhongxin_default.svg'),
        img6: require('../../../public/img/icon/tab_gerenzhongxin_select.svg'),
      },
      tabbar: 0
    }
  },
  methods: {
    check(val) {
      console.log(val, 'val');
      if (this.tab === 'home') {
        this.$store.state.tabbar = 0
      } else if (this.tab === 'news') {
        this.$store.state.tabbar = 1
      } else {
        this.$store.state.tabbar = 2
      }
      console.log(this.$store.state);
      this.tabbar = this.$store.state.tabbar
    }
  },
  watch: {},
  mounted() {}
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
