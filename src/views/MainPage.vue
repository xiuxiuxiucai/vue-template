<style lang="stylus" scoped>
.title
    position fixed
    font-family Monospace
    top 12px
    left 12px
    font-size 26px
    font-weight bolder
    color #FFD04B
.el-main
    height calc(100% - 80px)
    overflow auto
.main-container
    display flex
    flex-direction column
    align-items center
.el-container
    height 100%
    .el-header
        padding 0px
    .el-menu
        display flex
        flex-direction row
        justify-content center
.login
    position fixed
    height 60px
    top 0px 
    right 18px
    white-space nowrap
    .avatar
        cursor pointer
        margin-top 18px
        width 26px
        height 26px
        border-radius 50%
        position relative
</style>

<template lang="pug">
el-container
    el-header
        el-menu(router, ref="menu" :default-active='activeIndex2', 
                mode='horizontal', @select='handleSelect', background-color='#545c64', 
                text-color='#fff', active-text-color='#ffd04b')
            el-menu-item(index="/index/TodayMission") 今日日程
            el-menu-item(index="/index/MissionAlter") 新建事务
            //- el-menu-item(index="/index/MissionCenter") 历史日志
            el-submenu(index="2")
                template(slot="title") 统计图表
                el-menu-item(index="/index/statisticsItem") 统计
                el-menu-item(index="/index/MissionChart") 图表
            el-menu-item(index="/index/test") 历史日志
            el-menu-item(index="/index/StaffManage") 员工管理
            el-menu-item(index="/index/AccountManage") 账号管理
            
            //- el-menu-item(index="/index/StaffMission") 员工事务
            //- el-menu-item(index="/index/MissionItem") 事务详情
    el-main
        router-view.main-container
    el-dropdown.login(@command='userAction')
        img.avatar(src="../images/avatar.png")
        el-dropdown-menu(slot='dropdown')
            el-dropdown-item(command='userSetting') 个人设置
            el-dropdown-item(command='logout') 登出
    .title 事务管理系统
</template>

<script>
export default {
    name: 'MainPage',
    data: () => ({
        activeIndex: '1',
        activeIndex2: '1'
    }),
    methods: {
        userAction(key) {
            switch (key) {
                case 'logout':
                    this.logout()
                break
                case 'userSetting':
                    this.ToUserSetting()
                break
            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        ToUserSetting() {
            this.$router.push('/index/PersonalSettings')
        },
        logout() {
            document.cookie = 'token=0;expires=' + new Date(0).toUTCString()
            this.$router.push('/login')
        }
    },
    mounted() {
    }
}
</script>
