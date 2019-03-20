<template>
<div id="btnWrite">
  <span @click="$emit('toWriteMsg')">写留言</span>
</div>
  
</template>
<script>
export default {
}
</script>
<style lang='stylus' scoped>
#btnWrite
  position relative
  width 100px
  height 60px
  background-image radial-gradient(circle at center, #045, #002)
  span 
    display block
    width 50px
    height 50px
    text-align center
    line-height 50px
    color #fff
    margin-top 5px
    border-radius 50%
    position relative 
    box-shadow  0 0 0 1px #0cf inset, 0 0 10px #0cf inset 
    transition .3s linear
    animation 10s move linear infinite
    &::before
      content ''
      display block
      background-color #fff
      position absolute 
      width 10px
      height 5px
      transform rotate(-45deg)
      top 8px
      left 8px
      opacity .5
      border-radius 50%
    &:hover
      cursor pointer
      box-shadow  0 0 0 1px #009999 inset, 0 0 10px #0cf inset 
@keyframes move {
  0%{
    transform  translateX(0)
  }
  50%{
     transform  translateX(100%)
  }
  100%{
    transform  translateX(0)
  }
}
</style>