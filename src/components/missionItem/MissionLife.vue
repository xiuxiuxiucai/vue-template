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
                content: 'root 操作:创建事务',
                timestamp: '2018-05-06 14:00'
            }, {
                content: 'root 操作:进行中',
                timestamp: '2018-05-07 18:00'
            }, {
                content: 'root 操作:已暂停',
                timestamp: '2018-05-07 18:30'
            }, {
                content: 'root 操作:进行中',
                timestamp: '2018-05-07 19:00'
            }, {
                content: 'root 操作:已完成',
                timestamp: '2018-05-07 19:30'
        // }, {
        //     content: 'test 操作:创建事务',
        //     timestamp: '2018-05-07 18:59'
        // }, {
        //     content: 'test 操作:进行中',
        //     timestamp: '2018-05-07 19:00'
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
