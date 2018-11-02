import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Por from "@/views/por"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Por',
      component: Por
    }
  ]
})
