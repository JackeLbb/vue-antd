<template>
  <div class="author-info">
    <div class="author-name">Jacke</div>
    <img :src="avatarUrl" alt="Jacke">
  </div>
</template>

<script>
/**
  * @name author-info (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <author-info></author-info>
  */
import Avatar from '@/assets/images/avator1.jpg'

export default {
  name: 'author-info',
  components: {},
  props: {},
  data() {
    return {
      avatarUrl: Avatar,
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
.author-info {
  padding-left: 24px;
  padding-bottom: 15px;
  .author-name {
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  img {
    width: 85px;
  }
}
</style>
