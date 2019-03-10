<template>
  <a
    href="https://pin84.github.io/live/05_css3/05_3dPictrues/"
    target="_brank"
    class="three"
  >
    <div class="three_3d">
      <div class='inner'>
        <span class="first">3D 图片旋转</span>
      </div>
      <div class='inner'>
        <span class="second">3D 图片旋转</span>
      </div>
    </div>
    <div class="desc">
      <p class="title">3D旋转</p>
      <p class='detail'>只支持chrome浏览器</p>
    </div>
  </a>
</template>


<script>
export default {

}
</script>


<style lang='stylus' scoped>
.three
  position relative
  width 260px
  height 260px
  border-radius 5px
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  background-image linear-gradient(
    0deg,
    #336666,
    rgba(255,255,255,0) 70%
  )
  &:hover
    box-shadow 0 2px 30px #FF0033
  .three_3d
    position relative
    display flex
    margin-top 30px
    .inner
      width 100%
      height 100px
      line-height 100px
      font-size 22px
      font-weight bold
      white-space nowrap
      overflow hidden
      &:first-child
        background-color indianred 
        color darkred
        transform-origin right
        transform perspective(100px) rotateY(-15deg)
      &:last-child
        background-color lightcoral 
        color antiquewhite
        transform-origin: left;
        transform: perspective(100px) rotateY(15deg);
      span 
        position absolute 
        animation marquee 5s linear infinite

  .desc
    position absolute
    padding 10px
    width 100%
    height 100px
    bottom 0
    color #fff
    z-index 1
    box-sizing border-box
    overflow hidden
    // background #336666
    opacity 0.9

    .title
      font-size 20px
      font-family serif 
      text-align center
      line-height 40px
      // text-transform uppercase
      // letter-spacing 0.4em
      // position absolute 
      width 100%
    .detail
      text-indent 2em 
      font-size 16px
      line-height 18px
      // white-space pre-wrap
      word-break break-all
      // word-wrap:break-word; 
@keyframes marquee{
  from {left:100%}
  to{left:-100%}
}

//第一个延迟
.three .three_3d .inner:first-child span 
  animation-delay: 2.5s;
  left: -100%;
</style>
