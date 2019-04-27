<style lang="stylus" scoped>
.header
    width 60%
    display flex
    flex-flow row nowrap
    align-items center
    justify-content space-between
    padding-bottom 16px
    border-bottom 2px solid #888
    .title
        font-size 24px
        font-weight bolder
.content
    padding-top 32px
    width 55%
</style>

<template lang="pug">
.container
    .header
        span.title {{compMap[compName]}}
        el-radio-group(v-model="compName")
            el-radio-button(label="MissionNumber") 数量
            el-radio-button(label="MissionAverage") 均值
            el-radio-button(label="MissionPercentage") 百分比
    .content
        keep-alive
            components(:is="compName")
</template>

<script>
import statisticsItem from '../components/statisticsItem'
export default {
    name: 'statisticsItem',
    data: () => ({
        compName: 'MissionNumber',
        compMap: {
            MissionNumber: '数量',
            MissionAverage: '均值',
            MissionPercentage: '百分比'
        }
    }),
    components: { ...statisticsItem },
    methods: {
    },
    mounted() {
    }
}
</script>
