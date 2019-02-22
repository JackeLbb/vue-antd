<template>
  <div class="home" id="anchor-wrapper">
    <page-content>
      <template slot="header">
        Ant Design of Vue
      </template>
      <template slot="desc">
        <span class="desc-text">这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。</span>
        <div class="desc-pic">
          <img width="150" :src="antdLogoUrl" alt="antd-logo">
          <span>+</span>
          <img width="150" :src="vueLogoUrl" alt="vue-logo">
        </div>
      </template>
      <div class="content-wrapper">
        <section class='page-floor' v-for="(item, index) in floorList" :key="index">
          <h2 :class="item.title === '使用 npm 或 yarn 安装'" class="floor-title">
            {{item.title}}
            <a :id="item.title" :ref="item.title" class="anthor-link" :href="`#${item.title}`">#</a>
          </h2>
          <div class="floor-container" v-if="item.type === 'list'">
            <ul class="floor-container__list" v-for="(liItem, liIndex) in item.liList" :key="liIndex">
              <li class="floor-container__list-wrapper" v-html="liItem"></li>
            </ul>
          </div>

          <div class="floor-container" v-else-if="item.title === '版本'">
            你可以订阅：<router-link :to="{path: 'https://github.com/vueComponent/ant-design-vue/releases.atom'}">https://github.com/vueComponent/ant-design-vue/releases.atom</router-link> 来获得稳定版发布的通知。
          </div>

          <div class="floor-container" v-else-if="item.title === '使用 npm 或 yarn 安装'">
            <h3 class="floor-subtitle" id="">使用 npm 或 yarn 安装</h3>
          </div>
        </section>
      </div>
    </page-content>
    <!-- 右侧锚点导航 -->
    <j-anchor @goAnchor="goAnchor" @getAnthorTarget="getAnthorTarget" :anchor-list="anchorList" />
  </div>
</template>

<script>
/**
  * @name p-home (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <p-home></p-home>
  */
import JAnchor from '@/components/common/JAnchor/index.vue'
import PageContent from '../components/PageContent/index.vue'

import AntdLogo from '@/assets/images/antd-logo.svg'
import VueLogo from '@/assets/images/vue-logo.png'


