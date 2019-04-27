<style lang="stylus" scoped>
</style>

<template lang="pug">
el-table(:data='tableData', max-height='500', stripe='', style='width: 100%')
  el-table-column(prop='id', sortable='', label='ID')
  el-table-column(prop='priority', sortable='', label='优先级', 
    :filters="[{text: 'A', value: 'A'}, {text: 'B', value: 'B'}, {text: 'C', value: 'C'}, {text: 'D', value: 'D'}, {text: 'E', value: 'E'}]", :filter-method='filterHandler')
  el-table-column(prop='task', sortable='', label='事务')
  el-table-column(prop='status', sortable='', label='状态'
    :filters="[{text: '进行中', value: '进行中'}, {text: '未开始', value: '未开始'}, {text: '已延期', value: '已延期'}, {text: '已完成', value: '已完成'}, {text: '已暂停', value: '已暂停'}, {text: '已取消', value: '已取消'}]", :filter-method='filterHandler')
  el-table-column(prop='expected', sortable='', label='预计')
  el-table-column(prop='expend', sortable='', label='消耗')
  el-table-column(prop='lave', sortable='', label='剩余')
  el-table-column(prop='schedule', sortable='', label='进度')
  el-table-column(prop='asof', sortable='', label='截至')
  el-table-column(label='操作')
    template(slot-scope='scope')
      el-button(size='mini', @click='handleEdit(scope.$index, scope.row)') 编辑
      el-button(size='mini', type='danger', @click='handleDelete(scope.$index, scope.row)') 删除
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        tableData: [{
        id: '1',
        priority: 'A',
        task: '事务',
        status: '进行中',
        expected: '预计',
        expend: '消耗',
        lave: '剩余',
        schedule: '进度',
        asof: '截至'
        }, {
        id: '2',
        priority: 'B',
        task: '事务',
        status: '未开始',
        expected: '预计',
        expend: '消耗',
        lave: '剩余',
        schedule: '进度',
        asof: '截至'
        }, {
        id: '3',
        priority: 'C',
        task: '事务',
        status: '已延期',
        expected: '预计',
        expend: '消耗',
        lave: '剩余',
        schedule: '进度',
        asof: '截至'
        }]
    }),
    methods: {
        filterHandler(value, row, column) {
        const property = column['property']
        return row[property] === value;
      }
    }
}
</script>
