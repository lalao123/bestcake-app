<template>
  <div id="app">
    <Loading v-show="$root.$data.bLoading"></Loading>
    <!-- <Home></Home> -->
    <Header v-show="$root.$data.bNav"></Header>
    <!-- 路由匹配到的组件将渲染在这里 （路由出口）-->
    <router-view></router-view>
    <Footer v-show="$root.$data.bFoot"></Footer>
    <!-- <Column></Column> -->
    <!-- <Detail></Detail> -->
    <!-- <Login></Login> -->
    <!-- <User></User> -->
    <!-- <Reg></Reg> -->
    <!-- <Error></Error> -->



  </div>
</template>

<script>
import Loading from "./components/Loading"
// import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Echarts from "./pages/Echarts"
// import Home from "./pages/Home"
// import Column from "./pages/Column"
// import Detail from "./pages/Detail"
// import Login from "./pages/Login"
// import Reg from "./pages/Reg"
// import Error from "./pages/Error"
// import User from './pages/User'
 
 import Swipe from 'swipe';
 import $ from 'jquery';







export default {
  name: 'app',
  //服用组件时，对路由参数的变化作出相应，使用watch检测$router对象
  watch:{
    $route:{
      handler({path}){
       console.log('app',path)

       if(/home|follow|Column/.test(path)){
          this.$root.$data.bNav = true;
          this.$root.$data.bFoot = true;
       }
       if(/user/.test(path)){
          this.$root.$data.bNav = false;
          this.$root.$data.bFoot = true;
       }
       if(/Login|Reg|detail/.test(path)){
          this.$root.$data.bNav = false;
          this.$root.$data.bFoot = false;
       }
      },
      immediate:true
    }
  },
  components: {
     Header,Footer,Loading
    
   
  }
  // updated(){
  //   console.log('app',$('.banner')[0])
  //   new Swipe($('.banner')[0],{
  //     auto:2000,
  //     continuous:true,
  //     stopPropation:true,
  //     callback:function (index,element){
  //       $('.banner ol li').removeClass('active');
  //       $('.banner ol li').eq(index).addClass('active');
  //     }
  //   })
  // },
}
</script>


