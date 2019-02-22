// const PageSide = r => require.ensure([], () => r(require('../page/components/PageSide/index.vue')), 'PageSide')
const home = r => require.ensure([], () => r(require('../page/home/index.vue')), 'home')
const gettingStart = r => require.ensure([], () => r(require('../page/gettingStart/index.vue')), 'gettingStart')


const frontendRoutes = [{
  path: 'home',
  name: 'home',
  component: home,
}, {
  path: 'gettingStart',
  name: 'gettingStart',
  component: gettingStart
  // components: {
  //   default: gettingStart,
  //   // pageSide: PageSide,
  // },
}]

export default frontendRoutes