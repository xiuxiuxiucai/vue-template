<style lang="stylus" scoped>
.historyChart
    display flex
    flex-direction column
    align-items center
</style>

<template lang="pug">
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
    }),
    methods: {
        drawLine() {
            let myChart = echarts.init(document.getElementById('myChart'))
            myChart.setOption({
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
        }
    },
    mounted() {
        this.drawLine();
    }
}
</script>
