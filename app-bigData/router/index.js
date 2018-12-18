import Vue from 'vue'
import Router from 'vue-router'
import index from 'app-bigData/views/index'
import main from 'app-bigData/views/roadManagement/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
        path:'',
        component:main
      }]
    }
  ]
})
