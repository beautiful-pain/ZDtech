<template>
<div>
  <group label-width="4.5em" label-margin-right="2em" label-align="right">
    <h2>房产抵押申请</h2>
    <x-input title="您的姓名" v-model="username"></x-input>
    <x-input title="身份证号码(18位)" v-model="identity"></x-input>
    <x-input title="年龄" v-model="age"></x-input>
    <x-input title="手机号码" v-model="telphone"></x-input>
    <x-input title="贷款金额 (万)" v-model="limit"></x-input>
    <selector title="贷款年限" :options="['3月', '6月','12月']" v-model="time"></selector>
    <selector title="贷款用途" :options="['装修', '商用','急用']" v-model="way"></selector>
    <selector title="职业身份" :options="['上班族', '个体户','无业','创业者']" v-model="profession"></selector>
    <selector title="单位类型" :options="['上市企业员工', '500强企业员工','国企公务员','普通企业员工']" v-model="unit"></selector>
    <selector title="发工资方式" :options="['银行卡打款', '现金发放','部分银行卡,部分现金']" v-model="payoff"></selector>
    <selector title="当前单位工作时间" :options="['不足6月', '6-11月','12月以上']" v-model="worktime"></selector>
    <selector title="月收入" :options="['2000以下', '4000-6000','6000-8000','10000以上']" v-model="salary"></selector>
    <x-switch title="有无社保"></x-switch>
    <x-switch title="有无公积金"></x-switch>
    <x-address title="所在地" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
    <x-number title="Quantity" align="right" v-model="numberValue" button-style="square" :min="0" :max="5"></x-number>
    <x-textarea title="身份证照片" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
    <x-textarea title="结婚证" placeholder="选填" :show-counter="false" :rows="3"></x-textarea>
    <x-textarea title="房产证" placeholder="必填" :show-counter="false" :rows="3"></x-textarea>
    <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
  </group>
  <br>
  <Slogen></Slogen>
  <Backbar></Backbar>
</div>
</template>
<script>
import {
  GroupTitle,
  Group,
  Cell,
  XInput,
  Selector,
  PopupPicker,
  Datetime,
  XNumber,
  ChinaAddressData,
  XAddress,
  XTextarea,
  XSwitch
} from 'vux'

import Backbar from '#/backbar'
import Slogen from '#/slogen'
export default {
  components: {
    Slogen,
    Backbar,
    Group,
    GroupTitle,
    Cell,
    XInput,
    Selector,
    PopupPicker,
    XAddress,
    Datetime,
    XNumber,
    XTextarea,
    XSwitch
  },
  data() {
    return {
      addressData: ChinaAddressData,
      addressValue: ['湖北省', '武汉市', '武昌区'],
      username: null,
      identity: null,
      age: null,
      telphone: null,
      limit: null,
      way: '装修',
      time: '3月',
      profession: '上班族',
      unit: '上市企业员工',
      salary: '2000以下',
      payoff: '银行卡打款',
      worktime: '不足6月',
      numberValue: 0,
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped lang="less">
@import './index.less';
</style>
