
<template>
<div>
  <mt-button type="primary">primary</mt-button>
  <mt-progress :value="20" :bar-height="5"></mt-progress>
</div>
</template>
<script>
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
