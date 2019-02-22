<template>
  <div class="j-anchor">
    <a-anchor showInkInFixed :getContainer="defineAnthorTargetWrapper" :offsetTop="anchorOffsetTop" :offsetBottom="anchorOffsetBottom" :affix="true" @click="handleClick" v-if="anchorList&&anchorList.length > 0">
      <a-anchor-link v-for="(item, index) in anchorList" :key="index" :href="`#${item.href}`" :title="item.title">
        <template v-if="item.childList&&item.childList.length>0">
          <a-anchor-link v-for="childItem in item.childList" :key="childItem.href" :href="`#${childItem.href}`" :title="childItem.title">
          </a-anchor-link>
        </template>
      </a-anchor-link>
    </a-anchor>
  </div>
</template>

<script>
/**
  * @name j-anchor (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <j-anchor></j-anchor>
  */

export default {
  name: 'j-anchor',
  components: {},
  props: {
    anchorList: {
      default: function () {
        return []
      },
      type: Array
    }
  },
  data() {
    return {
      anchorOffsetTop: 64,
      anchorOffsetBottom: 64,
    }
  },
  created() { },
  mounted() {
  },
  methods: {
    handleClick(e, link) {
      e.preventDefault();
      console.log(link);
      this.$emit('goAnchor', link)
    },
    defineAnthorTargetWrapper() {

      this.$emit('getAnthorTarget')
      // return document.getElementById('toTop')
    },
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.j-anchor {
  width: 150px;
  position: fixed;
  right: 10px;
  top: 100px;
  bottom: 250px;
}
</style>
