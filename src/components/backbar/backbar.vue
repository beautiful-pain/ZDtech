<template>
<div class="backbar">
  <div class="home">
    <x-button :gradients="['#1D62F0', '#19D5FD']" link="home">
      <x-icon type="ios-circle-filled" size="30" class="white"></x-icon>
    </x-button>
  </div>
  <div class="goback">
    <x-button :gradients="['#1D62F0', '#19D5FD']" link="BACK">
      <x-icon type="ios-arrow-back" size="30" class="white"></x-icon>
    </x-button>
  </div>
</div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
  XButton
} from 'vux'
export default {
  components: {
    XButton
  },
  data() {
    return {}
  },
  methods: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
