<style lang="stylus" scoped>
.block
    width 100%
.historyChart
    display flex
    flex-direction column
    align-items center
</style>

<template lang="pug">
.div
    .block
        span.demonstration 日期：    
        el-date-picker(v-model='value1', type='date', size='small', placeholder='选择日期')
    .historyChart
        #myChart(:style="{width: '100%', height: '500px'}")
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    name: 'test',
    data: () => ({
        value1: ''
    }),
    methods: {
        drawLine() {
            let myChart = echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {
                        type : 'shadow'
                    }
                },
                legend: {
                    top: '10px',
                    data: ['毕业设计','毕业论文','看书','洗衣服']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'category',
                    data: ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
                },
                yAxis: {
                    name : '工作量',
                    type: 'value'
                },
                series: [
                    {
                        name: '毕业设计',
                        type: 'bar',
                        stack: '总量',
                        data: [0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        name: '毕业论文',
                        type: 'bar',
                        stack: '总量',
                        data: [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0]
                    },
                    {
                        name: '看书',
                        type: 'bar',
                        stack: '总量',
                        data: [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        name: '洗衣服',
                        type: 'bar',
                        stack: '总量',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
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
