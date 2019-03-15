<template>
  <a
    href=""
    id="candleWrapper"
  >
    <div id="candle">
      <span class="glow"></span>
      <span class="flames"></span>
      <span class="thread"></span>
    </div>

  </a>
</template>
<script>
export default {

}
</script>
<style lang='stylus' scoped>
#candleWrapper
  position relative
  display block
  width 260px
  height 260px
  border-radius 5px
  background-color #fff
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  &:hover
    box-shadow 0 2px 30px #FF0033
  #candle
    position relative
    width 100px
    height 200px
    font-size 10px
    // border 1px solid red
    // background-color darkorange
    background linear-gradient(
      orange,
      darkorange,
      sienna,
      saddlebrown 50%,
      rgba(0,0,0,0.6)
    )
    border-radius 100px / 40px
    box-shadow:
      inset 2em -3em 5em rgba(0, 0, 0, 0.4),
      inset -2em 0 5em rgba(0, 0, 0, 0.4);
    &::before
      content ''
      position absolute 
      width inherit
      height 50px
      border 2px solid darkorange
      border-radius 50%
      box-sizing border-box
      background radial-gradient(
        #444,
        orange,
        saddlebrown,
        sienna,
        darkorange
      )
      filter opacity(0.7)


</style>