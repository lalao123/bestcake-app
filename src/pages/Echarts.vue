<template>
    <div class="echarts">
       <h3>echarts</h3>
       <div ref="echarts" style="height:400px;padding-top:30px;"></div>
       <div ref="echarts2" style="height:400px;"></div>
       <div ref="echarts3" style="height:400px;"></div>

    </div>
</template>
<script>
import echarts from "echarts";
import { setTimeout } from 'timers';
// var echarts = require('echarts/lib/echarts');
// require('echarts/lib/chart/bar');
// require('echarts/lib/component/title');
// require('echarts/lib/component/timeline');
export default {
    data(){
        return{
            msg:'响应式数据'
        }
    },
    mounted(){
      this.myChart = echarts.init(this.$refs.echarts);

      // 指定图表的配置项和数据
        let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量','价格']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },{
                name: '价格',
                type: 'bar',
                data: [45, 80, 40, 50, 85, 5]
            }]
        };

      this.myChart.setOption(option);
      this.myChart.on('click',function(params){
         window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
        // console.log(params)
      })

      this.myChart2 = echarts.init(this.$refs.echarts2);
     let option2 = {
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data:[
                        {value:235, name:'视频广告'},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}
                    ],
                    roseType: 'angle',
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
      this.myChart2.setOption(option2);


      this.myChart3 = echarts.init(this.$refs.echarts3);
      
      this.myChart3.setOption({
                // backgroundColor: '#2c343c',

                title: {
                    text: '加载中',
                    link:'http://www.baidu.com'
                },

                tooltip : {},
                legend:{
                    data:['销量']
                },
                xAxis:{
                    data:[]
                },
                yAxis:{},
                series:[{
                    name:'销量',
                    type:'bar',
                    data:[]
                }]
                
            });
           this.myChart3.showLoading();
           axios({
               url:'/data/echarts.json'
           }).then(
               res=>{
                  setTimeout(()=>{
                  this.myChart3.hideLoading();
                  this.myChart3.setOption(res.data)
                  },1000)
               }
           )
    }
}
</script>
<style>

</style>



