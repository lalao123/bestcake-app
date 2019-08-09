<template>
    <div class="home">
       <!-- <Loading></Loading> -->
       <Slider :banner="banner"></Slider>
    
       <List :list="list" dataName="home"></List>
    </div>
</template>

<script>

import  Slider from '../components/Slider'
// import Loading from "./components/Loading"
import  List from '../components/List'

export default {
    name:'home',
    data(){
        return{
            list:[],
            banner:[]
        }
    },

    components:{Slider,List},
    mounted(){
        // console.log(this.$axios)
        axios({
            url:'/api/home',
            // params:{_page:1,_limit:10}
        }).then(
         
         res=>{
             this.list = res.data.data
         }
        )
        axios({
            url:'/api/home',
            params:{_page:1,_limit:10}
        }).then(
            res=>{
                this.list = res.data.data
            }
        )
        axios({
            url:'/api/banner',
            params:{_pagr:1,_limit:3}
        }).then(
           res=>this.banner = res.data.data
        )
    }
}
</script>

