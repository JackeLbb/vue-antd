<template>
  <div class="page-side">
    <user-info />
    <menu-list />
  </div>
</template>

<script>
/**
  * @name page-side (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <page-side></page-side>
  */

import MenuList from './MenuList/'
import UserInfo from './UserInfo/'

export default {
  name: 'page-side',
  components: {
    'user-info': UserInfo,
    'menu-list': MenuList
  },
  props: {},
  data() {
    return {

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
.page-side {
  position: absolute;
  height: calc(100vh - 40px);
  width: 300px;
}
</style>
