<style lang="stylus" scoped>
</style>

<template lang="pug">
.accountCenter
    el-table(:data='tableData', max-height='500', stripe='', style='width: 100%')
        el-table-column(prop='id', align="center", sortable='', label='ID')
        el-table-column(prop='account', align="center", sortable='', label='账号')
        el-table-column(prop='permission', align="center", sortable='', label='权限')
        el-table-column(prop='name', align="center", sortable='', label='姓名')
        el-table-column(prop='sex', align="center", sortable='', label='性别'
            :filters="[{text: '男', value: '男'}, {text: '女', value: '女'}]", :filter-method='filterHandler')
        el-table-column(prop='phone', align="center", sortable='', label='电话')
        el-table-column(prop='email', align="center", sortable='', label='邮箱', width='220px')
        el-table-column(prop='registrationTime', align="center", sortable='', label='注册时间')
        el-table-column(prop='loginTime', align="center", sortable='', label='最后登录')
        el-table-column(prop='count', align="center", sortable='', label='数据量')
        el-table-column(label='操作', align="center", width='300px')
            template(slot-scope='scope')
                el-button(size='mini', type='primary', @click='bossEditing(scope.row)', :disabled='scope.row.disabledSetting') 设置领导
                el-button(size='mini', @click='permissionEditing(scope.row)') 权限编辑
                el-button(size='mini', type='danger', @click='handleDelete(scope.$index, scope.row)') 删除账号
    el-dialog(title='权限编辑', :visible.sync='dialogFormVisible', width="40%")
        el-form(:model='form', label-width='120px')
                el-radio(v-model='form.status', v-for="item in form.statusData", 
                :label="item.label", :disabled="item.disabled") {{item.label, item.disabled}}
        .dialog-footer(slot='footer')
                el-button(size='mini', @click='dialogFormVisible = false') 取 消
                el-button(size='mini', type='primary', @click='dialogFormVisible = false') 确 定
    el-dialog(title='设置领导', :visible.sync='dialogBossEditing', width="40%")
        el-select(v-model='boosSelect.value', placeholder='请选择')
            el-option(v-for='item in boosSelect.options', :key='item.value', :label='item.label', :value='item.value')
        .dialog-footer(slot='footer')
                el-button(size='mini', @click='dialogBossEditing = false') 取 消
                el-button(size='mini', type='primary', @click='dialogBossEditing = false') 确 定
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        tableData: [{
            id: '1',
            account: 'root',
            permission: '普通',
            name: '朱帅',
            sex: '男',
            phone: '17806097969',
            email: '1342148984@qq.com',
            registrationTime: '2019-4-23',
            loginTime: '2019-4-27',
            count: '40',
            disabledSetting: true
        }, {
            id: '2',
            account: 'boos',
            permission: '管理者',
            name: '管理者',
            sex: '男',
            phone: '17806096666',
            email: '1342146666@qq.com',
            registrationTime: '2019-4-27',
            loginTime: '2019-4-27',
            count: '0',
            disabledSetting: true
        }, {
            id: '3',
            account: 'staff001',
            permission: '员工',
            name: '张三',
            sex: '男',
            phone: '17806097969',
            email: '1342148984@qq.com',
            registrationTime: '2019-4-27',
            loginTime: '2019-4-27',
            count: '10',
            disabledSetting: false
        }, {
            id: '4',
            account: 'staff002',
            permission: '员工',
            name: '李四',
            sex: '男',
            phone: '17806097970',
            email: '1342148985@qq.com',
            registrationTime: '2019-4-27',
            loginTime: '2019-4-27',
            count: '10',
            disabledSetting: false
        }, {
            id: '5',
            account: 'staff003',
            permission: '员工',
            name: '王五',
            sex: '女',
            phone: '17806097971',
            email: '1342148986@qq.com',
            registrationTime: '2019-4-27',
            loginTime: '2019-4-27',
            count: '10',
            disabledSetting: false
        }],
        dialogFormVisible: false,
        dialogBossEditing: false,
        form: {
            status: '',
            statusData: [{
                    label:'普通'
                },{
                    label:'管理者'
                },{
                    label:'员工'
                }
            ]
        },
        boosSelect: {
            options: [{
            value: '选项1',
            label: 'boss1'
            }, {
            value: '选项2',
            label: 'boss2'
            }],
            value: ''
        }
    }),
    methods: {
        filterHandler(value, row, column) {
            const property = column['property']
            return row[property] === value;
        },
        permissionEditing(row){
            this.form.status = row.permission

            this.dialogFormVisible = true
        },
        bossEditing(row){
            this.boosSelect.value = '选项1'

            this.dialogBossEditing = true
        }
    },
    mounted(){
    }
}
</script>
