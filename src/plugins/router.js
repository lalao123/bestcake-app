//使用模块化编程，导入vue和vueRouter，要调用Vue.use(VueRouter)
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//定义路由，从其他文件 import进来
import Home from '../pages/Home'
import Follow from '../pages/Follow'
import Column from '../pages/Column'
import User from '../pages/User'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Detail from '../pages/Detail'
import Error from '../pages/Error'
import Echarts from '../pages/Echarts'
import Shopcart from '../components/Shopcart'

//定义路由，每个路由应该映射一个组件，其中component可以使通过vue.extend()创建的组件构造器，或，只是一个组件配置对象
let routes =[
    {path:'/Home',component:Home},
    {path:'/Follow',component:Follow},
    {path:'/Column',component:Column},
    {path:'/User',component:User},
    {path:'/Login',component:Login},
    {path:'/Reg',component:Reg},
    {path:'/Echarts',component:Echarts},
    // {path:'/Detail/:id',component:Detail},
    {name:'detail',path:'/detail/:id',component:Detail},
    {path:'/',redirect:'/home'},
    {path:'*',component:Error},
    {path:'/Shopcart',component:Shopcart}
];

//创建router实例，传router配置
let router = new VueRouter({routes});

//注入路由器，其他组件可以通过this.$router访问路由器，也可以通过this.$router访问当前路由
export default router;