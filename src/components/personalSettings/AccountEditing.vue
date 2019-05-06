<style lang="stylus" scoped>
.sign
    margin-top: 25px
    width 100%
    display flex
    flex-direction column
    align-items center
    .el-button
        width 40%
</style>

<template lang="pug">
.sign
    el-form(ref='signForm' :rules="formRules" :model='signForm', label-width='70px')
        el-form-item(label='账号' prop="account")
            el-input(v-model='signForm.account')
        el-form-item(label='姓名' prop="name")
            el-input(v-model='signForm.name')
        el-form-item(label='性别' prop="sex")
            el-radio(v-model='signForm.sex', label='1') 男
            el-radio(v-model='signForm.sex', label='0') 女
        el-form-item(label='电话' prop="phone")
            el-input(v-model='signForm.phone')
        el-form-item(label='邮箱' prop="email")
            el-input(v-model='signForm.email')
        el-button(type="primary" @click="onSign") 确认
        el-button(type="primary" @click="cancelSubmit") 取消
</template>

<script>
export default {
    name: 'Sign',
    data: () => ({
        signForm: {
            account: '',
            sex: '',
            name: '',
            phone: '',
            email: ''
        },
        formRules: {
            account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
            name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
        },
    }),
    methods: {
        onSign() {
            this.$refs.signForm.validate((valid) => {
                if (valid) {
                    console.log(this.signForm)
                    this.$post('/v1/user/sign', this.signForm).then(resp => {
                        this.$message({
                            message: resp.data.msg,
                            type: resp.data.state ? 'success' : 'error'
                        })
                    })
                    this.$emit('submit-sign', true)
                }
            })
        },
        cancelSubmit() {
            this.$confirm('确认取消').then(() => {
                this.$router.back()
            })
        }
    }
}
</script>
