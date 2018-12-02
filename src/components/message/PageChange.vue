<template>
  <div class="page-change">
    <a href="" class="tt">第一页</a>
    <a href="">上一页</a>
    <a href="">下一页</a>
    <a href="">最后一页</a>
  </div>
</template>


<script>
export default {

}
</script>


<style lang='stylus' scoped>
.page-change
  width 100%
  font-size 1.4rem
  line-height 24px
  a
    // display inline-block
    margin-right 10px
    &:hover
      text-decoration underline
</style>
