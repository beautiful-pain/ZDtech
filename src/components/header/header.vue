<template>
<section id="header">
  <Content class="noPadding">
    <Header>
      <Menu mode="horizontal" active-name="1" @on-select="select">
        <div class="layout-logo" @click="BackHome">智贷科技</div>
        <div class="layout-nav">
          <MenuItem v-for="(item,index) in List" :to="{name:item.path,query:{id:index}}" :name="index">{{item.name}}
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </Content>
</section>
</template>

<script>
import {
  PageList
} from '@/libs/nameList' //命名配置
import {
  F_BackHome
} from '@/libs/tools'
export default {
  data() {
    return {
      name: 1,
      List: []
    }
  },
  methods: {
    select(val) {
      this.name = val
      console.log(this.name);
    },
    BackHome(){
      F_BackHome()
    }
  },
  mounted() {
    console.log(PageList);
    this.List = PageList
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
