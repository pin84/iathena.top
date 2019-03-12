<template>
  <a
    :href="url"
    target="_brank"
    id="macBookWrapper"
  >
    <div class="macbook">
      <span class="screen"></span>
      <span class="base"></span>
    </div>
    <div class="desc">
      <p class="title">ToDoList</p>
      <p class="detail">数据库版的ToDoList</p>
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
@import './common.styl';
#macBookWrapper
  position relative
  display block
  width 260px
  height 260px
  border-radius 5px
  background-color #ccc
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  &:hover
    box-shadow 0 2px 30px #FF0033
  .macbook
    position relative
    width 200px
    display flex
    flex-direction column
    align-items center 
    top 40px
    left 30px
    .screen
      position relative
      width 170px
      height calc(170px * 0.667)
      background-color black 
      border-radius 3% 3% 0 0 
      border 2px solid silver
      border-bottom none 
      &::before
        color #fff
        content ''
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        background radial-gradient(
          circle at right bottom,
          rgba(255,255,255,0.4) 75%,
          rgba(255,255,255,0.6) 75%
        )
        margin 4.3% 3.2%
    .base
      position relative
      width inherit
      height 9px
      background linear-gradient(
        white 55%,
        #999 60%,
        #222 90%,
        rgba(0,0,0,0.1) 100%
      )
      border-radius 0 0 10% 10% / 0 0 50% 50%
      &::before
        content ''
        position absolute 
        width inherit 
        height 55%
        background linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(255, 255, 255, 0.8) 1%,
          rgba(0, 0, 0, 0.4) 4%,
          transparent 15%,
          rgba(255, 255, 255, 0.8) 50%,
          transparent calc(100% - 15%),
          rgba(0, 0, 0, 0.4) calc(100% - 4%),
          rgba(255, 255, 255, 0.8) calc(100% - 1%),
          rgba(0, 0, 0, 0.5) 100%
        )
      &::after
        content ''  
        position absolute 
        width 25px
        height 3px
        background-color #888
        left calc(50% - 25px/2 )
        box-shadow inset -0.9px -0.2px 0.8px rgba(0,0,0,0.2),inset 0.9px 0.2px 0.8px rgba(0,0,0,0.2)
        border-radius 0 0 7% 7% / 0 0 95% 95%

  .desc
    color black   
</style>