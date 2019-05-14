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
    el-form(ref='signForm' :rules="formRules" :model='signForm', label-width='100px')
        el-form-item(label='原密码' prop="password")
            el-input(v-model='signForm.password' show-password)
        el-form-item(label='新密码' prop="newPassword")
            el-input(v-model='signForm.newPassword' show-password)
        el-form-item(label='确认新密码' prop="SecondPassword")
            el-input(v-model='signForm.SecondPassword' show-password)
        el-button(type="primary" @click="onSign") 确认
        el-button(type="primary" @click="cancelSubmit") 取消
</template>

<script>
export default {
    name: 'Sign',
    data: () => ({
        signForm: {
            password: '',
            newPassword: '',
            SecondPassword: ''
        },
        formRules: {
            password: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
            newPassword: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
            SecondPassword: [{ required: true, message: '请再次输入新密码', trigger: 'blur' }]
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
