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
  background-color black
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  &:hover
    box-shadow 0 2px 30px #FF0033
  #candle
    position relative
    display flex
    justify-content center
    width 100px
    height 140px
    bottom -120px
    left 50%
    transform translateX(-50%)
    // font-size 10px
    background linear-gradient(
      orange,
      darkorange,
      sienna,
      saddlebrown 70%,
      rgba(0,0,0,0.6)
    )
    border-radius 100px / 40px
    box-shadow:
      inset 20px -30px 50px rgba(0, 0, 0, 0.4),
      inset -20px 0 50px rgba(0, 0, 0, 0.4);
    &::before
      content ''
      position absolute 
      width inherit
      height 30px
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
    .thread
      position absolute 
      width 6px
      height 36px
      top -18px
      background linear-gradient(
        #111,
        black,
        orange 90%
      )
      border-radius 40% 40% 0 0
    .flames
      position absolute 
      width 18px
      height 60px
      &::before //内焰
        content ''
        position absolute 
        width inherit 
        height 60px
        background royalblue
        top -48px
        border-radius 50% 50% 35% 35%
        border 2px solid dodgerblue
        box-sizing border-box
        filter opacity(0.7)
      &::after
        content ''  
        position absolute 
        width inherit 
        height 80px
        top -80px
        background linear-gradient(white 80%,transparent)
        border-radius 50% 50% 20% 20%
        box-shadow 0 -6px 4px darkorange
        animation move 5s linear infinite
    .glow
      position absolute 
      width 50px
      height 120px
      background-color orangered 
      border-radius 50%
      top -105px
      filter blur(40px)
      // animation blink 500ms infinite
@keyframes move {
  0%,100%{
    transform:rotate(2deg)
  }
  50%{
    transform:rotate(-2deg)
  }
}
@keyframes enlarge {
  0%,100% {
    height: 120px
    top -120px
  }
  50%{
    height:140px
  }
}
@keyframes blink {
    to {
        filter: blur(6em) opacity(0.8);
    }
}
    

</style>