<template>
  <a
    href=""
    id="noteWrapper"
  >

    <div class="desc">
      <p class="title">ToDoList</p>
      <p class="detail">数据库版的ToDoList</p>
    </div>
  </a>
</template>
<script>
export default {

}
</script>
<style lang='stylus' scoped>
@import './common.styl'
#noteWrapper
  position relative
  display block
  width 260px
  height 260px
  border-radius 5px
  background-color #ccc
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  &:hover
    box-shadow 0 2px 30px #FF0033
</style>