<template>
<div id="app" style="height:100%;">
  <view-box ref="viewBox">
    <router-view></router-view>
  </view-box>
</div>
</template>
<script>
import {
  ViewBox
} from 'vux'
export default {
  data() {
    return {

    }
  },
  components: {
    ViewBox
  }
}
</script>
<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    vertical-align: middle;
}
body,
html {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}
</style>
