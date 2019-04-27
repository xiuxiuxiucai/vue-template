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
            el-radio-button(label="MissionLife") 事务流程
            el-radio-button(label="MissionDetails") 事务详情
    .content
        keep-alive
            components(:is="compName")
</template>

<script>
import missionItem from '../components/missionItem'
export default {
    name: 'missionItem',
    data: () => ({
        compName: 'MissionLife',
        compMap: {
            MissionLife: '事务流程',
            MissionDetails: '事务详情'
        }
    }),
    components: { ...missionItem },
    methods: {
        fetch() {
            this.$get('/Mission/GetTodayMission').then(resp => {
                console(resp)
            })
            this.$get('/v1/club/getAcitvityInfoById').then(resp => {
                resp.data.data.map((item, index) => {
                    this.state[index].value = item
                })
            })
        }
    },
    mounted() {
        this.fetch()
    }
}
</script>
