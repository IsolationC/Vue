import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Comp2 from '@/components/Comp2'
import Compa from '@/components/Compa'
import Error from '@/components/Error404'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/test/:name/:age',
      name: 'Test',
      component: Test,
      children:[{
        path:'/test/compa',
        name: 'Compa',
        component: Compa
      }]
    },
    {
      path:'/comp2',
      name: 'Comp2',
      component: Comp2,
      alias:'/comp3',
      // beforeEnter(to,from,next){
      //   console.log(to);
      //   console.log(from);
      //   next(true);
      // }
    },
    {
      path:'/home',
      redirect:'/'
    },{
      path:'/cdx/:name/:age',
      redirect:'/test/:name/:age'
    },{
      path:'*',
      component:Error
    },{
      path: '/count',
      name: 'Count',
      component:{
        a: Count
      }
    }
  ]
})
