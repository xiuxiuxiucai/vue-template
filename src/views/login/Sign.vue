<style lang="stylus" scoped>
.sign
    background-color #fff
    .el-button
        width 90%
</style>

<template lang="pug">
.sign
    el-form(ref='signForm' :rules="formRules" :model='signForm', label-width='80px')
        el-form-item(label='用户名' prop="username")
            el-input(v-model='signForm.username')
        el-form-item(label='密码' prop="password")
            el-input(v-model='signForm.password')
        el-button(type="primary" @click="onSign") 注册
</template>

<script>
export default {
    name: 'Sign',
    data: () => ({
        signForm: {
            username: '',
            password: ''
        },
        formRules: {
            username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
            password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        },
    }),
    methods: {
        onSign() {
            this.$refs.signForm.validate((valid) => {
                if (valid) {
                    console.log(this.signForm)
                    this.$post('/v1/user/sign', this.signForm).then(resp => {
                        this.$message({
                            message: resp.data.data.msg,
                            type: resp.data.data.state ? 'success' : 'error'
                        })
                    })
                    this.$emit('submit-sign', true)
                }
            })
        }
    }
}
</script>
