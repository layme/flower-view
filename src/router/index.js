import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import room from '@/components/yororoom'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/room',
          name: 'room',
          component: room
        },{
          path: '/list0',
          name: 'list',
          component: list
        },{
          path: '/list1',
          name: 'list',
          component: list
        },{
          path: '/list2',
          name: 'list',
          component: list
        },{
          path: '/list3',
          name: 'list',
          component: list
        },{
          path: '/list4',
          name: 'list',
          component: list
        }
      ]
    }
  ]
})
