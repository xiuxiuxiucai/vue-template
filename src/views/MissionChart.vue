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
            el-radio-button(label="MissionHistoryChart") 历史任务
            el-radio-button(label="MissionPercentageChart") 百分比图
    .content
        keep-alive
            components(:is="compName")
</template>

<script>
import missionChart from '../components/missionChart'
export default {
    name: 'missionChart',
    data: () => ({
        compName: 'MissionHistoryChart',
        compMap: {
            MissionHistoryChart: '历史任务',
            MissionPercentageChart: '百分比图'
        }
    }),
    components: { ...missionChart },
    methods: {
    },
    mounted() {
    }
}
</script>
