<template>
<div class="center">
  <div class="box">
    <div class="caption">
      <div class="avatar">
        <img src="../../../public/img/icon/icon.png" width="100%">
      </div>
      <h2>爱拼才会赢<badge text="专员"></badge></h2>
      <p>UID:2000020</p>
    </div>
  </div>
  <router-link to="/center/xinyongka">123123</router-link>
  <transition name="router-slid" mode="out-in">
      <router-view></router-view>
  </transition>
  <div class="box">
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div>
          <span>1130</span>
          <br/> 已结算
        </div>
      </div>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div>
          <span>1130</span>
          <br/> 已结算
        </div>
        <div>
          <span>15</span>
          <br/> 可结算
        </div>
        <div>
          <span>0</span>
          <br/> 预计收益
        </div>
      </div>
    </card>
  </div>
  <div class="box scrollBox">
    <div class="box">
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <p>获取更多服务</p>
            <h4>获取更多服务</h4>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <p>会员必读</p>
            <h4>推荐办卡须知</h4>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <group class="group">
      <grid :show-lr-borders="false" :cols="4">
        <grid-item :label="item.name" v-for="(item,index) in GirdList_1" :key="index">
          <img slot="icon" v-bind:src="item.img">
        </grid-item>
      </grid>
    </group>
    <group class="group">
      <grid :show-lr-borders="false" :cols="4">
        <grid-item :label="item.name" v-for="(item,index) in GirdList_2" :key="index">
          <img slot="icon" v-bind:src="item.img">
        </grid-item>
      </grid>
    </group>
    <group class="group">
      <grid :show-lr-borders="false" :cols="4">
        <grid-item :label="item.name" v-for="(item,index) in GirdList_3" :key="index">
          <img slot="icon" v-bind:src="item.img">
        </grid-item>
      </grid>
    </group>
    <group class="group">
      <grid :show-lr-borders="false" :cols="4">
        <grid-item :label="item.name" v-for="(item,index) in GirdList_4" :key="index">
          <img slot="icon" v-bind:src="item.img">
        </grid-item>
      </grid>
    </group>
  </div>
  <Footer :tab="tab"></Footer>
  <Slogen></Slogen>
</div>
</template>
<script>
import {
  Flexbox,
  FlexboxItem,
  Card,
  Badge,
  Group,
  Grid,
  GridItem,
  Sticky,
} from 'vux'

import Footer from '#/footer'
import Slogen from '#/slogen'
export default {
  components: {
    Footer,
    Slogen,
    Flexbox,
    FlexboxItem,
    Card,
    Badge,
    Group,
    Grid,
    GridItem,
    Sticky,
  },
  data() {
    return {
      header: '我的钱包',
      tab: 'center',
      showSpace: false,
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
      GirdList_1: [{
          name: '订单明细',
          img: require('../../../public/img/icon/xinyongka.svg'),
        },
        {
          name: '收支明细',
          img: require('../../../public/img/icon/daikuan.svg'),
        }, {
          name: '赚金币',
          img: require('../../../public/img/icon/baoxian.svg'),
        }, {
          name: '客户管理',
          img: require('../../../public/img/icon/zhifu.svg'),
        }
      ],
      GirdList_2: [{
          name: '邀请好友',
          img: require('../../../public/img/icon/xinyongka.svg'),
        },
        {
          name: '代理授权',
          img: require('../../../public/img/icon/daikuan.svg'),
        }, {
          name: '专属海报',
          img: require('../../../public/img/icon/baoxian.svg'),
        }, {
          name: '专属客服',
          img: require('../../../public/img/icon/zhifu.svg'),
        }
      ],
      GirdList_3: [{
          name: '培训课堂',
          img: require('../../../public/img/icon/xinyongka.svg'),
        },
        {
          name: '推广素材',
          img: require('../../../public/img/icon/daikuan.svg'),
        }, {
          name: '系统通知',
          img: require('../../../public/img/icon/baoxian.svg'),
        }, {
          name: '数据报表',
          img: require('../../../public/img/icon/zhifu.svg'),
        }
      ],
      GirdList_4: [{
          name: '帮助中心',
          img: require('../../../public/img/icon/xinyongka.svg'),
        },
        {
          name: '收钱',
          img: require('../../../public/img/icon/daikuan.svg'),
        }
      ],
    }
  },
  methods: {
    spaceChange() {
      this.showSpace = !this.showSpace
      this.$nextTick(() => {
        this.$refs.sticky.bindSticky()
      })
    }
  },
  mounted() {}
}
</script>

<style scoped lang="less">
@import './index.less';
</style>
