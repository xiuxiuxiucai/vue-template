<style lang="stylus" scoped>
.mission-ruleForm
    .content
        text-align left
        padding 10px
        .line
            text-align center
        .confirmButton
            text-align center
</style>

<template lang="pug">
.mission-ruleForm
    .content
        el-form(:model='ruleForm', :rules='rules', ref='ruleForm', label-width='100px', size='small')
            el-form-item(label='事务名称', prop='name', style='width: 420px;')
                el-input(v-model='ruleForm.name')
            el-form-item(label='优先级', prop='priority')
                el-select(v-model='ruleForm.priority', placeholder='请选择优先级')
                    el-option(label='A', value='A')
                    el-option(label='B', value='B')
                    el-option(label='C', value='C')
                    el-option(label='D', value='D')
            el-form-item(label='预计用时', prop='estimated', style='width: 160px;')
                el-input(v-model='ruleForm.estimated', placeholder='小时')
            el-form-item(label='开始时间')
                el-col(:span='11')
                    el-form-item(prop='beginTime1')
                        el-date-picker(type='date', placeholder='选择日期', v-model='ruleForm.beginTime1', style='width: 100%;')
                el-col.line(:span='2') -
                el-col(:span='11')
                    el-form-item(prop='beginTime2')
                        el-time-picker(placeholder='选择时间', v-model='ruleForm.beginTime2', style='width: 100%;')
            el-form-item.endTime(label='截止时间', required='')
                el-col(:span='11')
                    el-form-item(prop='endTime1')
                        el-date-picker(type='date', placeholder='选择日期', v-model='ruleForm.endTime1', style='width: 100%;')
                el-col.line(:span='2') -
                el-col(:span='11')
                    el-form-item(prop='endTime2')
                        el-time-picker(placeholder='选择时间', v-model='ruleForm.endTime2', style='width: 100%;')
            el-form-item(label='当前状态', prop='status')
                el-radio-group(v-model='ruleForm.status')
                    el-radio(label='未开始')
                    el-radio(label='进行中')
                    el-radio(label='已暂停')
                    el-radio(label='已完成')
                    el-radio(label='已取消')
            el-form-item(label='周期执行', prop='cycle')
                el-radio-group(v-model='ruleForm.cycle')
                    el-radio(label='执行一次')
                    el-radio(label='一天')
                    el-radio(label='一周')
                    el-radio(label='一月')
                    el-radio(label='一年')
            el-form-item(label='事务简介', prop='transaction', style='height: 100%;')
                el-input(type='textarea', v-model='ruleForm.transaction' :autosize="{ minRows: 2, maxRows: 4 }")
            el-form-item.confirmButton
                el-button(type='primary', @click="submitForm('ruleForm')") 确认
                el-button(@click="resetForm('ruleForm')") 重置
                el-button(type='danger', @click="bossEditing()") 指派员工
    .assignStaff
        el-dialog(title='指派员工', :visible.sync='dialogBossEditing', width="40%")
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
        dialogBossEditing: false,
        ruleForm: {
            name: '',
            priority: 'C',
            estimated: '',
            beginTime1: '',
            beginTime2: '',
            endTime1: '',
            endTime2: '',
            status: '未开始',
            cycle: '执行一次',
            transaction: ''
        },
        rules: {
            name: [
                { required: true, message: '请输入事务名称', trigger: 'blur' },
                { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
            ],
            estimated: [
                { required: true, message: '请输入用时', trigger: 'blur' },
                { min: 1, max: 4, message: '4 位数以内', trigger: 'blur' }
            ],
            beginTime1: [
                { required: false, message: '请选择截至日期', trigger: 'blur' }
            ],
            beginTime2: [
                { required: false, message: '请选择截至日期', trigger: 'blur' }
            ],
            endTime1: [
                { required: true, message: '请选择截至日期', trigger: 'blur' }
            ],
            endTime2: [
                { required: true, message: '请选择截至时间', trigger: 'blur' }
            ],
            transaction: [
                { min: 1, max: 300, message: '长度在 1 到 300 个字符', trigger: 'blur' }
            ]
        },
        boosSelect: {
            options: [{
            value: '选项1',
            label: '张三'
            }, {
            value: '选项2',
            label: '李四'
            }, {
            value: '选项3',
            label: '王五'
            }],
            value: ''
        }
    }),
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交').then(() => {
                        console.log('提交', this.form)
                        this.$message({
                            message: '新建事务成功',
                            type: 'success'
                        })
                        this.$refs[formName].resetFields(); 
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        resetForm(formName) {
            this.$confirm('确认重置').then(() => {
                this.$refs[formName].resetFields();
            })
        },
        fetch() {
            this.$get('/v1/club/getMemberById').then(resp => {
                this.clubMember = resp.data.data
            })
        },
        bossEditing(){
            this.boosSelect.value = '选项1'

            this.dialogBossEditing = true
        }
    },
    mounted() {
    }
}
</script>
