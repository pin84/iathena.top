<template>
<div class="wrapper">
  <div class="title">
    <span>关于我</span>
  </div>
  <div class="avartor">
    <img src="../assets/img/avartor.jpg" alt="">
  </div>
  <div class="desc">
      我叫覃平，坐标广州，是一名从事前端工作的普通一员。前端是一门有容乃大的行业，我并不是计算机专业出身。 在自学前端之前，我一直从事的是印刷设备的售后服务工作。庆幸的是在慢长的自学中，让我体会到了乐趣，让我能一直走到今天。
  </div>
</div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
.wrapper
  width 100%
  min-height 100vh
  display flex
  flex-direction column
  // justify-content center
  align-items center
  background #eee
  .title
    font-size 3rem
    font-weight 600
    margin 9rem 0  4rem 0
    span
      padding .5rem 0
      border-bottom 2px solid #E87E04
  .avartor
    width 200px
    height 200px
    border-radius 50%
    overflow hidden
    img
      width 100%
      height 100%
  .desc
    width 60%
    margin 3rem auto 
    font-size 1.6rem
    text-indent 2em
</style>
