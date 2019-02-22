<template>
  <a-layout class="page-wrapper">
    <!-- 头部 Header -->
    <page-header :style="{background: '#fff'}" />

    <!-- 主内容 Body -->
    <a-layout :style="{paddingTop: '40px', background: '#fff', height: '100vh', overflow: 'hidden'}">

      <!-- 左侧导航 SideMenu -->
      <page-side />
      <!-- <router-view name="pageSide" /> -->

      <!-- 右侧主区域 PageMain -->
      <a-layout class="page-main" id="toTop">

        <!-- 主内容 Main -->
        <a-layout-content :style="{ overflow: 'initial' }">
          <router-view />
        </a-layout-content>

        <!-- 底部版权 Footer -->
        <a-layout-footer :style="{ textAlign: 'center' }">
          Ant Design Vue ©2019 Created by Jacke
        </a-layout-footer>
      </a-layout>
    </a-layout>

    <!-- 回到顶部按钮模块 goTop -->
    <div id="components-back-top-demo-custom">
      <a-back-top :target="listenScrollBar" :visibilityHeight="visibilityHeight" />
    </div>
  </a-layout>
</template>

<script>
/**
  * @name page-wrapper (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <page-wrapper></page-wrapper>
  */
import PageHeader from '@/components/PageHeader/index.vue'
import PageSide from '@/page/components/PageSide/index.vue'

export default {
  name: 'page-wrapper',
  components: {
    'page-header': PageHeader,
    'page-side': PageSide,
  },
  props: {},
  data() {
    return {
      visibilityHeight: 400,
    }
  },
  created() { },
  mounted() {
  },
  methods: {
    listenScrollBar() {
      return document.getElementById('toTop')
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.page-wrapper {
  background: #fff;
  .page-side,
  .page-main {
    overflow: hidden;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
    }
    &:hover {
      overflow-y: auto;
    }
  }
  .page-main {
    margin-left: 300px;
    height: 100%;
    display: block;
    background: #fff;
  }
  .logo-component {
    height: 64px;
    z-index: 9;
    background: #fff;
    width: 300px;
  }
}
</style>
