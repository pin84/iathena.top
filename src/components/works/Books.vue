<template>
  <a
    :href="url"
    id="bookWrapper"
    target="_brank"
  >
    <div id="book">
      <span>HTML</span>
    </div>
    <div class="desc">
      <!-- <p class="title">新时代英语</p> -->
      <p class="detail">VUE 移动端，新时代英语</p>
    </div>
  </a>
</template>
<script>
export default {
props:{
  url:''
}

}
</script>
<style lang='stylus' scoped>
@import './common.styl'
#bookWrapper
  position relative
  display block
  width 260px
  height 260px
  border-radius 5px
  background linear-gradient(to bottom left, white,dimgray)
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  font-family sans-serif 
  // overflow hidden
  &:hover
    box-shadow 0 2px 30px #FF0033
  #book
    position relative 
    top 40px
    left 90px
    width 120px
    height 180px
    background blue
    background linear-gradient(#000080,deeppink,tomato)
    transform skewY(-10deg)
    box-shadow -10px 5px 30px rgba(0,0,0,0.5)
    transition 0.5s
    // border 1px solid red
    &::before, &::after
      content:''
      position absolute 
    &::before
      width 15px
      height 100%
      background linear-gradient(#000080,deeppink,tomato)
      top 0
      left -15px
      transform skewY(45deg)
      transform-origin right
      filter brightness(0.6)
    &::after
      width 100%
      height 15px
      background white
      top -15px
      left 0
      transform-origin bottom
      transform skewX(45deg)
      filter brightness(0.9)
    &:hover  
      top 30px
    span
      position absolute
      display block
      color #f5f5f5 
      font-size 22px 
      background silver 
      text-align center
      width 100%
      height 80px
      margin-top 50px
      padding-top 20px
      box-sizing border-box
      text-shadow -2px 2px 10px rgba(0,0,0,0.3)
      background orange
      &::before
        content ''
        position absolute
        width 15px
        height 100%
        background orange
        top 0
        left -15px
        transform skewY(45deg)
        transform-origin right
        filter brightness(0.6)
      &::after
        content '<development />'
        display block
        font-size 10px
  .desc
    height 30px
</style>