<template>
  <a-menu theme="light" class="menu-list" mode="inline" :getContainer="defineAnthorTarget" :defaultSelectedKeys="[activeRouter]">
    <a-menu-item :key="item.routerName" v-for="item in menuRouterList" @click="changePage(item.routerName)">
      <span class="nav-text">{{item.menuName}}</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
/**
  * @name menu-list (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author Jacke
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <menu-list></menu-list>
  */

export default {
  name: 'menu-list',
  components: {},
  props: {},
  data() {
    return {
      activeRouter: 'home',
      menuRouterList: [
        {
          menuName: 'Ant Design of Vue',
          routerName: 'home'
        },
        {
          menuName: '快速上手',
          routerName: 'gettingStart'
        }
      ]
    }
  },
  created() { },
  mounted() {
    this.changePage()
  },
  methods: {
    defineAnthorTarget() {
      return document.getElementById('#toTop')
    },
    changePage(routerName) {
      if (routerName) {
        this.$router.push(routerName)
        this.activeRouter = routerName
      } else {
        this.$router.push('home')
        this.activeRouter = 'home'
      }
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.menu-list {
}
</style>
