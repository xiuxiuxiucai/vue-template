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
        el-date-picker(v-model='value1', type='daterange', size='small', range-separator='至', start-placeholder='开始日期', end-placeholder='结束日期')
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
        value1: '',
        value2: ''
    }),
    methods: {
        drawLine() {
            let myChart = echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                tooltip: {},
                xAxis: {
                    data: ["2019-05-01", "2019-05-02", "2019-05-03", "2019-05-04", "2019-05-05", "2019-05-06", "2019-05-07"]
                },
                yAxis: {
                    name: '小时'
                },
                series: [{
                    name: '小时',
                    type: 'bar',
                    data: [8, 10, 9, 9, 8, 2, 3]
                }]
            })
        }
    },
    mounted() {
        this.drawLine();
    }
}
</script>
