<template>
<div class="layout">
  <Header></Header>
  <Layout>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="https://cdn.bdstatic.com/portal/img/campaign/11activity/banner@2x_168ce583.jpg" width="100%"></swiper-slide>
        <swiper-slide><img src="https://cdn.bdstatic.com/portal/img/campaign/11activity/banner@2x_168ce583.jpg" width="100%"></swiper-slide>
        <swiper-slide><img src="https://cdn.bdstatic.com/portal/img/campaign/11activity/banner@2x_168ce583.jpg" width="100%"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <section id="about">
      <Content class="contentPadding">
        <h3>新手引导教程</h3>
        <p>智贷科技云算力平台是国内先进的云算力数字投资平台。我们拥有最专业的云算力解决方案:我们拥有强大的技术团队，确保云算力的稳定运行;我们会员的收益尤为显著!加入智贷科技会员,您 可以在智贷科技享受更多优质服务。
        </p>
        <Row :gutter="32" class="row">
          <Col span="24">
          <Tabs type="card" :animated="false">
            <TabPane label="标签一">
              <Row type="flex" :gutter="16" justify="space-between">
                <Card v-for="(item,index) in 3">
                  <div style="text-align:center">
                    <h6>111111111111111111111111111111111111111111111</h6>
                    <Button @click="modal=true">123</Button>
                  </div>
                </Card>
              </Row>
            </TabPane>
            <TabPane label="标签二">
              <Row type="flex" :gutter="16" justify="space-between">
                <Card v-for="(item,index) in 3">
                  <div style="text-align:center">
                    <h6>111111111111111111111111111111111111111111111</h6>
                    <Button @click="modal=true">123</Button>
                  </div>
                </Card>
              </Row>
            </TabPane>
            <TabPane label="标签三">
              <Row type="flex" :gutter="16" justify="space-between">
                <Card v-for="(item,index) in 3">
                  <div style="text-align:center">
                    <h6>111111111111111111111111111111111111111111111</h6>
                    <Button @click="modal=true">123</Button>
                  </div>
                </Card>
              </Row>
            </TabPane>
            <TabPane label="标签三">
              <Row type="flex" :gutter="16" justify="space-between">
                <Card v-for="(item,index) in 3">
                  <div style="text-align:center">
                    <h6>111111111111111111111111111111111111111111111</h6>
                    <Button @click="modal=true">123</Button>
                  </div>
                </Card>
              </Row>
            </TabPane>
            <TabPane label="标签三">
              <Row type="flex" :gutter="16" justify="space-between">
                <Card v-for="(item,index) in 3">
                  <div style="text-align:center">
                    <h6>111111111111111111111111111111111111111111111</h6>
                    <Button @click="modal=true">123</Button>
                  </div>
                </Card>
              </Row>
            </TabPane>
          </Tabs>
          </Col>
        </Row>
      </Content>
    </section>
    <section id="choose">
      <Content class="contentPadding">
        <h3>视频教程</h3>
        <Row type="flex" :gutter="12" justify="space-between">
          <Col v-for="(item,index) in 2" span="12">
          <Card>
            <div style="text-align:center">
              <img src="">
              <h6 v-for="(item,index) in 6">智贷科技智贷科技智贷科技智贷科技智贷科技智贷科技智贷科技智贷科技智贷科技</h6>
            </div>
          </Card>
          </Col>
        </Row>
      </Content>
    </section>
  </Layout>
  <Footer></Footer>
  <Modal v-model="modal" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
    <p>Content of dialog</p>
    <p>Content of dialog</p>
    <p>Content of dialog</p>
  </Modal>
</div>
</template>
<script>
import Header from '#/header'
import Footer from '#/footer'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      modal: false,
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    ok() {
      this.$Message.info("点击了好")
    },
    cancel() {
      this.$Message.info("点击了否")
    }
  },
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide
  },
  mounted() {
    console.log(this.$route.query);
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
