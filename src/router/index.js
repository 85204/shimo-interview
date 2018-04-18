import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import City from '@/components/City'
import County from '@/components/County'
import Street from '@/components/Street'

Router.prototype.goBack = function () {
  this.isBack = true
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/County',
      name: 'County',
      component: County
    },
    {
      path: '/Street',
      name: 'Street',
      component: Street
    }
  ]
})
