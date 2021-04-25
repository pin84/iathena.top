<template>
  <div
    id="noteWrapper"
  >
    <div class="book">
      <div class="page">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="desc">
      <!-- <p class="title">美团网</p> -->
      <!-- <p class='detail'>无</p> -->
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang='stylus' scoped>
@import './common'
#noteWrapper
  position relative
  display block
  width 260px
  height 260px
  border-radius 5px
  background-image linear-gradient(
    #fff 20%,
    #009999
  )
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  &:hover
    box-shadow 0 2px 30px #FF0033

  .book
    position relative
    --sw 5px //定义当前对象轮廓的宽度
    width 150px
    height 100px
    top 30px
    left 50%
    transform translateX(-50%)
    background-color white
    border var(--sw) solid cadetBlue	
    border-radius var(--sw)
    box-sizing border-box
    .page
      height inherit 
      width calc(50% + var(--sw) + var(--sw)/2)
      background-color inherit 
      border inherit
      border-radius inherit 
      position absolute 
      top calc(-1 * var(--sw))
      right calc(-1 * var(--sw))
      display flex
      flex-direction column
      justify-content space-between
      padding 8% 5%
      box-sizing border-box
      animation flip 6s linear infinite
      transform-origin left 
      transform-style preserve-3d
      span
        display block
        width 100%
        border-top var(--sw) solid cadetblue
        border-radius inherit
        transform-origin left
        animation  6s linear infinite
        transform scaleX(0)
        &:nth-child(1)
          animation-name stroke-1
        &:nth-child(2)
          animation-name stroke-2
        &:nth-child(3)
          animation-name stroke-3
        &:nth-child(4)
          animation-name stroke-4


  @keyframes stroke-1 {
    0%{
      transform :scaleX(0)
    }
    10%,100%{
      transform :scaleX(1)
    }
  }      
  @keyframes stroke-2 {
    0%{
      transform :scaleX(0)
    }
    20%,100%{
      transform :scaleX(1)
    }
  }      
  @keyframes stroke-3 {
    0%{
      transform :scaleX(0)
    }
    30%,100%{
      transform :scaleX(1)
    }
  }      
  @keyframes stroke-4 {
    0%{
      transform :scaleX(0)
    }
    40%,100%{
      transform :scaleX(1)
    }
  }      

  @keyframes flip {
    55%{
      transform:rotateY(0) translateX(0) skew(0)
    }
    70%{
      transform:rotateY(-90deg) translateX(calc(-1 * var(--sw) / 2)) skewY(-20deg)
    }
    80%,100%{
      transform:rotateY(-180deg) translateX(calc(-1 * var(--sw) )) skew(0)
    }
  }

</style>