<template>
  <div class="seawave">
      <div class='desc'>
        <!-- <p class="title">静态页面-企业官网</p> -->
        <!-- <p class='detail'>无</p> -->
      </div> 
      <span class="wave"></span>
      <span class="wave"></span>
      <span class="wave"></span>
  </div>
</template>


<script>
export default {

}
</script>


<style lang='stylus' scoped>
@import './common.styl';
  .seawave
    position relative
    display block
    width 260px
    height 260px
    background-color #f5f5f5
    background-image linear-gradient(
      0deg,
      darkblue,
      rgba(255,255,255,0) 70%,
      rgba(255,255,255,0.5)
    )
    border-radius 5px
    box-shadow 0 2px 30px rgba(0,0,0,0.2)
    overflow hidden
    &:hover
      box-shadow 0 2px 30px #FF0033
    .wave
      // display inline-block
      position absolute 
      top 100px
      left -100px
      width 500px
      height 500px
      background deepskyblue 
      opacity 0.4
      border-radius 43%
      animation drift linear infinite
      //加大波动幅度(修改border-radius 也能达到同样的效果)
      // transform-origin 50% 45%
      &:nth-of-type(1){
        animation-duration 9s
      }
      &:nth-of-type(2){
        animation-duration 11s
      }
      &:nth-of-type(3){
        animation-duration 13s
        background-color orangered
        opacity 0.1
      }

      
      @keyframes drift{
        from{
          transform rotate(360deg)
        }
      }
      
</style>
