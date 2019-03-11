<template>
<a id="penWrapper" >
  <div class="pencil">
    <span class="taper"></span>
    <span class="barrel">hello</span>
    <span class="eraser"></span>
  </div>
   <div class="desc">
      <p class="title">ToDoList</p>
      <p class="detail">数据库版的ToDoList</p>
    </div>
</a>
</template>


<script>
 export default{

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
  background linear-gradient(to bottom left, white,dimgray)
  box-shadow 0 2px 30px rgba(0,0,0,0.2)
  font-family sans-serif 
  // overflow hidden
  &:hover
    box-shadow 0 2px 30px #FF0033
  .pencil
    position relative
    width 230px
    height 35px
    left 10px
    top 50px
    background deeppink 
    .barrel
      position absolute
      width 180px
      left 40px
      background green 
      border-top 10px solid forestgreen
      border-bottom 10px solid darkgreen
    .taper
      border 1px solid red
      &::before,&::after
        content ''  
        position absolute 
        left -40px
        border-style solid 
        border-width calc(35px /2) 40px
      &::before
        border-color transparent burlywood transparent transparent
      &::after
        border-color   transparent green transparent transparent
        transform scale(0.3)
        border 2px solid red
</style>
