<style lang="stylus" scoped>
.historyChart
    align-items center
</style>

<template lang="pug">
.historyChart
    #myChart(:style="{width: '65%', height: '500px', weight: '1400px'}")
    #percentage(:style="{width: '65%', height: '500px', weight: '1400px'}")
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    name: 'test',
    data: () => ({
    }),
    methods: {
        drawLine() {
            let myChart = echarts.init(document.getElementById('myChart'))
            let percentage = echarts.init(document.getElementById('percentage'))
            myChart.setOption({
                title: { text: '历史事务表' },
                tooltip: {},
                xAxis: {
                    data: ["2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06"]
                },
                yAxis: {},
                series: [{
                    name: '任务数',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                },{
                    name: '完成数',
                    type: 'bar',
                    data: [4, 10, 32, 5, 2, 2]
                }]
            })
            percentage.setOption({
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
                        ]
                    }
                ]
            })
        }
    },
    mounted() {
        this.drawLine();
    }
}
</script>
