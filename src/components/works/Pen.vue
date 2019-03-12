<template>
  <a id="penWrapper" :href="url" target="_brank">
    <div class="pencil">
      <span class="taper"></span>
      <span class="barrel">made in china</span>
      <span class="eraser"></span>
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
@import './common.styl'
#penWrapper
  position relative
  display block
  width 260px
  height 260px
  border-radius 5px
  background-color lightskyblue
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  &:hover
    box-shadow 0 2px 30px #FF0033
  .pencil
    position relative
    width 240px
    height 35px
    left 5px
    top 90px
    transform rotate(-10deg)
    filter drop-shadow(5px 10px 3px gray)
    .barrel
      position absolute
      width 180px
      left 40px
      background green 
      //两条边的高度加上line-height 等于笔身的高度
      border-top 10px solid forestgreen
      border-bottom 10px solid darkgreen
      line-height 15px
      //end
      text-align center
      color silver 
      text-transform uppercase
    .taper::before,.taper::after
      content ''  
      position absolute 
      left -40px
      border-style solid 
      border-width calc(35px /2) 40px
    .taper::before  
      border-color transparent burlywood transparent transparent
    .taper::after
      border-color   transparent black transparent transparent
      transform scale(0.3)
    .eraser
      position absolute 
      right 0
      width 30px
      height 15px
      border-top 10px solid pink
      border-bottom 10px solid lightcoral
      background-color lightpink
      border-radius 0 5px 0 0
      &::before
        content ''
        position absolute 
        top -10px
        width 10px
        height 15px
        background-color silver 
        border-top 10px solid lightgray
        border-bottom 10px solid gray

</style>