export default {
  name: 'antdHome',
  components: {
    'j-anchor': JAnchor,
    'page-content': PageContent
  },
  props: {},
  data() {
    return {
      floorList: [
        {
          title: '特性',
          isSubtitle: false,
          type: 'list',
          liList: [
            '提炼自企业级中后台产品的交互语言和视觉风格。',
            '开箱即用的高质量 Vue 组件。',
            '共享<a href="http://ant-design.gitee.io/docs/spec/introduce-cn">Ant Design of React</a>设计工具体系。'
          ]
        },
        {
          title: '支持环境',
          isSubtitle: false,
          type: 'list',
          liList: [
            '现代浏览器和 IE9 及以上（需要 <a href="https://vue.ant.design/docs/vue/getting-started-cn/#兼容性">Ant Design of React</a>）。',
            '支持服务端渲染。'
          ]
        },
        {
          title: '版本',
          isSubtitle: false,
          type: 'other'
        },
        {
          title: '安装',
          isSubtitle: false,
          type: 'other'
        },
        {
          title: '使用 npm 或 yarn 安装',
          isSubtitle: true,
          type: 'other'
        },
        {
          title: '浏览器引入',
          isSubtitle: true,
          type: 'other'
        },
        {
          title: '示例',
          isSubtitle: false,
          type: 'other'
        },
        {
          title: '按需加载',
          isSubtitle: true,
          type: 'other'
        },
        {
          title: '链接',
          type: 'list',
          liList: [
            '<a href="https://vue.ant.design/docs/vue/introduce/">Ant Design of Vue官方首页</a>',
            '<a href="https://ant.design/index-cn">Ant Design React</a>',
            '<a href="https://vue.ant.design/docs/vue/introduce-cn/">组件库</a>',
            '<a href="https://vue.ant.design/docs/vue/changelog-cn/">更新日志</a>',
            '<a href="https://codesandbox.io/s/2wpk21kzvr">CodeSandbox 模板 </a>for bug reports',
            '<a href="https://vue.ant.design/docs/vue/customize-theme-cn/">定制主题</a>',
            '<a href="https://vue.ant.design/docs/vue/faq-cn/">常见问题</a>',
            '<a href="https://vue.ant.design/docs/vue/sponsor-cn/">支持我们（Ant Design of Vue）</a>',
            '<a href="https://github.com/vueComponent/ant-design-vue-awesome">Awesome Ant Design</a>',
          ]
        },
        {
          title: '如何贡献',
          type: 'other'
        },
        {
          title: '关于ant-design-vue',
          type: 'other'
        },
        {
          title: '特别感谢',
          type: 'other'
        }
      ],
      anchorList: [
        {
          title: '特性',
          href: '特性',
          childList: null
        },
        {
          title: '支持环境',
          href: '支持环境',
          childList: null
        },
        {
          title: '版本',
          href: '版本',
          childList: null
        },
        {
          title: '安装',
          href: '安装',
          childList: null
        },
        {
          title: '使用 npm 或 yarn 安装',
          href: '使用 npm 或 yarn 安装',
          childList: null
        },
        {
          title: '浏览器引入',
          href: '浏览器引入',
          childList: null
        },
        {
          title: '示例',
          href: '示例',
          childList: null
        },
        {
          title: '按需加载',
          href: '按需加载',
          childList: null
        },
        {
          title: '链接',
          href: '链接',
          childList: null
        },
        {
          title: '如何贡献',
          href: '如何贡献',
          childList: null
        },
        {
          title: '关于ant-design-vue',
          href: '关于ant-design-vue',
          childList: null
        },
        {
          title: '特别感谢',
          href: '特别感谢',
          childList: null
        }
      ],
      antdLogoUrl: AntdLogo,
      vueLogoUrl: VueLogo
    }
  },
  created() { },
  mounted() {
    console.log('this.$route', this.$route)
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;   //这里的判断是为了兼容各个浏览器
      console.log('TCL: handleScroll -> scrollTop', scrollTop)
      console.log('TCL: handleScroll -> offsetTop', offsetTop)
      // for (let [index, item] of this.anchorList.entries()) {
      //   console.log(document.getElementById(item.href).offsetTop)
      // }
      // problemTop = this.$refs.problem.offsetTop;
      // claimsTop = this.$refs.claims.offsetTop;
      // if (scrollTop > offsetTop) {
      //   this.searchBarFixed = true;
      // } else {
      //   this.searchBarFixed = false;
      // }
      // if (scrollTop >= problemTop && scrollTop < claimsTop) {
      //   this.current = 1;
      // } else if (scrollTop >= claimsTop) {
      //   this.current = 2;
      // } else {
      //   this.current = 0;
      // }
      // console.log(offsetTop)
    },
    getAnthorTarget() {
      return document.getElementById('anchor-wrapper')
    },
    goAnchor(params) {
      this.$nextTick(() => {
        document.getElementById(params.href.split('#')[1]).scrollIntoView();
      })
      // var anchor = this.$el.querySelector(params.title)
      // document.body.scrollTop = anchor.offsetTops
      // this.$el.querySelector(params.title).scrollIntoView()
      // console.log('TCL: goAnchor -> params', params)
      // let scrollDom = params.href.split('#')[1]
      // document.getElementById(scrollDom).click()
      // console.log('TCL: goAnchor -> document.getElementById(scrollDom)', document.getElementById(scrollDom))
      // // this.$refs[scrollDom][0].click()
      // console.log('TCL: goAnchor -> this.$refs[scrollDom][0]', this.$refs[scrollDom][0])
      // this.$router.push({ path: this.$route.path + params.href })
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
@import "./../../style/content-common.scss";
.home {
  .desc-text {
    margin: 1em 0;
    display: block;
  }
  .desc-pic {
    span {
      font-size: 30px;
      color: #aaa;
      margin: 0 20px;
    }
  }
}
</style>
