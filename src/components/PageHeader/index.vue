<template>
  <div class="page-header">
    <vue-logo class="header-left ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-4"></vue-logo>
    <div class="header-right ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-19 ant-col-xl-19 ant-col-xxl-20">
      <a-auto-complete class="global-search search-box" size="small" style="width: 100%" @select="onSelect" @search="handleSearch" placeholder="input here" optionLabelProp="text">
        <template slot="dataSource">
          <a-select-option v-for="item in dataSource" :key="item.category" :text="item.category">
            {{item.query}} 在
            <a :href="`https://s.taobao.com/search?q=${item.query}`" target="_blank" rel="noopener noreferrer">
              {{item.category}}
            </a>
            区块中
            <span className="global-search-item-count">约 {{item.count}} 个结果</span>
          </a-select-option>
        </template>
        <a-input>
          <a-icon :style="'margin-left: -35px'" slot="prefix" class="search-icon" type="search" />
        </a-input>
      </a-auto-complete>
    </div>
  </div>
</template>

<script>
/**
  * @name page-header (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <page-header></page-header>
  */

import Logo from '@/assets/images/logo.png'
import LogoComponent from './../common/logo/logo.vue'

export default {
  name: 'page-header',
  components: {
    'vue-logo': LogoComponent
  },
  props: {},
  data() {
    return {
      logoUrl: Logo,
      dataSource: [],
    }
  },
  created() { },
  mounted() { },
  methods: {
    onSelect(value) {
      // eslint-disable-next-line no-console
      console.log('onSelect', value);
    },
    handleSearch(value) {
      this.dataSource = value ? this.searchResult(value) : []
    },
    getRandomInt(max, min = 0) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    searchResult(query) {
      return (new Array(this.getRandomInt(5))).join('.').split('.')
        .map((item, idx) => ({
          query,
          category: `${query}${idx}`,
          count: this.getRandomInt(200, 100),
        }));
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.page-header {
  height: 64px;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 10;
  max-width: 100%;
  box-shadow: 0 2px 8px #f0f1f2;
  .header-left {
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
  .header-right {
    .search-box {
      margin: 22px auto 0;
      height: 22px;
      padding-left: 16px;
      .search-icon {
        color: #d9d9d9;
      }
      // #d9d9d9
    }
  }
}
</style>
