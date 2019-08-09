<template>
    <div class="banner">
       <ul class="clearfix">
           <router-link
            v-for="item of banner"
            :key="item._id"
            tag="li"
            :to="'/detail/'+item._id + '?dataName=banner'"
           >
           <img src="/images/img_1.jpg" alt="">
            <div class="text-box">
                <h2>{{item.content}}</h2>
                <!-- <p>快去买买买 / 晴</p> -->
            </div>
           </router-link>
          
       </ul>
    </div>
</template>
<script>
import Swipe from 'swipe';
import $ from 'jquery';
export default {
    props:['banner'],
    updated(){
        new Swipe($('.banner')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function(index,element){
               $('.banner ol li').removeClass('active');
               $('.banner ol li').eq(index).addClass('active');
            }
        })
    }
    
}

// export default{
//     props:['banner']
// }
</script>

<style>
.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
.content .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
.banner{width:100%;height:2.8rem;}
.banner ul li{width:6.4rem;float:left;position: relative;top: 0.6rem;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.0rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.26rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}
</style>
