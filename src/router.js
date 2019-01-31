import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import globalSettings from './views/globalSettings'
import tableList from './views/tableList'
import tableAdd from './views/tableAdd'
import tableDelete from './views/tableDelete'
import categoryList from './views/categoryList'
import categoryAdd from './views/categoryAdd'
import categoryDelete from './views/categoryDelete'
import categoryUpdate from './views/categoryUpdate'
import dishList from './views/dishList'
import dishAdd from './views/dishAdd'
import dishDelete from './views/dishDelete'
import dishUpdate from './views/dishUpdate'
import OrderList from './views/OrderList'
import Security from './views/Security'


Vue.use(Router)

export default new Router({
  //整个项目的路由词典--访问路径<=>试图组件
  routes: [
    {path:'/',redirect:'/login'},  //组建的重定向
    {path:'/login',component:Login},
    {
      path:'/main',
      component:Main,
      children:[
        //子路由加了‘/’表示访问时：http://127.0.0.1:8091/#/security,不加/时访问要加http://127.0.0.1:8091/#/main/security
        {path:'/',redirect:'/table/list'},
        {path:'/settings',component:globalSettings}, 
        {path:'/table/list',component:tableList},
        {path:'/table/add',component:tableAdd},
        {path:'/table/delete',component:tableDelete},
        {path:'/category/list',component:categoryList},
        {path:'/dish/list',component:dishList},
        {path:'/dish/add',component:dishAdd},
        {path:'/dish/delete',component:dishDelete},
        {path:'/dish/update',component:dishUpdate},
        {path:'/order/list',component:OrderList},
        {path:'/security',component:Security},
    ]},
    {path:'*',component:NotFound}
  ]
})
