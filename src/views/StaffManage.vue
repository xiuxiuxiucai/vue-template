<style lang="stylus" scoped>
</style>

<template lang="pug">
el-table(:data='tableData', max-height='500', align="center", stripe='', style='width: 100%')
  el-table-column(prop='id', sortable='', align="center", label='ID')
  el-table-column(prop='account', align="center", sortable='', label='账号')
  el-table-column(prop='name', align="center", sortable='', label='姓名')
  el-table-column(prop='sex', align="center", sortable='', label='性别'
    :filters="[{text: '男', value: '1'}, {text: '女', value: '0'}]", :filter-method='filterHandler')
  el-table-column(prop='phone', align="center", sortable='', label='电话')
  el-table-column(prop='email', align="center", sortable='', label='邮箱', width='250px')
  el-table-column(prop='workTime', align="center", sortable='', label='平均工时')
  el-table-column(prop='effectiveness', align="center", sortable='', label='工作效率')
  el-table-column(prop='grade', align="center", sortable='', label='参考绩点')
  el-table-column(prop='delay', align="center", sortable='', label='延期占比')
  el-table-column(label='操作', align="center", width='200px')
    template(slot-scope='scope')
      el-button(size='mini', @click="$router.push({name:'StaffMission', params:{missionName: scope.row.name}})") 查看事务
      el-button(size='mini', type='danger', @click='handleDelete(scope.$index, scope.row)') 删除
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        tableData: [{
        id: '1',
        account: 'staff001',
        name: '张三',
        sex: '男',
        phone: '17806097969',
        email: '1342148984@qq.com',
        workTime: '8',
        effectiveness: '100%',
        grade: '8',
        delay: '5%'
        }, {
        id: '2',
        account: 'staff002',
        name: '李四',
        sex: '男',
        phone: '17806097970',
        email: '1342148985@qq.com',
        workTime: '8',
        effectiveness: '90%',
        grade: '7.2',
        delay: '10%'
        }, {
        id: '3',
        account: 'staff003',
        name: '王五',
        sex: '女',
        phone: '17806097971',
        email: '1342148986@qq.com',
        workTime: '7',
        effectiveness: '110%',
        grade: '7.7',
        delay: '0%'
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
