import Vue from 'vue'
import VueRouter from 'vue-router'
import user from './components/user/user.vue'
import '../src/assets/commont.less'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/', redirect: '/user' }, { path: '/user', component: user }]
})
export default router
