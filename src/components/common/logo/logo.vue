<template>
  <div class="vue-logo">
    <router-link to="/index" class="vue-logo__link">
      <img :src="logoUrl" alt="ant-design-vue">
      <span style="color: black;font-size: 16px;font-weight: 400;">Ant Design Vue</span>
    </router-link>
  </div>
</template>

<script>
/**
  * @name vue-logo (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <vue-logo></vue-logo>
  */
import Logo from '@/assets/images/logo.png'

export default {
  name: 'vue-logo',
  components: {},
  props: {},
  data() {
    return {
      logoUrl: Logo,
    }
  },
  created() { },
  mounted() { },
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.vue-logo {
  height: 100%;
  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding-left: 40px;
    img {
      height: 32px;
      margin-right: 16px;
    }
  }
}
</style>
