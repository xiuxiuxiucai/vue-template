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
            //- el-radio-button(label="NewMission") {{headerName}}
            //- el-radio-button(label="MissionAmount") 工作量堆积图
    .content
        keep-alive
            components(:is="compName")
</template>

<script>
import missionAlter from '../components/missionAlter'
export default {
    name: 'missionAlter',
    data: () => ({
        compName: 'NewMission',
        headerName: '编辑事务',
        compMap: {
            NewMission: '编辑事务',
            MissionAmount: '工作量堆积图'
        }
    }),
    components: { ...missionAlter },
    methods: {
    },
    mounted() {
        if(!this.$route.params.editValue){
            this.headerName='新建事务'
            this.compMap.NewMission='新建事务'
        }else{
            this.headerName=this.$route.params.editValue
            this.compMap.NewMission=this.$route.params.editValue
        }
    }
}
</script>
