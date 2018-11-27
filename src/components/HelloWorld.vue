<template lang="pug">
  .container 
    h1 {{msg}}
    el-button(type="primary") 主要按钮
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.container
  padding 16px
  background-color #eee
  border-radius 10px
  h1
    padding 8px
    background-color #d8d8d8
    border-radius 10px
</style>
