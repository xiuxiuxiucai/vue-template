<style lang="stylus" scoped>
.historyChart
    display flex
    flex-direction column
    align-items center
</style>

<template lang="pug">
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
    }),
    methods: {
        drawLine() {
            let percentage = echarts.init(document.getElementById('percentage'))
            percentage.setOption({
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        data:[
                            {value:235, name:'进行中'},
                            {value:274, name:'未开始'},
                            {value:310, name:'已延期'},
                            {value:335, name:'已完成'},
                            {value:400, name:'已暂停'}
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
