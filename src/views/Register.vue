<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><a href="/#/login">登录</a></li>
          <li class="layui-this"><a href="/#/register">注册</a></li>
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
                  <div class="layui-form-mid">将会成为您唯一的登入名</div>
                </div>
                <div class="layui-form-item" :class="{'form-group--error': $v.nickname.$error}">
                  <label class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      v-model="nickname"
                      @input="setNickname($event.target.value)"
                      placeholder="请输入昵称"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div v-if="!$v.nickname.required" class="layui-form-mid error">昵称不能为空</div>
                  <div v-if="!$v.nickname.minLength" class="layui-form-mid error">昵称长度不能小于4位</div>
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
                  <div v-if="!$v.password.between" class="layui-form-mid error">6到16个字符</div>
                </div>
                <div class="layui-form-item" :class="{'form-group--error': $v.conformPassword.$error}">
                  <label class="layui-form-label">确认密码</label>
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      v-model="conformPassword"
                      @input="setConformPassword($event.target.value)"
                      placeholder="请输入密码"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div v-if="!$v.conformPassword.sameAsPassword" class="layui-form-mid error">确认密码与密码不一致</div>
                </div>
                <div class="layui-form-item" :class="{'form-group--error': $v.code.$error}">
                  <label class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      v-model="$v.code.$model"
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
import { required, minLength, email, sameAs, between } from 'vuelidate/lib/validators'
import { getCaptcha } from '@/api/login'
const mustBeFour = (value) => value.length === 4
export default {
  name: 'Register',
  data () {
    return {
      svg: '',
      username: '',
      nickname: '',
      password: '',
      conformPassword: '',
      code: ''
    }
  },
  validations: {
    username: {
      required,
      email
    },
    nickname: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      between: between(6, 16)
    },
    conformPassword: {
      sameAsPassword: sameAs('password')
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
    setNickname (value) {
      this.nickname = value
      this.$v.nickname.$touch()
    },
    setPassword (value) {
      this.password = value
      this.$v.password.$touch()
    },
    setConformPassword (value) {
      this.conformPassword = value
      this.$v.conformPassword.$touch()
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
