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
    .el-table
        padding-top 32px
        width 55%
</style>

<template lang="pug">
.missionCenter
    .header
        span.title 历史日志
    el-table(:data='tableData', max-height='600', style='width: 60%', :default-sort='{prop: "begin"}')
        //- el-table-column(prop='asof', sortable='', align="center", label='日期')
        el-table-column(prop='task', sortable='', align="center", label='进行事务')
        el-table-column(prop='priority', sortable='', align="center", label='优先级', 
            :filters="[{text: 'A', value: 'A'}, {text: 'B', value: 'B'}, {text: 'C', value: 'C'}, {text: 'D', value: 'D'}]", :filter-method='filterHandler')
        el-table-column(prop='begin', sortable='', align="center", label='开始时间')
        el-table-column(prop='expend', sortable='', align="center", label='消耗时间')
        el-table-column(label='', align="center", width='250px')
            template(slot-scope='scope')
                el-button(size='mini', type='primary', @click="$router.push({name:'MissionItem', params:{missionID: scope.row.id, missionName: scope.row.priority}})") 详情
                el-button(size='mini', type='danger', @click="open") 删除
            template.selectDate(slot-scope='scope', slot="header")
                el-date-picker(v-model='value1', type='date', placeholder='选择日期', size='small')
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        value1: '',
        tableData: [{
        //     asof: '2019-05-09',
        //     task: '测试4',
        //     priority: 'D',
        //     begin: '14:30',
        //     expend: '2小时'
        // }, {
        //     asof: '2019-05-09',
        //     task: '测试2',
        //     priority: 'B',
        //     begin: '16:30',
        //     expend: '2.5小时'
                asof: '2019-05-08',
                task: '毕业设计',
                priority: 'A',
                begin: '08:00',
                expend: '2小时'
            }, {
                asof: '2019-05-09',
                task: '毕业论文',
                priority: 'B',
                begin: '10:00',
                expend: '3小时'
            }, {
                asof: '2019-05-10',
                task: '看书',
                priority: 'C',
                begin: '15:00',
                expend: '3小时'
            }, {
                asof: '2019-05-11',
                task: '洗衣服',
                priority: 'D',
                begin: '18:00',
                expend: '1小时'
            }, {
                asof: '2019-05-12',
                task: '晒被子',
                priority: 'D',
                begin: '07:30',
                expend: '0.5小时'
        }]
    }),
    methods: {
        filterHandler(value, row, column) {
            const property = column['property']
            return row[property] === value;
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                // if(row.asof =)
                // console.log(this.tableData[rowIndex + 1].asof);
                if (rowIndex === 0) {
                    return {
                    rowspan: 3,
                    colspan: 1
                    };
                } else if (rowIndex === 3) {
                    return {
                    rowspan: 1,
                    colspan: 1
                    };
                } else {
                    return {
                    rowspan: 0,
                    colspan: 0
                    };
                }
            }
        },
        open() {	
            this.$confirm('确认删除吗？', '', {
            confirmButtonText: '确定',
            cancelButtonText: '取消'
            })
        }
    },
    mounted(){
    }
}
</script>
