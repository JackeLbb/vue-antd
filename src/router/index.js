import App from '../App.vue'
import frontendRoutes from './frontend.js'

const index = r => require.ensure([], () => r(require('../page/index.vue')), 'index')

const routes = [{
  path: '',
  component: App,
  children: [{
    path: '/',
    name: 'index',
    component: index,
    children: frontendRoutes
  }]
}]

export default routes