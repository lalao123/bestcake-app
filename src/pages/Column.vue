<template>
    <div class="newsList">
        <ul>
            <li
            v-for="item of list"
            :key="item._id"
            >
            <router-link
            :to="{name:'detail',params:{id:item._id},
            query:{dataName:'column'}}"
            >
            <h2>{{item.title}}</h2>
            <p>{{item.content}}</p>
            </router-link>
                <!-- <a href="javascript:;">
                    <h2>xx</h2>
                    <p>oooo</p>
                </a>
            </li>
             <li>
                <a href="javascript:;">
                    <h2>xx</h2>
                    <p>oooo</p>
                </a>
            </li>
             <li>
                <a href="javascript:;">
                    <h2>xx</h2>
                    <p>oooo</p>
                </a>
            </li>
             <li>
                <a href="javascript:;">
                    <h2>xx</h2>
                    <p>oooo</p>
                </a>
            </li>
             <li>
                <a href="javascript:;">
                    <h2>xx</h2>
                    <p>oooo</p>
                </a> -->
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        axios({
            url:'/api/column',
            params:{_page:1,_limit:6}
        }).then(
            res=>this.list = res.data.data
        )
    }
}
</script>

<style>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>