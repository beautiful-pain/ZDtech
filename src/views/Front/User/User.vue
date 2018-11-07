<!-- 登录&注册&找回密码 -->
<template>
<div class="layout">
  <!-- <Header></Header> -->
  <Layout>
    <section id="introduce">
      <Content class="contentPadding">
        <Row type="flex" justify="center">
          <Col>
          <img class="UserLogo"src="../../../assets/icon/UserLogo.png" alt="asd" title="智贷科技">
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col :xs="22" :sm="14" :md="14" :lg="10">
          <Card style="width:100%">
            <div class="head">
              <div class="circle">
                <img src="../../../assets/icon/UserHeadLogo.png" title="智贷科技">
              </div>
            </div>
            <Tabs value="name2" :animated="false">
              <TabPane label="登录智贷科技" name="name1">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="填写手机号">
                    </Input>
                  </FormItem>
                  <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="填写密码">
                    </Input>
                  </FormItem>
                  <FormItem>
                    <drag-verify :width="width" :height="height" :text="text" :success-text="successText" :background="background" :progress-bar-bg="progressBarBg" :completed-bg="completedBg" :handler-bg="handlerBg" :handler-icon="handlerIcon" :text-size="textSize" :success-icon="successIcon"
                      :circle="isCircle" @passcallback="haha"></drag-verify>
                  </FormItem>
                  <FormItem>
                    <Button ref="login" type="primary" long :disabled="loginDis">登录</Button>
                  </FormItem>
                  <FormItem>
                    <Row type="flex" justify="space-between">
                      <Col>
                      <span><Checkbox v-model="autoLogin">下一次自动登录</Checkbox></span>
                      </Col>
                      <Col>
                      <span>忘记密码?</span>
                      </Col>
                    </Row>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="注册智贷科技" name="name2">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="输入真实姓名">
                    </Input>
                  </FormItem>
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="输入手机号">
                    </Input>
                  </FormItem>
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="输入验证码">
                    </Input>
                  </FormItem>
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="输入密码">
                    </Input>
                  </FormItem>
                  <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="确认密码">
                    </Input>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" long disabled>注册</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="找回密码" name="name3">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                  <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="输入手机号">
                    </Input>
                  </FormItem>
                  <FormItem>
                    <drag-verify :width="width" :height="height" :text="text" :success-text="successText" :background="background" :progress-bar-bg="progressBarBg" :completed-bg="completedBg" :handler-bg="handlerBg" :handler-icon="handlerIcon" :text-size="textSize" :success-icon="successIcon"
                      :circle="isCircle" @passcallback="haha"></drag-verify>
                  </FormItem>
                  <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="输入验证码">
                    </Input>
                  </FormItem>
                  <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="输入新密码">
                    </Input>
                  </FormItem>
                  <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="确认新密码">
                    </Input>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" long disabled>重置密码</Button>
                  </FormItem>
                </Form>
              </TabPane>
            </Tabs>
          </Card>
          </Col>
        </Row>
      </Content>
    </section>
  </Layout>

</div>
</template>

<script>
import Header from '#/header'
import Footer from '#/footer'
import dragVerify from 'vue-drag-verify'
import {
  getToken,
  setToken
} from '@/libs/util'
export default {
  data() {
    return {
      handlerIcon: "fa  fa-angle-double-right",
      successIcon: "fa fa-check",
      background: "#e5e5e5",
      progressBarBg: "#e74c3c",
      completedBg: "#ff9085",
      handlerBg: "#fff",
      text: "请将滑块拖动到右侧",
      successText: "验证成功",
      width: 0,
      height: 40,
      textSize: "16px",
      isCircle: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [{
          required: true,
          message: '智贷科技: 用户名不能为空!',
          trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '智贷科技: 密码不能为空!',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '智贷科技: 密码长度不能低于6位!',
            trigger: 'blur'
          }
        ]
      },
      autoLogin: false,
      loginDis: true,
    }
  },
  methods: {
    haha() {
      this.loginDis = false
    }
  },
  components: {
    Header,
    Footer,
    dragVerify,
  },
  mounted() {
    this.width = this.$refs.login.$el.clientWidth
  }
}
</script>

<style scoped lang="less">
@import './index.less';
</style>
