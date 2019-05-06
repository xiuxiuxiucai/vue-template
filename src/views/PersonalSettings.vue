<style lang="stylus" scoped>
.header
    width 60%
    display flex
    flex-flow row nowrap
    align-items center
    justify-content space-between
    padding-bottom 16px
    border-bottom 2px solid #888
    .title
        font-size 24px
        font-weight bolder
.content
    padding-top 32px
    width 55%
</style>

<template lang="pug">
.container
    .header
        span.title {{compMap[compName]}}
        el-radio-group(v-model="compName")
            el-radio-button(label="AccountEditing") 账号编辑
            el-radio-button(label="passwordSetting") 密码修改
    .content
        keep-alive
            components(:is="compName")
</template>

<script>
import personalSettings from '../components/personalSettings'
export default {
    name: 'personalSettings',
    data: () => ({
        compName: 'AccountEditing',
        compMap: {
            AccountEditing: '账号编辑',
            passwordSetting: '密码修改'
        }
    }),
    components: { ...personalSettings },
    methods: {
    },
    mounted() {
    }
}
</script>
