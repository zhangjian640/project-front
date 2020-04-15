<template>
<div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{name: 'register'}">注册</router-link>
          </li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form action="">
                <div class="layui-form-item" :class="{'form-group--error': $v.username.$error}">
                  <label class="layui-form-label">邮箱</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      v-model.trim="username"
                      @input="setName($event.target.value)"
                      placeholder="请输入邮箱"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div v-if="!$v.username.required" class="layui-form-mid error">邮箱不能为空</div>
                  <div v-if="!$v.username.email" class="layui-form-mid error">邮箱格式错误</div>
                </div>
                <div class="layui-form-item" :class="{'form-group--error': $v.password.$error}">
                  <label class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      v-model="password"
                      @input="setPassword($event.target.value)"
                      placeholder="请输入密码"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div v-if="!$v.password.required" class="layui-form-mid error">密码不能为空</div>
                  <div v-if="!$v.password.minLength" class="layui-form-mid error">密码长度不能小于4位</div>
                </div>
                <div class="layui-form-item" :class="{'form-group--error': $v.code.$error}">
                  <label class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      v-model="code"
                      @input="setCode($event.target.value)"
                      placeholder="请输入验证码"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div v-if="!$v.code.required" class="layui-form-mid error">验证码不能为空</div>
                  <div v-if="!$v.code.mustBeFour" class="layui-form-mid error">验证码长度为4</div>
                  <div class="layui-form-mid svg" v-html="svg" @click="getCaptchaData"></div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-submit lay-filter="formDemo">登录</button>
                  <router-link class="forget-btn" :to="{name: 'forget'}">忘记密码</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { getCaptcha } from '@/api/login'
const mustBeFour = (value) => value.length === 4
export default {
  name: 'Login',
  data () {
    return {
      svg: '',
      username: '',
      password: '',
      code: ''
    }
  },
  validations: {
    username: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    },
    code: {
      required,
      mustBeFour
    }
  },
  created () {
    this.getCaptchaData()
  },
  methods: {
    async getCaptchaData () {
      const res = await getCaptcha()
      if (res.code === 200) {
        this.svg = res.data
      }
    },
    setName (value) {
      this.username = value
      this.$v.username.$touch()
    },
    setPassword (value) {
      this.password = value
      this.$v.password.$touch()
    },
    setCode (value) {
      this.code = value
      this.$v.code.$touch()
    }
  }
}
</script>

<style lang="scss" scoped>
  .layui-container{
    background-color: #fff;
    input{
      width: 190px;
    }
    .forget-btn{
      margin-left: 10px;
      &:hover{
        color: #009688;
      }
    }
    .svg{
      height: 38px;
      margin-top: -10px;
      cursor: pointer;
    }
  }
  .error{
    display: none;
    color: red;
  }
  .form-group--error{
    .error{
      display: block;
    }
  }
</style>
