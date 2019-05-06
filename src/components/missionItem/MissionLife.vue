<style lang="stylus" scoped>
.clearfix
    text-align left
.block
    display flex
    flex-direction column
    align-items center
    width 800px
    .time-line
        margin-top: 32px
</style>

<template lang="pug">
el-card.box-card
    .clearfix(slot='header')
        span {{missionName}} 
    .text.block
        .radio 排序：
            el-radio-group(v-model='reverse')
                el-radio(:label='true') 倒序
                el-radio(:label='false') 正序
        el-timeline.time-line(:reverse='reverse')
            el-timeline-item(v-for='(activity, index) in activities', :key='index', :timestamp='activity.timestamp') {{activity.content}}
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        reverse: true,
        activities: [{
            content: '活动按期开始活动',
            timestamp: '2018-04-15'
        }, {
            content: '通过审核',
            timestamp: '2018-04-13'
        }, {
            content: '创建成功',
            timestamp: '2018-04-11'
        }, {
            content: '创建成功',
            timestamp: '2018-04-11'
        }, {
            content: '创建成功',
            timestamp: '2018-04-11'
        }, {
            content: '创建成功',
            timestamp: '2018-04-11'
        }],
        missionName: '事务ID 事务名称'
    }),
    methods: {
    },
    mounted(){
        this.missionName=this.$route.params.editValue && this.$route.params.missionName
    }
}
</script>
