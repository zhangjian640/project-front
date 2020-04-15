<template>

<div class="layui-container fly-marginTop">
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
        <li>
          <router-link :to="{name: 'login'}">登入</router-link>
        </li>
        <li class="layui-this">找回密码</li>
      </ul>
      <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
          <div class="layui-form layui-form-pane"  style="margin-top: 30px;">
            <form>
              <div class="layui-form-item">
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
              <div>
                <button class="layui-btn" @click="submit">提交</button>
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
import { required, email } from 'vuelidate/lib/validators'
import { getCaptcha, forget } from '@/api/login'
const mustBeFour = (value) => value.length === 4
export default {
  data () {
    return {
      username: '',
      code: '',
      svg: ''
    }
  },
  validations: {
    username: {
      required,
      email
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
    setCode (value) {
      this.code = value
      this.$v.code.$touch()
    },
    async submit() {
      const res = await forget({
        username: this.username,
        code: this.code
      })
      if (res.code === 200) {
        console.log(res.data)
      }
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
