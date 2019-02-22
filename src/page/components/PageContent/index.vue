<template>
  <div class="page-content">
    <div class="page-content__header">
      <h2 class="page-content__header-title">
        <slot name="header" />
      </h2>
      <p class="page-content__header-desc">
        <slot name="desc" />
      </p>
    </div>
    <div class="page-content__container">
      <slot />
    </div>
  </div>
</template>

<script>
/**
  * @name page-content (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <page-content></page-content>
  */


export default {
  name: 'page-content',
  components: {},
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
.page-content {
  padding: 0 170px 144px 64px;
  background: #fff;
  min-height: 500px;
  overflow: hidden;
  position: relative;
  &__header {
    &-title {
      font-weight: 500;
      font-size: 30px;
      color: #000;
      margin: 8px 0 20px;
      font-family: Avenir, "Chinese Quote", -apple-system, BlinkMacSystemFont,
        "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
        "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol";
      line-height: 38px;
    }
    &-desc {
      margin: 1em 0;
      color: #314659;
      font-size: 14px;
      line-height: 2;
    }
  }
}
</style>
