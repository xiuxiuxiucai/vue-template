<style lang="stylus" scoped>
.container
    height 100%
    width 100%
    background-image url('../../images/Login.jpg')
.login-box
    position fixed
    top calc(50% - 200px)
    left calc(50% - 175px)
    width 350px
    height 340px

    background-color rgba(255, 255, 255, 0.9)
    border 3px solid #888
    border-radius 10px
    padding 16px
    .title
        font-size 35px
        font-weight bolder
        font-family Monospace
        margin 10px 0px 40px 0px
.el-form-item
    margin 20px 10px 20px 0px
.el-button
    width 80%
    margin 10px
</style>

<template lang="pug">
.container 
    .login-box
        .title 事务管理系统
        el-form(ref="loginForm" :model="loginData" :rules="formRules" label-width="5px")
            el-form-item(label="" prop="username")
                el-input(v-model="loginData.username" placeholder="在此处输入用户名")
            el-form-item(label="" prop="password")
                el-input(v-model="loginData.password" placeholder="在此处输入密码" show-password)
            el-button(type="primary" @click="onSubmit('loginForm')") 登入系统
            el-button(@click="signVisable = !signVisable") 注册用户
    el-dialog(title="注册" :visible.sync="signVisable")
        sign(@submit-sign="signVisable = false")
</template>

<script>
import Sign from './Sign'
export default {
    name: 'Login',
    data: () => ({
        loginData: {
            username: '',
            password: ''
        },
        formRules: {
            username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
            password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        },
        signVisable: false
    }),
    components: { Sign },
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$get('/mission/isLoginByAccount', this.loginData).then(resp => {
                        if (resp.data.state) {
                            this.$router.push('/index/MissionCenter')
                            document.cookie += 'token=123321'
                        }else {
                            this.$message.warning(resp.data.message)
                        }
                    })                    
                }else {
                    this.$message.warning('请正确填写信息')
                }
            })
        }
    }
}
</script>
