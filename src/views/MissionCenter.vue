<style lang="stylus" scoped>
.switchText
    font-size 16px
    font-weight bolder
    color #606266
.el-dialog
    .el-form
        height 30px
    .el-form-item
        display flex
        flex-flow row nowrap
        align-items center
.el-pagination
    margin-top: 20px
</style>

<template lang="pug">
.missionCenter
    el-table(:data='tableData', max-height='570', stripe='' style='width: 100%')
        el-table-column(prop='id', sortable='', align="center", label='ID', width='70px')
        el-table-column(prop='priority', sortable='', align="center", label='优先级', width='110px', 
            :filters="[{text: 'A', value: 'A'}, {text: 'B', value: 'B'}, {text: 'C', value: 'C'}, {text: 'D', value: 'D'}]", :filter-method='filterHandler')
        el-table-column(prop='task', sortable='', align="center", label='事务')
        el-table-column(prop='taskClass', sortable='', align="center", label='事务类型', width='135px', 
            :filters="[{text: '活动事务', value: '活动事务'}, {text: '固定事务', value: '固定事务'}, {text: '周期事务', value: '周期事务'}]", :filter-method='filterHandler')
        el-table-column(align="center", sortable='', label='状态', width='105px',
            :filters="[{text: '未开始', value: '未开始'}, {text: '进行中', value: '进行中'}, {text: '已暂停', value: '已暂停'}, {text: '已完成', value: '已完成'}, {text: '已取消', value: '已取消'}]", :filter-method='filterHandler')
            template(slot-scope='statusScope')
                el-button(@click='statusChange(statusScope.row)', type='text', size='medium') {{statusScope.row.statusData}}
        el-table-column(prop='expected', sortable='', align="center", label='预计', width='110px')
        el-table-column(prop='expend', sortable='', align="center", label='消耗', width='110px')
        el-table-column(prop='schedule', sortable='', align="center", label='耗时占比', width='110px')
        el-table-column(prop='asof', sortable='', align="center", label='截止时间', width='160px')
        el-table-column(prop='success', sortable='', align="center", label='完成时间', width='160px')
        el-table-column(label='', align="center", width='250px', @click='statusChange(statusScope.row)')
            template(slot-scope='scope')
                el-button(size='mini', type='primary', @click="$router.push({name:'MissionItem', params:{missionID: scope.row.id, missionName: scope.row.priority}})") 详情
                el-button(size='mini', @click="$router.push({name:'MissionAlter', params:{editValue: '编辑事务'}})") 编辑
                el-button(size='mini', type='danger', @click='handleDelete(scope.$index, scope.row)') 删除
            template(slot-scope='scope', slot="header")
                el-input(v-model='findMission', placeholder='查询事务', size='small')
    el-dialog(title='当前状态', :visible.sync='dialogFormVisible', width="45%")
        el-form(:model='form', label-width='120px')
            el-radio(v-model='form.status', v-for="item in form.statusData", 
            :label="item.label", :disabled="item.disabled") {{item.label, item.disabled}}
        .dialog-footer(slot='footer')
            el-button(size='mini', @click='dialogFormVisible = false') 取 消
            el-button(size='mini', type='primary', @click='dialogFormVisible = false') 确 定
    el-pagination(background='', layout='prev, pager, next', :total='20')
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        findMission: '',
        tableData: [{
            id: '1',
            priority: 'A',
            task: '毕业设计',
            taskClass: '周期事务',
            statusData: '进行中',
            expected: '100小时',
            expend: '80小时',
            schedule: '80%',
            asof: '2019-05-08 00:00',
            success: ''
        }, {
            id: '2',
            priority: 'B',
            task: '毕业论文',
            taskClass: '周期事务',
            statusData: '未开始',
            expected: '50小时',
            expend: '0小时',
            schedule: '0%',
            asof: '2019-05-08 00:00',
            success: ''
        }, {
            id: '3',
            priority: 'C',
            task: '看书',
            taskClass: '周期事务',
            statusData: '已取消',
            expected: '5小时',
            expend: '0小时',
            schedule: '0%',
            asof: '2019-04-10 00:00',
            success: ''
        }, {
            id: '4',
            priority: 'D',
            task: '洗衣服',
            taskClass: '周期事务',
            statusData: '已完成',
            expected: '1小时',
            expend: '1小时',
            schedule: '100%',
            asof: '2019-04-30 00:00',
            success: '2019-04-30 16:00'
        }, {
            id: '5',
            priority: 'D',
            task: '晒被子',
            taskClass: '周期事务',
            statusData: '已暂停',
            expected: '0.5小时',
            expend: '0.25小时',
            schedule: '50%',
            asof: '2019-04-30 00:00',
            success: ''
        }, {
            id: '6',
            priority: 'A',
            task: '看电影',
            taskClass: '周期事务',
            statusData: '已完成',
            expected: '4小时',
            expend: '3.5小时',
            schedule: '100%',
            asof: '2019-04-26 00:00',
            success: '2019-04-26 19:00'
        }, {
            id: '7',
            priority: 'B',
            task: '玩游戏',
            taskClass: '周期事务',
            statusData: '已完成',
            expected: '2.5小时',
            expend: '3小时',
            schedule: '100%',
            asof: '2019-04-27 00:00',
            success: '2019-04-27 19:00'
        }, {
            id: '8',
            priority: 'B',
            task: '打篮球',
            taskClass: '周期事务',
            statusData: '已完成',
            expected: '4小时',
            expend: '4小时',
            schedule: '100%',
            asof: '2019-04-27 00:00',
            success: '2019-04-27 04:00'
        // }, {
        //     id: '9',
        //     priority: 'D',
        //     task: '做饭',
        //     taskClass: '周期事务',
        //     statusData: '已取消',
        //     expected: '1.5小时',
        //     expend: '2小时',
        //     schedule: '0%',
        //     asof: '2019-04-27 00:00',
        //     success: ''
        // }, {
        //     id: '10',
        //     priority: 'B',
        //     task: '烤串',
        //     taskClass: '周期事务',
        //     statusData: '已完成',
        //     expected: '3小时',
        //     expend: '3小时',
        //     schedule: '100%',
        //     asof: '2019-04-26 00:00',
        //     success: '2019-04-26 20:00'
        }],
        dialogFormVisible: false,
        form: {
            status: '',
            statusData: [{
                    label:'未开始',
                    disabled :false
                },{
                    label:'进行中',
                    disabled :false
                },{
                    label:'已暂停',
                    disabled :false
                },{
                    label:'已完成',
                    disabled :false
                },{
                    label:'已取消',
                    disabled :false
                }
            ]
        }
    }),
    methods: {
        filterHandler(value, row, column) {
            const property = column['property']
            return row[property] === value;
        },
        statusChange(row){
            this.form.status = row.statusData

            this.form.statusData[0].disabled = false
            this.form.statusData[2].disabled = false
            switch(row.statusData){
                case '未开始':
                    this.form.statusData[2].disabled = true
                    break
                case '进行中':
                    this.form.statusData[0].disabled = true
                    break
                case '已暂停':
                    this.form.statusData[0].disabled = true
                    break
                case '已完成':
                    this.form.statusData[0].disabled = true
                    break
            }
            this.dialogFormVisible = true
        }
    },
    mounted(){
    }
}
</script>
