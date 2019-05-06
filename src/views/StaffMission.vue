<style lang="stylus" scoped>
.el-dialog
    .el-form
        height 30px
    .el-form-item
        display flex
        flex-flow row nowrap
        align-items center
</style>

<template lang="pug">
.missionCenter
    el-table(:data='tableData', max-height='600', stripe='' style='width: 100%')
        el-table-column(prop='id', sortable='', align="center", label='ID')
        el-table-column(prop='priority', sortable='', align="center", label='优先级', 
            :filters="[{text: 'A', value: 'A'}, {text: 'B', value: 'B'}, {text: 'C', value: 'C'}, {text: 'D', value: 'D'}]", :filter-method='filterHandler')
        el-table-column(prop='task', sortable='', align="center", label='事务')
        el-table-column(prop='statusData', sortable='', align="center", label='状态' 
            :filters="[{text: '未开始', value: '未开始'}, {text: '进行中', value: '进行中'}, {text: '已暂停', value: '已暂停'}, {text: '已完成', value: '已完成'}, {text: '已取消', value: '已取消'}]", :filter-method='filterHandler')
        el-table-column(prop='expected', sortable='', align="center", label='预计')
        el-table-column(prop='expend', sortable='', align="center", label='消耗')
        el-table-column(prop='schedule', sortable='', align="center", label='进度')
        el-table-column(prop='begin', sortable='', align="center", label='开始')
        el-table-column(prop='end', sortable='', align="center", label='结束')
        el-table-column(prop='asof', sortable='', align="center", label='截止日期', width='160px')
        el-table-column(label='', align="center", :label='staffName')
            template(slot-scope='scope')
                el-button(size='mini', type='primary', @click="$router.push({name:'MissionItem', params:{missionID: scope.row.id, missionName: scope.row.priority}})") 详情
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        staffName: '',
        tableData: [{
            id: '1',
            priority: 'A',
            task: '毕业设计',
            statusData: '进行中',
            expected: '100小时',
            expend: '80小时',
            schedule: '80%',
            begin: '10:00',
            end: '14:00',
            asof: '2019-05-08 00:00'
        }, {
            id: '2',
            priority: 'B',
            task: '毕业论文',
            statusData: '未开始',
            expected: '50小时',
            expend: '0小时',
            schedule: '0%',
            begin: '15:00',
            end: '18:00',
            asof: '2019-05-08 00:00'
        }, {
            id: '3',
            priority: 'C',
            task: '看书',
            statusData: '已取消',
            expected: '5小时',
            expend: '0小时',
            schedule: '0%',
            begin: '08:00',
            end: '10:00',
            asof: '2019-04-10 00:00'
        }, {
            id: '4',
            priority: 'D',
            task: '洗衣服',
            statusData: '已完成',
            expected: '1小时',
            expend: '1小时',
            schedule: '100%',
            begin: '19:00',
            end: '20:00',
            asof: '2019-04-30 00:00'
        }, {
            id: '5',
            priority: 'D',
            task: '晒被子',
            statusData: '已暂停',
            expected: '0.5小时',
            expend: '0小时',
            schedule: '0%',
            begin: '08:00',
            end: '08:30',
            asof: '2019-04-30 00:00'
        }]
    }),
    methods: {
        filterHandler(value, row, column) {
            const property = column['property']
            return row[property] === value;
        }
    },
    mounted(){
        if(this.$route.params.missionName){
            this.staffName = '当前员工：' + this.$route.params.missionName
        }
    }
}
</script>
