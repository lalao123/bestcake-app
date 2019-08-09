<template>
    <div class="follow">
       <List :list="list" dataName="follow"></List>
    </div>
</template>
<script>
import List from '@/components/List';
export default {
    data(){
        return{
            list:[]
        }
    },
    components:{List},
    mounted(){
        axios({
        url:'/api/follow',
        }).then(
            res=>this.list = res.data.data
        )
    }
}
</script>

