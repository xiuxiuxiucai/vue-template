<style lang="stylus" scoped>
.cardContainer
    display flex
    flex-direction column
    align-items center
    .box-card 
        width 800px
        height 160px
        margin 16px
        .clearfix
            text-align left
            .el-select
                width 130px
                float right
            .datePicker
                width 100px
                float right
                margin-right 135px
        .text
            font-size 18px
        .item 
            margin-bottom 50px
</style>

<template lang="pug">
.cardContainer
    el-card.box-card
        .clearfix(slot='header')
            span 今日事务数
        .text.item
            el-row(type="flex" justify="center" align="middle")
                el-col(:span='3' v-for="missionItem in todayMissionInfo")
                    .grid-content.bg-purple {{missionItem.title}}
                    .grid-content.bg-purple {{missionItem.value}}
    el-card.box-card
        .clearfix(slot='header')
            span 总事务数
            el-select(v-model='missionDateType', @change='missionChange' placeholder='请选择', size="mini")
                el-option(v-for='item in options', :key='item.value', :label='item.label', :value='item.value')
            .datePicker
                el-date-picker(v-model='missionSumDate', :type='missionPickerType', :format='missionPickerFormat', :placeholder='missionPickerHolder', size="mini")
        .text.item
            el-row(type="flex" justify="center")
                el-col(:span='3' v-for="missionItem in todayMissionInfo")
                    .grid-content.bg-purple {{missionItem.title}}
                    .grid-content.bg-purple {{missionItem.value}}
    el-card.box-card
        .clearfix(slot='header')
            span 事务时间
            el-select(v-model='otherDateType', @change='otherChange' placeholder='请选择', size="mini")
                el-option(v-for='item in options', :key='item.value', :label='item.label', :value='item.value')
            .datePicker
                el-date-picker(v-model='otherSumDate', :type='otherPickerType', :format='otherPickerFormat', :placeholder='otherPickerHolder', size="mini")
        .text.item
            el-row(type="flex" justify="center")
                el-col(:span='5' v-for="missionItem in todayMissionOther")
                    .grid-content.bg-purple {{missionItem.title}}
                    .grid-content.bg-purple {{missionItem.value}}
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        todayMissionInfo: [
            {
                title: '所有事务',
                value: 10000
            },
            {
                title: '进行中',
                value: 0
            },
            {
                title: '未开始',
                value: 10000
            },
            {
                title: '已超时',
                value: 0
            },
            {
                title: '已延期',
                value: 0
            },
            {
                title: '已完成',
                value: 0
            },
            {
                title: '已暂停',
                value: 0
            },
            {
                title: '已取消',
                value: 0
            }
        ],
        todayMissionOther: [
            {
                title: '总工时',
                value: 0
            },
            {
                title: '已用工时',
                value: 0
            },
            {
                title: '剩余工时',
                value: 0
            },
            {
                title: '超时时长',
                value: 0
            },
            {
                title: '延期时长',
                value: 0
            }
        ],
        options: [{
          value: 'date',
          label: '天'
        }, {
          value: 'week',
          label: '周'
        }, {
          value: 'month',
          label: '月'
        }, {
          value: 'year',
          label: '年'
        }],
        missionDateType: 'date',
        missionSumDate: '',
        missionPickerType: 'date',
        missionPickerFormat: '',
        missionPickerHolder: '请选择时间',

        otherDateType: 'date',
        otherSumDate: '',
        otherPickerType: 'date',
        otherPickerFormat: '',
        otherPickerHolder: '请选择时间'
    }),
    methods: {
        missionChange() {
            this.missionPickerFormat = ''
            this.missionPickerType = this.missionDateType
            switch(this.missionDateType)
            {
                case 'date':
                    this.missionPickerHolder = '选择天'
                    break
                case 'week':
                    this.missionPickerFormat = 'yyyy 第 WW 周'
                    this.missionPickerHolder = '选择周'
                    break
                case 'month':
                    this.missionPickerHolder = '选择月'
                    break
                case 'year':
                    this.missionPickerHolder = '选择年'
                    break
                default:
            }
        },
        otherChange() {
            this.otherPickerFormat = ''
            this.otherPickerType = this.otherDateType
            switch(this.otherDateType)
            {
                case 'date':
                    this.otherPickerHolder = '选择天'
                    break
                case 'week':
                    this.otherPickerFormat = 'yyyy 第 WW 周'
                    this.otherPickerHolder = '选择周'
                    break
                case 'month':
                    this.otherPickerHolder = '选择月'
                    break
                case 'year':
                    this.otherPickerHolder = '选择年'
                    break
                default:
            }
        }
    }
}
</script>
