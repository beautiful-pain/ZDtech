
<template>
<div>
  <mt-button @click.native="handleClick">按钮</mt-button>
</div>
</template>
<script>
import {
  Header
} from 'mint-ui'
export default {
  data() {
    return {
      value: false
    }
  },
  methods: {
    handleClick() {

    }
  },
  components: {},
  mounted() {}
}
</script>

<style scoped>
@import './index.less';
</style>
