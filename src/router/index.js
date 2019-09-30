import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['@com/home/home'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        isShowHeader: true,
        isShowFooter: true,
        title: "首页"
      }
    }
  ]
})
