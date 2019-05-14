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
        #percentage(:style="{width: '100%', height: '500px'}")
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
            let percentage = echarts.init(document.getElementById('percentage'))
            percentage.setOption({
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['按时完成','已超时','已延期']
                },
                series : [
                    {
                        name: '事务状态',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:2, name:'已延期'},
                            {value:7, name:'已超时'},
                            {value:22, name:'按时完成'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
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
