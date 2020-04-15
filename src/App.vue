<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from '@/components/Header.vue'
import MyFooter from '@/components/Footer.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss">
@import '~@/assets/layui/css/layui.css';
@import '~@/assets/css/global.css';
@import '~@/assets/layui/css/modules/layer/default/layer.css';
</style>
