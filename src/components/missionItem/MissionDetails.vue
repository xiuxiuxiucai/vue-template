<style lang="stylus" scoped>
.mission-ruleForm
    text-align left
    .content
        padding 11px
        .line
            text-align center
        .confirmButton
            text-align center
</style>

<template lang="pug">
.mission-ruleForm
    .content
        el-form(:model='ruleForm', :rules='rules', ref='ruleForm', label-width='100px', size='small')
            el-form-item(label='事务名称', prop='name')
                el-input(v-model='ruleForm.name', style='width: 320px;')
            el-form-item(label='优先级', prop='priority')
                el-select(v-model='ruleForm.priority', placeholder='请选择优先级', style='width: 160px;')
                    el-option(label='A', value='A')
                    el-option(label='B', value='B')
                    el-option(label='C', value='C')
                    el-option(label='D', value='D')
            el-form-item(label='预计用时', prop='estimated')
                el-input(v-model='ruleForm.estimated', placeholder='小时', style='width: 80px;')
            el-form-item(label='开始时间')
                el-col(:span='11')
                    el-form-item(prop='beginTime1')
                        el-date-picker(type='date', placeholder='选择日期', v-model='ruleForm.beginTime1', style='width: 100%;')
                el-col.line(:span='2') -
                el-col(:span='11')
                    el-form-item(prop='beginTime2')
                        el-time-picker(placeholder='选择时间', v-model='ruleForm.beginTime2', style='width: 100%;')
            el-form-item.endTime(label='截至时间')
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
                    el-radio(label='已完成')
                    el-radio(label='已暂停')
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
                el-button(type='primary', @click="submitForm('ruleForm')") 编辑任务
                el-button(@click="resetForm('ruleForm')") 删除任务
</template>

<script>
export default {
    name: 'templete',
    data: () => ({
        ruleForm: {
            name: '',
            priority: '',
            estimated: '',
            beginTime1: '',
            beginTime2: '',
            endTime1: '',
            endTime2: '',
            status: '',
            cycle: '',
            transaction: ''
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
            this.$confirm('确认取消').then(() => {
                this.$refs[formName].resetFields();
            })
        },
        fetch() {
            this.$get('/v1/club/getMemberById').then(resp => {
                this.clubMember = resp.data.data
            })
        }
    }
}
</script>
