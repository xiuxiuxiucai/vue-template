<style lang="stylus" scoped>
.block
  display flex
  flex-direction column
  align-items center
  width 800px
.time-line
  margin 32px
.el-timeline-item
  float left
</style>

<template lang="pug">
.block
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
      content: '活动按期开始活动按期开始活动按期开始活动按期开始活动按期开始',
      timestamp: '2018-04-15'
    }, {
      content: '通过审核',
      timestamp: '2018-04-13'
    }, {
      content: '创建成功',
      timestamp: '2018-04-11'
    }]
  }),
  methods: {
      
  }
}
</script>
